import {
    Box,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Typography,
} from "@mui/material";
import { SwapHoriz, CalendarToday, Search } from "@mui/icons-material";

function FlightSearchBar() {
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
                    backgroundColor: "white",
                    borderRadius: 4,
                    boxShadow: 2,
                    p: 6,
                    width: "80%",
                    maxWidth: 900,
                }}
            >
                <TextField
                    label="From"
                    variant="outlined"
                    fullWidth
                />

                <Box
                    sx={{
                        color: '#FF66C4'
                    }}
                >
                    <IconButton color="inherit">
                        <SwapHoriz />
                    </IconButton>
                </Box>

                <TextField
                    label="To"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    label="Date"
                    variant="outlined"
                    fullWidth
                    defaultValue="09/07/2025"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <CalendarToday />
                            </InputAdornment>
                        )
                    }}
                />

                <Button
                    variant="contained"
                    sx={{
                        backgroundImage: "linear-gradient(to right, #ff4081, #ab47bc)",
                        color: "white",
                        width: '90px',
                        height: '55px',
                        borderRadius: "8px"
                    }}
                >
                    <Search sx={{ fontSize: '1.7rem' }} />
                </Button>
            </Box>
        </Box>
    );
}

export default FlightSearchBar;
