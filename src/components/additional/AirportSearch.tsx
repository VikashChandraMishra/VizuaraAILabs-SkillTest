import { useState } from "react";
import {
    Autocomplete,
    TextField,
    Box,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

type Airport = {
    code: string;
    city: string;
    airport: string;
};

const airports = [
    {
        code: "DEL",
        city: "New Delhi",
        airport: "Indira Gandhi International Airport",
    },
    {
        code: "HYD",
        city: "Hyderabad",
        airport: "Rajiv Gandhi International Airport",
    },
    {
        code: "BOM",
        city: "Mumbai",
        airport: "Chhatrapati Shivaji Maharaj International Airport",
    },
    {
        code: "BLR",
        city: "Bengaluru",
        airport: "Kempegowda International Airport",
    },
    {
        code: "MAA",
        city: "Chennai",
        airport: "Chennai International Airport",
    },
];

function AirportSearch() {
    const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Autocomplete<Airport>
                options={airports}
                getOptionLabel={(option) =>
                    `${option.code} - ${option.city} (${option.airport})`
                }
                onChange={(event, newValue) => {
                    setSelectedAirport(newValue);
                }}
                renderOption={(props, option) => (
                    <ListItem {...props} key={option.code}>
                        <ListItemAvatar>
                            <Avatar>
                                <FlightTakeoffIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${option.code} - ${option.city}`}
                            secondary={option.airport}
                        />
                    </ListItem>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="From"
                        variant="outlined"
                        fullWidth
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "8px",
                            boxShadow: 2,
                        }}
                    />
                )}
                sx={{
                    width: 400,
                }}
            />
        </Box>
    );
}

export default AirportSearch;
