import planeFront from "../../assets/plane-front.png";
import planeRightWing from "../../assets/plane-right-wing.png";
import planeLeftWing from "../../assets/plane-left-wing.png";
import React from "react";
import Seat from "../additional/Seat";
import { Button } from "@mui/material";

interface Props {
    setSelectedOption: Function;
    selectedSeats: any[];
    setSelectedSeats: Function;
};

const SelectSeat: React.FC<Props> = ({ setSelectedOption, selectedSeats, setSelectedSeats }) => {

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
            <div className="mx-auto mt-10 w-[370px]">
                <img src={planeLeftWing} width={500} className="absolute bottom-[-15%] left-[5.7%] border-r border-gray-500" alt="" />
                <img src={planeRightWing} width={500} className="absolute bottom-[-15%] right-[5.7%] border-l border-gray-500" alt="" />

                <p className="text-4xl mb-20 font-semibold text-center w-full">Select 2 Seats</p>

                <div className="flex my-4 gap-4 w-fit mx-auto">
                    <Button
                        variant="contained"
                        sx={{
                            backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                            '&:hover': {
                                backgroundImage: "linear-gradient(to right, #ff4081, #ab47bc)",
                                transform: 'scale(1.05)'
                            },
                            padding: '20px',
                            color: "white",
                            width: '90px',
                            height: '40px',
                            borderRadius: "24px"
                        }}
                        onClick={() => setSelectedOption('Passenger Details')}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="contained"
                        disabled={selectedSeats.length < 2}
                        sx={{
                            backgroundImage: selectedSeats.length < 2 ? "bg-gray-100" : "linear-gradient(to right, #ab47bc, #ff4081)",
                            '&:hover': {
                                backgroundImage: "linear-gradient(to right, #ff4081, #ab47bc)",
                                transform: 'scale(1.05)'
                            },
                            padding: '20px',
                            color: "white",
                            width: '90px',
                            height: '40px',
                            borderRadius: "24px"
                        }}
                        onClick={() => setSelectedOption('Boarding Pass')}
                    >
                        Next
                    </Button>
                </div>

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
