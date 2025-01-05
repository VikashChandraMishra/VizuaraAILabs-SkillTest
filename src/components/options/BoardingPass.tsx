import ModalContainer from "../additional/ModalContainer";
import passQR1 from "../../assets/passQR1.png";
import passQR2 from "../../assets/passQR2.png";
import passPlane from "../../assets/pass-plane.png";
import approvalSeal from "../../assets/approval-seal.png";

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

interface ModalProps {
    toggleModal: Function;
    seat: string;
    startCity: string;
    endCity: string;
    date: string;
    firstName: string;
    lastName: string;
};

interface Props {
    seats: any[];
    setSelectedOption: Function;
};

const BoardingPassModal: React.FC<ModalProps> = ({ toggleModal, seat, startCity, endCity, date, firstName, lastName }) => {

    return (
        <ModalContainer toggleModal={toggleModal}>
            <div className="relative w-[78vw] flex flex-col py-6 px-8 justify-start items-center bg-slate-100 rounded shadow-xl">
                <p className="text-center text-red-600 text-2xl">
                    <span className="font-bold">Boarding Pass Issued</span>
                    <span> (Final Approval Pending)</span>
                </p>
                <img src={approvalSeal} width={230} className="absolute top-72 right-96" alt="" />
                <div className="mt-14 w-full">
                    <div className="flex w-[90%] mx-auto">
                        <div className="w-3/4">
                            <p className="font-semibold pl-6 text-blue-600 px-3 h-14 flex items-center text-xl border border-black">
                                <img src={passPlane} width={20} className="mr-4" alt="" />
                                Boarding Pass (Web Check In)
                            </p>
                            <div className="flex-col border border-black px-6">
                                <div className="flex justify-between py-4">
                                    <span>{firstName}/{lastName}</span>
                                    <span className="font-bold text-xl">{startCity} (T1) to {endCity}</span>
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
                                        <span className="text-2xl font-semibold">{seat}</span>
                                    </div>
                                </div>
                                <div className="my-4 flex justify-start gap-2">
                                    <img src={passQR1} width={150} alt="" />
                                    <div className="flex flex-col justify-between w-full">
                                        <div className="flex">
                                            <div className="p-2 text-lg flex flex-col gap-1">
                                                <div className="flex gap-16">
                                                    <span className="font-light">Date</span>
                                                    <span className="">{date}</span>
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
                                <div className="py-1">{firstName}/{lastName}</div>
                                <p className="font-bold text-lg py-1">{startCity} (T1) to {endCity}</p>
                                <div className="flex gap-16 text-lg">
                                    <span className="font-light">Flight</span>
                                    <span className="">6E 6182</span>
                                </div>
                                <div className="flex gap-16 text-lg">
                                    <span className="font-light">Date</span>
                                    <span className="">&nbsp;{date}</span>
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
                                            <span>{seat}</span>
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

const PassIcon = () => {
    return (
        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path></svg>
    );
};

const BoardingPass: React.FC<Props> = ({ seats, setSelectedOption }) => {

    const [isPass1Open, setIsPass1Open] = useState(false);

    const togglePass1 = () => {
        setIsPass1Open(prevState => !prevState);
    };

    const [isPass2Open, setIsPass2Open] = useState(false);

    const togglePass2 = () => {
        setIsPass2Open(prevState => !prevState);
    };

    const [person1, setPerson1] = useState({ firstName: '', lastName: '' });
    const [person2, setPerson2] = useState({ firstName: '', lastName: '' });

    const startCity = localStorage.getItem('startCity') ?? 'No City Selected';
    const endCity = localStorage.getItem('endCity') ?? 'No City Selected';
    const date = localStorage.getItem('date') ?? 'No Date Selected';

    useEffect(() => {

        let person1Data = { firstName: '', lastName: '' };
        let person2Data = { firstName: '', lastName: '' };

        if (localStorage.getItem('person1'))
            person1Data = JSON.parse(localStorage.getItem('person1') ?? '');
        if (localStorage.getItem('person2'))
            person2Data = JSON.parse(localStorage.getItem('person2') ?? '');

        setPerson1({ firstName: person1Data.firstName, lastName: person1Data.lastName });
        setPerson2({ firstName: person2Data.firstName, lastName: person2Data.lastName });
    }, []);

    return (
        <div>
            <p className="text-white text-4xl text-center mt-20 font-bold">Collect Your Boarding Pass</p>

            {
                isPass1Open &&
                <BoardingPassModal
                    toggleModal={togglePass1}
                    startCity={startCity}
                    endCity={endCity}
                    date={date}
                    seat={seats[0]}
                    firstName={person1.firstName}
                    lastName={person1.lastName}
                />
            }

            {
                isPass2Open &&
                <BoardingPassModal
                    toggleModal={togglePass2}
                    startCity={startCity}
                    endCity={endCity}
                    date={date}
                    seat={seats[1]}
                    firstName={person2.firstName}
                    lastName={person2.lastName}
                />
            }

            <div className="flex flex-col items-end w-[20vw] mx-auto mt-16 gap-4">
                <Button
                    variant="contained"
                    sx={{
                        backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                        borderRadius: "4px",
                        color: 'black',
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center'
                    }}
                    onClick={togglePass1}
                >
                    <PassIcon />
                    Boarding Pass
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                        borderRadius: "4px",
                        color: 'black',
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center'
                    }}
                    onClick={togglePass2}
                >
                    <PassIcon />
                    Boarding Pass
                </Button>
            </div>
            <div className="flex flex-col justify-center mt-24 w-fit mx-auto gap-20">
                <Button
                    variant="contained"
                    sx={{
                        backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                        '&:hover': {
                            backgroundImage: "linear-gradient(to right, #ff4081, #ab47bc)",
                            transform: 'scale(1.05)'
                        },
                        borderRadius: "4px",
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                        textTransform: 'capitalize'
                    }}
                    onClick={() => setSelectedOption('Self Check-in')}
                >
                    Check In
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                        '&:hover': {
                            backgroundImage: "linear-gradient(to right, #ff4081, #ab47bc)",
                            transform: 'scale(1.05)'
                        },
                        borderRadius: "20px",
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                        textTransform: 'capitalize',
                    }}
                    onClick={() => setSelectedOption('Select Seat')}
                >
                    Previous
                </Button>
            </div>
        </div>
    );
};

export default BoardingPass;
