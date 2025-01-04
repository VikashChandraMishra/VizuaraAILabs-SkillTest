import { Option } from "./types";
import spiceJetLogo from "./assets/spiceJet-logo.png";
import IndiGoLogo from "./assets/IndiGo-logo.jpg";
import AkasaAirLogo from "./assets/Akasa-Air-logo.png";
import airline4 from "./assets/airline4.png";

export const airports = [
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
    {
        code: "CCU",
        city: "Kolkata",
        airport: "Netaji Subhas Chandra Bose International Airport",
    },
    {
        code: "COK",
        city: "Kochi",
        airport: "Cochin International Airport",
    },
    {
        code: "GOI",
        city: "Goa",
        airport: "Dabolim Airport",
    },
    {
        code: "PNQ",
        city: "Pune",
        airport: "Pune Airport",
    },
    {
        code: "AMD",
        city: "Ahmedabad",
        airport: "Sardar Vallabhbhai Patel International Airport",
    },
    {
        code: "ATQ",
        city: "Amritsar",
        airport: "Sri Guru Ram Dass Jee International Airport",
    },
    {
        code: "IXC",
        city: "Chandigarh",
        airport: "Chandigarh International Airport",
    },
    {
        code: "LKO",
        city: "Lucknow",
        airport: "Chaudhary Charan Singh International Airport",
    },
    {
        code: "NAG",
        city: "Nagpur",
        airport: "Dr. Babasaheb Ambedkar International Airport",
    },
    {
        code: "RPR",
        city: "Raipur",
        airport: "Swami Vivekananda Airport",
    },
    {
        code: "TRV",
        city: "Thiruvananthapuram",
        airport: "Trivandrum International Airport",
    },
    {
        code: "IXJ",
        city: "Jammu",
        airport: "Jammu Airport",
    },
    {
        code: "IXR",
        city: "Ranchi",
        airport: "Birsa Munda Airport",
    },
    {
        code: "IXB",
        city: "Bagdogra",
        airport: "Bagdogra Airport",
    },
    {
        code: "IXA",
        city: "Agartala",
        airport: "Agartala Airport",
    },
    {
        code: "IXZ",
        city: "Port Blair",
        airport: "Veer Savarkar International Airport",
    },
];

export const options: Option[] = [
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

export const airlines = [
    {
        logo: spiceJetLogo,
        startTime: '20:08',
        duration: '2hr 15min',
        endTime: '22:08',
        type: 'Non Stop',
        cost: '7,350'
    },
    {
        logo: IndiGoLogo,
        startTime: '21:08',
        duration: '2hr 15min',
        endTime: '23:08',
        type: 'Non Stop',
        cost: '7,650'
    },
    {
        logo: AkasaAirLogo,
        startTime: '14:08',
        duration: '2hr 15min',
        endTime: '16:08',
        type: 'Non Stop',
        cost: '8,180'
    },
    {
        logo: airline4,
        startTime: '17:08',
        duration: '2hr 15min',
        endTime: '19:08',
        type: 'Non Stop',
        cost: '8,350'
    }
];
