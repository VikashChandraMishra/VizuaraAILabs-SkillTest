import {
    Box,
    Button,
    IconButton,
    Typography,
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SwapHoriz, Search } from "@mui/icons-material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AirportSearch from "../additional/AirportSearch";
import { airlines } from "../../data";
import { Airport } from "../../types";

interface Props {
    startAirport: Airport | null;
    setStartAirport: Function;
    endAirport: Airport | null;
    setEndAirport: Function;
    date: any;
    setDate: Function;
    setSelectedOption: Function;
    showAirlines: Boolean;
    setShowAirlines: Function;
};

function SearchFlight({ startAirport, setStartAirport, endAirport, setEndAirport, date, setDate, setSelectedOption, showAirlines, setShowAirlines }: Props) {

    const swapAirports = () => {
        if (startAirport || endAirport) {
            const temp = startAirport;
            setStartAirport(endAirport);
            setEndAirport(temp);
        }
    };

    const handleSearch = () => {
        if (startAirport && endAirport && date) {
            setShowAirlines(true);
        } else {
            setShowAirlines(false);
        }
    };

    const handleDateChange = (e: any) => {
        setDate(e?.$d?.toLocaleDateString({}, { timeZone: "UTC", month: "short", day: "2-digit", year: "numeric" }).split('-').join(''));
    };

    const saveTravelDetails = () => {
        localStorage.setItem('startCity', startAirport ? startAirport.city : '');
        localStorage.setItem('endCity', endAirport ? endAirport.city : '');
        localStorage.setItem('date', date ? date : '');
        setSelectedOption('Passenger Details');
    };

    return (
        <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            minHeight="100vh"
            sx={{
                flexDirection: 'column',
                paddingTop: '60px'
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '50px'
                }}
            >Search Flight</Typography>
            <Box
                display="flex"
                alignItems="center"
                gap={2}
                sx={{
                    borderRadius: 4,
                    boxShadow: 2,
                    p: 6,
                    width: "100%",
                    maxWidth: 1100
                }}
                className="bg-gray-100"
            >
                <AirportSearch label="From" selectedAirport={startAirport} setSelectedAirport={setStartAirport} />

                <Box
                    sx={{
                        color: '#FF66C4'
                    }}
                    onClick={swapAirports}
                >
                    <IconButton color="inherit">
                        <SwapHoriz />
                    </IconButton>
                </Box>

                <AirportSearch label="To" selectedAirport={endAirport} setSelectedAirport={setEndAirport} />

                {/* <TextField
                    label="Date"
                    variant="outlined"
                    fullWidth
                    defaultValue="09/07/2025"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <EventIcon />
                            </InputAdornment>
                        )
                    }}
                /> */}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date" className="w-full" onChange={handleDateChange} />
                </LocalizationProvider>

                <Button
                    variant="contained"
                    sx={{
                        backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                        '&:hover': {
                            backgroundImage: "linear-gradient(to right, #ff4081, #ab47bc)",
                            transform: 'scale(1.05)'
                        },
                        color: "white",
                        width: '90px',
                        height: '55px',
                        borderRadius: "8px"
                    }}
                    onClick={handleSearch}
                >
                    <Search sx={{ fontSize: '1.7rem' }} />
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '1000px',
                    marginTop: '8px'
                }}
            >
                {
                    showAirlines && airlines.map(({ logo, startTime, endTime, duration, type, cost }, i) => (
                        <Box
                            key={i}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            gap={2}
                            sx={{
                                borderRadius: 4,
                                boxShadow: 2,
                                p: '20px',
                                width: "100%",
                                marginTop: '2px'
                            }}
                            className="bg-gray-100"
                        >
                            <div className="flex flex-col justify-start">
                                <img src={logo} width={130} height={100} alt="" />
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-2xl text-gray-800">{startTime}</span><span></span>
                                    <span className="text-right text-gray-700">{startAirport?.code}</span>
                                </div>
                                <div className="flex flex-col text-base text-center gap-1">
                                    <span className="text-gray-700">{duration}</span><span></span>
                                    <span className="w-40 h-[3px] bg-gray-600"></span>
                                    <span className="text-gray-700">{type}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-2xl text-gray-800">{endTime}</span><span></span>
                                    <span className="text-right text-gray-700">{endAirport?.code}</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <span className="text-4xl text-gray-800">&#8377; {cost}</span>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
                                        '&:hover': {
                                            backgroundImage: "linear-gradient(to right, #ff4081, #ab47bc)",
                                            transform: 'scale(1.05)'
                                        },
                                        color: "white",
                                        width: '90px',
                                        height: '40px',
                                        borderRadius: "4px"
                                    }}
                                    onClick={saveTravelDetails}
                                >
                                    SELECT
                                </Button>
                            </div>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}

export default SearchFlight;
