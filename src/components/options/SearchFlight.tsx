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
import { useState } from "react";

function SearchFlight() {

    const [startAirport, setStartAirport] = useState<Airport | null>(null);
    const [endAirport, setEndAirport] = useState<Airport | null>(null);

    const [showAirlines, setShowAirlines] = useState(false);

    const handleSearch = () => {
        if (startAirport && endAirport) {
            setShowAirlines(true);
        } else {
            setShowAirlines(false);
        }
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
                    maxWidth: 1100,
                }}
                className="bg-gray-100"
            >
                <AirportSearch setSelectedAirport={setStartAirport} />

                <Box
                    sx={{
                        color: '#FF66C4'
                    }}
                >
                    <IconButton color="inherit">
                        <SwapHoriz />
                    </IconButton>
                </Box>

                <AirportSearch setSelectedAirport={setEndAirport} />

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
                    <DatePicker label="Date" className="w-full" />
                </LocalizationProvider>

                <Button
                    variant="contained"
                    sx={{
                        backgroundImage: "linear-gradient(to right, #ab47bc, #ff4081)",
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
                                        color: "white",
                                        width: '90px',
                                        height: '40px',
                                        borderRadius: "4px"
                                    }}
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
