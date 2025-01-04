import {
    Autocomplete,
    TextField,
    ListItem,
} from "@mui/material";
import flightIcon from "../../assets/flight-take-off.png";
import { Airport } from "../../types";
import { airports } from "../../data";

interface Props {
    setSelectedAirport: Function;
};

function AirportSearch({ setSelectedAirport }: Props) {

    return (
        <Autocomplete<Airport>
            options={airports}
            getOptionLabel={(option) =>
                `${option.code} - ${option.city} (${option.airport})`
            }
            onChange={(_event, newValue) => {
                setSelectedAirport(newValue);
            }}
            renderOption={(props, option) => (
                <ListItem
                    {...props}
                    key={option.code}
                    className="bg-gray-100 hover:bg-gray-200 flex gap-2"
                >
                    <div className="flex flex-col">
                        <img src={flightIcon} width={40} alt="" />
                        <span className="w-8 h-[1.8px] bg-gray-400"></span>
                    </div>
                    <div className="flex flex-col">
                        <strong>{option.code} - {option.city}</strong>
                        <span className="text-sm">{option.airport}</span>
                    </div>
                </ListItem>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="From"
                    variant="outlined"
                    fullWidth
                    sx={{
                        borderRadius: "8px",
                        width: '270px'
                    }}
                    className="bg-gray-100"
                />
            )}
            sx={{
                width: 400
            }}
        />
    );
}

export default AirportSearch;
