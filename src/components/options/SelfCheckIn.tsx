import { Button } from "@mui/material";
import ModalContainer from "../additional/ModalContainer";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { match } from "../../face-rec";

interface CamModalProps {
    toggleCamModal: Function;
};

const CamModal: React.FC<CamModalProps> = ({ toggleCamModal }) => {

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const webcamRef = useRef<Webcam>(null);

    const capture = async () => {
        if (webcamRef.current) {
            const matchObject = await match(webcamRef.current.getScreenshot());
            let personData = { firstName: '', lastName: '' };
            if (matchObject.length > 0) {
                // @ts-ignore
                if (matchObject[0]._label === 'person1Images') {
                    if (localStorage.getItem('person1')) {
                        personData = JSON.parse(localStorage.getItem('person1') ?? '');
                        alert("Hello, " + personData.firstName + ' ' + personData.lastName + '! Your face has been recognized successfully. Happy Journey!');
                        localStorage.setItem('person1Approved', 'true');
                        toggleCamModal();
                    } else {
                        alert("Your face was not recognized. Try again!");
                    }
                    // @ts-ignore
                } else if (matchObject[0]._label === 'person2Images') {
                    if (localStorage.getItem('person2')) {
                        personData = JSON.parse(localStorage.getItem('person2') ?? '');
                        alert("Hello, " + personData.firstName + ' ' + personData.lastName + '! Your face has been recognized successfully. Happy Journey!');
                        localStorage.setItem('person2Approved', 'true');
                        toggleCamModal();
                    } else {
                        alert("Your face was not recognized. Try again!");
                    }
                } else {
                    alert("Your face was not recognized. Try again!");
                }
            } else {
                alert("Your face was not recognized. Try again!");
            }
        }
    };

    return (
        <ModalContainer toggleModal={toggleCamModal}>
            <div className="w-1/2 bg-white min-h-[30vh] rounded-sm p-4">
                <div className="bg-black w-full min-h-[22vh] rounded-3xl">
                    <Webcam
                        audio={false}
                        height={720}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={1280}
                        videoConstraints={videoConstraints}
                    />
                </div>
                <div className="flex justify-between">
                    <button onClick={capture} className="border border-blue-400 text-blue-500 rounded-md px-6 py-2 mt-5">CLICK</button>
                    <button onClick={() => toggleCamModal()} className="border border-blue-400 text-blue-500 rounded-md px-6 py-2 mt-5">CANCEL</button>
                </div>
            </div>
        </ModalContainer>
    );
};

const SelfCheckIn = () => {

    const [isCamModalOpen, setIsCamModalOpen] = useState(false);

    const toggleCamModal = () => {
        setIsCamModalOpen(prevState => !prevState);
    };

    return (
        <div>
            <p className="text-white text-4xl text-center mt-20 font-bold">One Last Step to Fly</p>
            {
                isCamModalOpen && <CamModal toggleCamModal={toggleCamModal} />
            }
            <div className="flex w-fit mx-auto mt-32">
                <Button
                    variant="contained"
                    sx={{
                        backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                        borderRadius: "4px",
                        color: 'white',
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center',
                        textTransform: 'capitalize',
                        fontWeight: 'bold'
                    }}
                    onClick={toggleCamModal}
                >
                    Verify Passenger
                </Button>
            </div>
        </div>
    );
};

export default SelfCheckIn;
