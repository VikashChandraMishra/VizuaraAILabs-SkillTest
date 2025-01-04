import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import { Option } from "./types";
import SearchFlight from "./components/options/SearchFlight";
import { options } from "./data";
import Conclusion from "./components/options/Conclusion";
import BoardingPass from "./components/options/BoardingPass";
import PassengerDetails from "./components/options/PassengerDetails";
import SelectSeat from "./components/options/SelectSeat";

const App = () => {

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const getOptionComponent = () => {
    let component = <></>;
    switch (selectedOption.name) {
      case 'Search Flight': component = <SearchFlight />; break;
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
        selectedOption.name === 'Conclusion' ?
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
