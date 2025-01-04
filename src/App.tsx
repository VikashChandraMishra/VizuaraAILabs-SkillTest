import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import { Option } from "./types";
import SearchFlight from "./components/options/SearchFlight";
import { options } from "./data";

const App = () => {

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  return (
    <div className="bg-gray-200 p-1 flex">
      <Sidebar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Main>
        <SearchFlight />
      </Main>
    </div>
  )
};

export default App;
