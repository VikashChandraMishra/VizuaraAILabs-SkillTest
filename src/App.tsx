import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import { Option } from "./types";
import SearchFlight from "./components/options/SearchFlight";
import AirportSearch from "./components/additional/AirportSearch";

const App = () => {

  const options: Option[] = [
    {
      name: 'Search Flight',
      link: '/search-flight',
    },
    {
      name: 'Passenger Details',
      link: '/passenger-details',
    },
    {
      name: 'Select Seat',
      link: '/select-seat',
    },
    {
      name: 'Boarding Pass',
      link: '/boarding-pass',
    },
    {
      name: 'Self Check-in',
      link: '/self-check-in',
    },
    {
      name: 'Conclusion',
      link: '/conclusion',
    },
  ];

  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  return (
    <div className="bg-gray-200 p-1 flex">
      <Sidebar options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Main>
        <SearchFlight />
      </Main>
      <AirportSearch />
    </div>
  )
};

export default App;
