import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FilteredList from "./FilteredList";

function App() {
  const playerList = [
    { name: "Michael Jordan", cost: "20", position: "SG" },
    { name: "Kobe Bryant", cost: "18", position: "SG" },
    { name: "Dwyane Wade", cost: "12", position: "SG" },
    { name: "John Havlicek", cost: "12", position: "SF" },
    { name: "Elgin Baylor", cost: "12", position: "SF" },
    { name: "Isaiah Thomas", cost: "12", position: "PG" },
    { name: "John Stockton", cost: "10", position: "PG" },
    { name: "Steve Nash", cost: "10", position: "PG" },
    { name: "Bob Cousy", cost: "10", position: "PG" },
    { name: "Jason Kidd", cost: "6", position: "PG" },
    { name: "Chris Paul", cost: "8", position: "PG" },
    { name: "Allen Iverson", cost: "12", position: "PG" },
    { name: "Julius Erving", cost: "12", position: "SF" },
    { name: "Scottie Pippen", cost: "10", position: "SF" },
    { name: "Rick Barry", cost: "10", position: "SF" },
    { name: "Paul Pierce", cost: "6", position: "SF" },
    { name: "Kawhi Leonard", cost: "6", position: "SF" },
    { name: "Jerry West", cost: "10", position: "SG" },
    { name: "James Harden", cost: "10", position: "SG" },
    { name: "Ray Allen", cost: "8", position: "SG" },
    { name: "Reggie Miller", cost: "8", position: "SG" },
    { name: "Clyde Drexler", cost: "8", position: "SG" },
    { name: "Pete Maravich", cost: "6", position: "SG" },
    { name: "Manu Ginobili", cost: "6", position: "SG" },
    { name: "Kevin Garnett", cost: "12", position: "PF" },
    { name: "Elvin Hayes", cost: "10", position: "PF" },
    { name: "Kevin McHale", cost: "8", position: "PF" },
    { name: "Charles Barkley", cost: "10", position: "PF" },
    { name: "Dennis Rodman", cost: "8", position: "PF" },
    { name: "Bob Pettit", cost: "8", position: "PF" },
    { name: "Anthony Davis", cost: "8", position: "PF" },
    { name: "Magic Johnson", cost: "18", position: "PG" },
    { name: "Stephen Curry", cost: "15", position: "PG" },
    { name: "Oscar Robertson", cost: "15", position: "PG" },
    { name: "LeBron James", cost: "20", position: "SF" },
    { name: "Larry Bird", cost: "18", position: "SF" },
    { name: "Kevin Durant", cost: "15", position: "SF" },
    { name: "Tim Duncan", cost: "18", position: "PF" },
    { name: "Karl Malone", cost: "12", position: "PF" },
    { name: "Dirk Nowitzki", cost: "12", position: "PF" },
    { name: "Kareem Abdul-Jabbar", cost: "18", position: "C" },
    { name: "Hakeem Olajuwon", cost: "18", position: "C" },
    { name: "Shaquille O'Neal", cost: "18", position: "C" },
    { name: "Bill Russell", cost: "18", position: "C" },
    { name: "Wilt Chamberlain", cost: "18", position: "C" },
    { name: "David Robinson", cost: "12", position: "C" },
    { name: "Patrick Ewing", cost: "10", position: "C" },
    { name: "Moses Malone", cost: "10", position: "C" },
    { name: "Bob McAdoo", cost: "8", position: "C" },
    { name: "Yao Ming", cost: "6", position: "C" },
  ];

  return (
    <div>
      <FilteredList list={playerList} />
    </div>
  );
}

export default App;
