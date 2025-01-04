interface Props {
    selectedSeats: string[];
    handleSeatSelection: Function;
    seat: string;
};

const Seat: React.FC<Props> = ({ selectedSeats, handleSeatSelection, seat }) => {

    if (selectedSeats.includes(seat)) {
        return (
            <div className="flex flex-col items-center">
                <svg
                    className="cursor-pointer"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 256 256"
                    color="#FF66C4"
                    fontSize="medium"
                    style={{ color: 'rgb(255, 102, 196)' }}
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleSeatSelection(seat)}
                >
                    <path d="M40,84.11V72A40,40,0,0,1,80,32h96a40,40,0,0,1,40,40V84.11A3.92,3.92,0,0,1,212,88h0a44.07,44.07,0,0,0-43.26,36H87.26A44.07,44.07,0,0,0,44,88h0A3.92,3.92,0,0,1,40,84.11ZM212,104a28,28,0,0,0-28,28v36a8,8,0,0,1-16,0V140H88v28a8,8,0,0,1-16,0V132a28,28,0,1,0-32,27.71V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V159.71A28,28,0,0,0,212,104Z"></path>
                </svg>
                <p className="text-sm">
                    {seat}
                </p>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center">
                <svg
                    className="cursor-pointer"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 256 256"
                    color="gray"
                    fontSize="medium"
                    style={{ color: "gray" }}
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleSeatSelection(seat)}
                >
                    <path d="M214,90.48V72a38,38,0,0,0-38-38H80A38,38,0,0,0,42,72V90.48a38,38,0,0,0,0,75.05V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V165.53a38,38,0,0,0,0-75ZM80,46h96a26,26,0,0,1,26,26V90.48A38.05,38.05,0,0,0,170,128v2H86v-2A38.05,38.05,0,0,0,54,90.48V72A26,26,0,0,1,80,46ZM208.35,154H208a6,6,0,0,0-6,6v40a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V160h0a6,6,0,0,0-6-6h-.35A26,26,0,1,1,74,128v40a6,6,0,0,0,12,0V142h84v26a6,6,0,0,0,12,0V128a26,26,0,1,1,26.35,26Z"></path>
                </svg>
                <p className="text-sm">
                    {seat}
                </p>
            </div>
        );
    }
};

export default Seat;
