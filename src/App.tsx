import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import { Option } from "./types";
import SearchFlight from "./components/options/SearchFlight";
import { options } from "./data";
import Conclusion from "./components/options/Conclusion";

const App = () => {

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const getOptionComponent = () => {
    let component = <></>;
    switch (selectedOption.name) {
      case 'Search Flight': component = <SearchFlight />; break;
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
