import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import { Airport } from "./types";
import SearchFlight from "./components/options/SearchFlight";
import { options } from "./data";
import Conclusion from "./components/options/Conclusion";
import BoardingPass from "./components/options/BoardingPass";
import PassengerDetails from "./components/options/PassengerDetails";
import SelectSeat from "./components/options/SelectSeat";

const App = () => {

  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const [startAirport, setStartAirport] = useState<Airport | null>(null);
  const [endAirport, setEndAirport] = useState<Airport | null>(null);
  const [date, setDate] = useState();
  const [showAirlines, setShowAirlines] = useState(false);

  const getOptionComponent = () => {
    let component = <></>;
    switch (selectedOption) {
      case 'Search Flight': component = <SearchFlight
        startAirport={startAirport}
        setStartAirport={setStartAirport}
        endAirport={endAirport}
        setEndAirport={setEndAirport}
        date={date}
        setDate={setDate}
        setSelectedOption={setSelectedOption}
        showAirlines={showAirlines}
        setShowAirlines={setShowAirlines}
      />; break;
      case 'Passenger Details': component = <PassengerDetails />; break;
      case 'Select Seat': component = <SelectSeat />; break;
      case 'Boarding Pass': component = <BoardingPass />; break;
      case 'Conclusion': component = <Conclusion />; break;
    }
    return component;
  };

  return (
    <div className="bg-gray-200 p-1 flex">
      <Sidebar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      {
        selectedOption === 'Conclusion' ?
          getOptionComponent()
          :
          <Main>
            {
              getOptionComponent()
            }
          </Main>
      }
    </div>
  )
};

export default App;
