import React from "react";
import bg from "../../assets/airplane-bg.jpg";

interface Props {
    children: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-[95vw] h-[97vh] mx-5 my-2 rounded-xl"
        >
            {children}
        </div>
    );
};

export default Main;
