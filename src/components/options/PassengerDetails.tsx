import { Button, TextField } from "@mui/material";
import passengerIcon from "../../assets/passenger-icon.png";
import rotateface from "../../assets/rotateface.gif";
import cameraicon from "../../assets/camera-icon.png";

import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

const PassengerDetails = () => {

    const [isCamera1On, setIsCamera1On] = useState(false);
    const [isCamera2On, setIsCamera2On] = useState(false);

    const [person1Images, setPerson1Images] = useState([]);
    const [person2Images, setPerson2Images] = useState([]);

    const handleCamera1 = () => {
        setIsCamera1On(prevState => !prevState);
    };
    const handleCamera2 = () => {
        setIsCamera2On(prevState => !prevState);
    };

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const webcam1Ref = useRef<Webcam>(null);

    const captureCam1 = () => {
        if (webcam1Ref.current && person1Images.length < 10) {
            // @ts-ignore
            setPerson1Images(person1Images.concat(webcam1Ref.current.getScreenshot()));
        }
    };

    const webcam2Ref = useRef<Webcam>(null);

    const captureCam2 = () => {
        if (webcam2Ref.current && person2Images.length < 10) {
            // @ts-ignore
            setPerson2Images(person2Images.concat(webcam2Ref.current.getScreenshot()));
        }
    };

    // const capture = useCallback(
    //     () => {
    //         if (webcamRef.current) {
    //             // @ts-ignore
    //             setPerson1Images(person1Images.concat(webcamRef.current.getScreenshot()));
    //         }
    //     },
    //     [webcamRef]
    // );

    return (
        <div className="w-[22vw] mx-auto mt-14 bg-gray-100 rounded-2xl shadow-lg pt-6 px-5">
            <img src={passengerIcon} width={50} className="mx-auto" alt="" />
            <p className="text-2xl text-gray-700 text-center mb-2">Enter Details</p>

            {/* P1 */}
            <p className="text-2xl text-gray-700 my-4">Person 1</p>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <TextField
                        label="First Name *"
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderRadius: "8px",
                            width: '270px'
                        }}
                        className="bg-gray-100"
                    />
                    <TextField
                        label="Last Name *"
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderRadius: "8px",
                            width: '270px'
                        }}
                        className="bg-gray-100"
                    />
                </div>
                <TextField
                    label="Email *"
                    variant="outlined"
                    fullWidth
                    sx={{
                        borderRadius: "8px"
                    }}
                    className="bg-gray-100"
                />
                <div className="w-full border-2 rounded-2xl mb-6">
                    <p className="text-sm font-bold mb-4 p-4">Capture your face from different angles <span className="rounded-full px-2 py-[1.5px] bg-gray-800 text-white ml-1">i</span></p>
                    <img src={rotateface} width={150} className="mx-auto rounded-2xl shadow-xl" alt="" />
                    {
                        isCamera1On ?
                            <div className="bg-blue-100 border-2 mt-3 pb-4 px-4 flex flex-col items-center">
                                <div className="text-blue-600 my-3 flex justify-between items-center w-full">
                                    Webcam
                                    <span className="text-3xl font-light cursor-pointer" onClick={handleCamera1}>&times;</span>
                                </div>
                                <Webcam
                                    audio={false}
                                    height={720}
                                    ref={webcam1Ref}
                                    screenshotFormat="image/jpeg"
                                    width={1280}
                                    videoConstraints={videoConstraints}
                                />
                                <button onClick={captureCam1} className="active:bg-blue-300 text-base bg-blue-500 text-white p-1 rounded-sm w-fit mx-auto mt-2 mb-4">Click to capture</button>
                            </div>
                            :
                            <div className="cursor-pointer bg-blue-100 hover:bg-blue-200 m-4 rounded-2xl shadow-lg py-3 text-blue-600 font-light flex flex-col items-center" onClick={handleCamera1}>
                                <img src={cameraicon} width={40} alt="" />
                                WEBCAM
                            </div>
                    }
                    <div className="px-4">
                        <progress className="rounded-lg w-full" max="100" value={person1Images.length * 10}></progress>
                    </div>
                    <div className="flex flex-wrap px-4">
                        {
                            person1Images.map((imgSrc, i) => (
                                <img key={i} className="w-16 h-12 m-1 rounded-xl" src={imgSrc} alt="" />
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* P2 */}
            <p className="text-2xl text-gray-700 my-4">Person 2</p>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <TextField
                        label="First Name *"
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderRadius: "8px",
                            width: '270px'
                        }}
                        className="bg-gray-100"
                    />
                    <TextField
                        label="Last Name *"
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderRadius: "8px",
                            width: '270px'
                        }}
                        className="bg-gray-100"
                    />
                </div>
                <TextField
                    label="Email *"
                    variant="outlined"
                    fullWidth
                    sx={{
                        borderRadius: "8px"
                    }}
                    className="bg-gray-100"
                />
                <div className="w-full border-2 rounded-2xl mb-6">
                    <p className="text-sm font-bold mb-4 p-4">Capture your face from different angles <span className="rounded-full px-2 py-[1.5px] bg-gray-800 text-white ml-1">i</span></p>
                    <img src={rotateface} width={150} className="mx-auto rounded-2xl shadow-xl" alt="" />
                    {
                        isCamera2On ?
                            <div className="bg-blue-100 border-2 mt-3 pb-4 px-4 flex flex-col items-center">
                                <div className="text-blue-600 my-3 flex justify-between items-center w-full">
                                    Webcam
                                    <span className="text-3xl font-light cursor-pointer" onClick={handleCamera2}>&times;</span>
                                </div>
                                <Webcam
                                    audio={false}
                                    height={720}
                                    ref={webcam2Ref}
                                    screenshotFormat="image/jpeg"
                                    width={1280}
                                    videoConstraints={videoConstraints}
                                />
                                <button onClick={captureCam2} className="active:bg-blue-300 text-base bg-blue-500 text-white p-1 rounded-sm w-fit mx-auto mt-2 mb-4">Click to capture</button>
                            </div>
                            :
                            <div className="cursor-pointer bg-blue-100 hover:bg-blue-200 m-4 rounded-2xl shadow-lg py-3 text-blue-600 font-light flex flex-col items-center" onClick={handleCamera2}>
                                <img src={cameraicon} width={40} alt="" />
                                WEBCAM
                            </div>
                    }
                    <div className="px-4">
                        <progress className="rounded-lg w-full" max="100" value={person2Images.length * 10}></progress>
                    </div>
                    <div className="flex flex-wrap px-4">
                        {
                            person2Images.map((imgSrc, i) => (
                                <img key={i} className="w-16 h-12 m-1 rounded-xl" src={imgSrc} alt="" />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Button
                variant="contained"
                fullWidth
                sx={{
                    backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                    color: "white",
                    borderRadius: "4px",
                    marginTop: '20px',
                    marginBottom: '30px',
                    padding: '15px'
                }}
            >
                SUBMIT
            </Button>
        </div>
    );
};

export default PassengerDetails;
