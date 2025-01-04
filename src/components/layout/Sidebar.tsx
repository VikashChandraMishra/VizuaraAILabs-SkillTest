import { Option } from "../../types";

interface Props {
    options: any;
    selectedOption: Option;
    setSelectedOption: Function;
};

const Sidebar: React.FC<Props> = ({ options, selectedOption, setSelectedOption }) => {

    return (
        <div className="h-[97vh] w-[15vw] bg-white rounded-xl shadow-[0_3px_3px_3px_rgba(0,0,0,0.05)] m-2 py-4 px-4 flex flex-col gap-1">
            {
                options.map(({ name, link }: Option) => (
                    <div
                        key={name}
                        className={`${selectedOption.name === name ? 'bg-gradient-to-r from-[rgba(249,87,177,0.6)] to-[rgba(239,113,64,0.6)] text-white' : 'bg-white text-black hover:text-white transition-colors duration-400'} py-3 px-5 rounded-xl cursor-pointer hover:bg-gradient-to-r from-[rgba(249,87,177,0.6)] to-[rgba(239,113,64,0.6)] transition-colors`}
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
