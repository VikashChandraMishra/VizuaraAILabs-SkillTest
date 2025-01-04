import { useState } from "react";
import { options } from "../../data";
import { Option } from "../../types";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

interface Props {
    selectedOption: Option;
    setSelectedOption: Function;
};

const Sidebar: React.FC<Props> = ({ selectedOption, setSelectedOption }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebarCollapse = () => {
        setIsSidebarCollapsed(prevState => !prevState);
    };

    return (
        <div className={`h-[97vh] bg-white rounded-xl shadow-[0_3px_3px_3px_rgba(0,0,0,0.05)] m-2 py-4 flex flex-col gap-1 relative transition-all duration-300 ease-linear ${isSidebarCollapsed ? 'w-1' : 'w-[15vw] px-4'}`}>
            <div onClick={toggleSidebarCollapse}>
                <KeyboardDoubleArrowLeftIcon
                    className={`text-gray-500 border rounded-full shadow-4xl cursor-pointer absolute top-8 w-5 bg-white  duration-300 transition-all ease-linear ${isSidebarCollapsed ? 'rotate-170 right-[-10px]' : '-rotate-180 right-[-5%]'}`} />
            </div>
            {
                !isSidebarCollapsed && options.map(({ name, link }: Option) => (
                    <div
                        key={name}
                        className={`${selectedOption.name === name ? 'bg-gradient-to-r from-[rgba(249,87,177,0.6)] to-[rgba(239,113,64,0.6)] text-white' : 'bg-white text-black hover:text-white transition-colors duration-400'} py-3 px-5 rounded-xl cursor-pointer hover:bg-gradient-to-r from-[rgba(249,87,177,0.6)] to-[rgba(239,113,64,0.6)] transition-all`}
                        onClick={() => setSelectedOption({ name, link })}
                    >
                        {name}
                    </div>
                ))
            }
        </div>
    );
};

export default Sidebar;
