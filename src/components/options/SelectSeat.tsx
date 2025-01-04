import planeFront from "../../assets/plane-front.png";
import planeRightWing from "../../assets/plane-right-wing.png";
import planeLeftWing from "../../assets/plane-left-wing.png";
import { useState } from "react";
import Seat from "../additional/Seat";

const SelectSeat = () => {

    const [selectedSeats, setSelectedSeats] = useState<any[]>([]);

    const handleSeatSelection = (seat: string) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
            return;
        }
        if (selectedSeats.length === 2) {
            setSelectedSeats([selectedSeats[1], seat])
        } else {
            setSelectedSeats(selectedSeats.concat(seat))
        }
    };

    return (
        <div className="relative overflow-scroll h-[100vh]">
            <div className="mx-auto mt-48 w-[370px]">
                <img src={planeLeftWing} width={500} className="absolute bottom-[-15%] left-[5.7%] border-r border-gray-500" alt="" />
                <img src={planeRightWing} width={500} className="absolute bottom-[-15%] right-[5.7%] border-l border-gray-500" alt="" />
                <img src={planeFront} className="w-full" alt="" />
                <div className="bg-white w-[365px] h-fit m-auto border-r border-l border-gray-500 px-3">
                    {
                        Array.from({ length: 14 }).map((_el, i) => (
                            <div key={i} className="flex justify-between font-semibold">
                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center">
                                        <Seat selectedSeats={selectedSeats} handleSeatSelection={handleSeatSelection} seat={`${i + 1}A`} />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Seat selectedSeats={selectedSeats} handleSeatSelection={handleSeatSelection} seat={`${i + 1}B`} />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Seat selectedSeats={selectedSeats} handleSeatSelection={handleSeatSelection} seat={`${i + 1}C`} />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center">
                                        <Seat selectedSeats={selectedSeats} handleSeatSelection={handleSeatSelection} seat={`${i + 1}D`} />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Seat selectedSeats={selectedSeats} handleSeatSelection={handleSeatSelection} seat={`${i + 1}E`} />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Seat selectedSeats={selectedSeats} handleSeatSelection={handleSeatSelection} seat={`${i + 1}F`} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default SelectSeat;
