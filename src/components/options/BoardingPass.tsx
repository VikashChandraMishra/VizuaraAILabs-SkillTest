import ModalContainer from "../additional/ModalContainer";
import passQR1 from "../../assets/passQR1.png";
import passQR2 from "../../assets/passQR2.png";
import passPlane from "../../assets/pass-plane.png";

const BoardingPass = () => {
    return (
        <ModalContainer toggleModal={() => { }}>
            <div className="w-[78vw] flex flex-col py-6 px-8 justify-start items-center bg-slate-100 rounded shadow-xl">
                <p className="text-center text-red-600 text-2xl">
                    <span className="font-bold">Boarding Pass Issued</span>
                    <span> (Final Approval Pending)</span>
                </p>

                <div className="mt-14 w-full">
                    <div className="flex w-[90%] mx-auto">
                        <div className="w-3/4">
                            <p className="font-semibold pl-6 text-blue-600 px-3 h-14 flex items-center text-xl border border-black">
                                <img src={passPlane} width={20} className="mr-4" alt="" />
                                Boarding Pass (Web Check In)
                            </p>
                            <div className="flex-col border border-black px-6">
                                <div className="flex justify-between py-4">
                                    <span>/</span>
                                    <span className="font-bold text-xl">Bagdogra (T1) to Ranchi</span>
                                </div>
                                <div className="flex justify-between my-2">
                                    <div className="w-36 flex flex-col px-3 py-2 border-2 border-black">
                                        <span className="font-light">Flight</span>
                                        <span className="text-2xl font-semibold">6E 6182</span>
                                    </div>
                                    <div className="w-36 flex flex-col px-3 py-2 border-2 border-black">
                                        <span className="font-light">Gate</span>
                                        <span className="text-2xl font-semibold">A 21</span>
                                    </div>
                                    <div className="w-36 flex flex-col px-3 py-2 border-2 border-black">
                                        <span className="font-light">Boarding Time</span>
                                        <span className="text-2xl font-semibold">1500</span>
                                    </div>
                                    <div className="w-36 flex flex-col px-3 py-2 border-2 border-black">
                                        <span className="font-light">Boarding</span>
                                        <span className="text-2xl font-semibold">Zone 1</span>
                                    </div>
                                    <div className="w-36 flex flex-col px-3 py-2 border-2 border-black">
                                        <span className="font-light">Seat</span>
                                    </div>
                                </div>
                                <div className="my-4 flex justify-start gap-2">
                                    <img src={passQR1} width={150} alt="" />
                                    <div className="flex flex-col justify-between w-full">
                                        <div className="flex">
                                            <div className="p-2 text-lg flex flex-col gap-1">
                                                <div className="flex gap-16">
                                                    <span className="font-light">Date</span>
                                                    <span className="">17 Dec2025</span>
                                                </div>
                                                <div className="flex gap-16">
                                                    <span className="font-light">Seq</span>
                                                    <span className="">&nbsp;&nbsp;&nbsp;0102</span>
                                                </div>
                                            </div>
                                            <div className="p-2 text-lg flex flex-col gap-1">
                                                <div className="flex gap-6">
                                                    <span className="font-light">Departure</span>
                                                    <span className="">1555 Hrs</span>
                                                </div>
                                                <div className="flex gap-6">
                                                    <span className="font-light">Services</span>
                                                    <span className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NIL</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-center w-fit mx-auto">Gate is subject to change and will close 25 minutes prior to departure.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <p className="font-semibold text-blue-600 px-6 h-14 flex items-center border border-black">Your Departure Terminal is T1
                                <img src={passPlane} width={18} className="ml-3" alt="" />
                            </p>
                            <div className="flex-col border border-black px-6 py-2">
                                <div className="py-1">/</div>
                                <p className="font-bold text-lg py-1">Bagdogra (T1) to Ranchi</p>
                                <div className="flex gap-16 text-lg">
                                    <span className="font-light">Flight</span>
                                    <span className="">6E 6182</span>
                                </div>
                                <div className="flex gap-16 text-lg">
                                    <span className="font-light">Date</span>
                                    <span className="">&nbsp;17 Dec2025</span>
                                </div>
                                <div className="flex gap-16 text-lg">
                                    <span className="font-light">PNR</span>
                                    <span className="">&nbsp;&nbsp;KV4FXW</span>
                                </div>
                                <div className="flex gap-10 text-lg">
                                    <span className="font-light">Services</span>
                                    <span className="">NIL</span>
                                </div>
                                <div className="flex py-5 justify-start gap-8">
                                    <img src={passQR2} width={90} alt="" />
                                    <div className="flex flex-col justify-center gap-1">
                                        <div className="flex gap-10 text-lg">
                                            <span className="font-light">Seat</span>
                                        </div>
                                        <div className="flex gap-10 text-lg">
                                            <span className="font-light">Seq</span>
                                            <span>0102</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="flex justify-end w-full mt-4">
                    <button className="border border-blue-400 text-blue-500 rounded-md px-6 py-2">CANCEL</button>
                    <button className="text-blue-500 rounded-md px-6 py-2">PRINT</button>
                </div>
            </div>
        </ModalContainer>
    );
};

export default BoardingPass;
