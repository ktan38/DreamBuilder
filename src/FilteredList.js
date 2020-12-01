import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./App.css";
import React from "react";
import DisplayList from "./DisplayList";
import DisplayAdded from "./DisplayAdded";
import "bootstrap/dist/css/bootstrap.min.css";

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: "All",
      position: "All Positions",
      sort: "none",
      total: 0,
      dict: {},
    };
  }

  /** function that sets the state for appropriate cost filter to be applied */
  filterCost = (event) => {
    this.setState({
      cost: event,
    });
  };

  /** function that sets the state for appropriate position filter to be applied */
  filterPosition = (event) => {
    this.setState({
      position: event,
    });
  };

  /** function that sets the state for appropriate sort to be applied */
  sortCost = (event) => {
    this.setState({
      sort: event,
    });
  };

  /** function that filters list based on cost off player*/
  matchCost = (item) => {
    if (this.state.cost === "All") {
      return true;
    } else if (this.state.cost === item.cost) {
      return true;
    } else {
      return false;
    }
  };

  /** function that filters list based on position of player on card*/
  matchPosition = (item) => {
    if (this.state.position === "All Positions") {
      return true;
    } else if (this.state.position === item.position) {
      return true;
    } else {
      return false;
    }
  };

  /** function that sorts players based on selection*/
  matchSort = (a, b) => {
    if (this.state.sort === "lohi") {
      return a.cost - b.cost;
    } else if (this.state.sort === "hilo") {
      return b.cost - a.cost;
    }
    return a, b;
  };

  /** function that ffilters players based on whether they've been added to team */
  matchteam = (item) => {
    if (item.name in this.state.dict) {
      return true;
    }
    return false;
  };
  /** function that adds player to team*/
  addToTeam = (item) => {
    let copyDict = { ...this.state.dict };
    copyDict[item.name] =
      item.name in this.state.dict ? this.state.dict[item.name] + 1 : 1;
    this.setState({
      total: this.state.total + parseInt(item.cost),
      dict: copyDict,
    });
  };

  /** function that subtracts player to team*/
  subtractFromTeam = (item) => {
    let copyDict = { ...this.state.dict };
    copyDict[item.name] =
      this.state.dict[item.name] > 0 ? this.state.dict[item.name] - 1 : 0;
    if (this.state.dict[item.name] == 1) {
      delete copyDict[item.name];
    }
    this.setState({
      total: this.state.total - parseInt(item.cost),
      dict: copyDict,
    });
  };

  /** function that removes player to team*/
  removeFromTeam = (item) => {
    let copyDict = { ...this.state.dict };
    let count = copyDict[item.name];
    delete copyDict[item.name];
    this.setState({
      total: this.state.total - parseInt(item.cost) * count,
      dict: copyDict,
    });
  };

  /** function that gets user's team dictionary to pass to DisplayAdded*/
  getDict = () => {
    console.log(this.state.dict);
    return this.state.dict;
  };

  /** function that gets total cost of user's team to pass to DisplayAdded*/
  getTotal = () => {
    return this.state.total;
  };

  render() {
    return (
      <div
        className="ml-5 mr-5 mt-5 mb-5"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: "2" }}>
          <h1>Build your dream starting five with $60!</h1>
          <h6>
            You may have more than one of the same player, and just use
            positions as a guide
          </h6>
          <div
            className="mb-4"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <DropdownButton
              className="mt-2 ml-3"
              id="dropdown-item-button "
              title="Cost"
            >
              <Dropdown.Item
                eventKey="All"
                onSelect={this.filterCost}
                as="button"
              >
                All
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="20"
                onSelect={this.filterCost}
                as="button"
              >
                $20
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="18"
                onSelect={this.filterCost}
                as="button"
              >
                $18
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="15"
                onSelect={this.filterCost}
                as="button"
              >
                $15
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="12"
                onSelect={this.filterCost}
                as="button"
              >
                $12
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="10"
                onSelect={this.filterCost}
                as="button"
              >
                $10
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="8"
                onSelect={this.filterCost}
                as="button"
              >
                $8
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="6"
                onSelect={this.filterCost}
                as="button"
              >
                $6
              </Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              className="mt-2 ml-3"
              id="dropdown-item-button"
              title="Position"
            >
              <Dropdown.Item
                eventKey="All Positions"
                onSelect={this.filterPosition}
                as="button"
              >
                All Positions
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="PG"
                onSelect={this.filterPosition}
                as="button"
              >
                Point Guards
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="SG"
                onSelect={this.filterPosition}
                as="button"
              >
                Shooting Guards
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="SF"
                onSelect={this.filterPosition}
                as="button"
              >
                Small Forwards
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="PF"
                onSelect={this.filterPosition}
                as="button"
              >
                Power Forwards
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="C"
                onSelect={this.filterPosition}
                as="button"
              >
                Centers
              </Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              className="mt-2 ml-3"
              id="dropdown-item-button "
              title="Sort by Cost"
            >
              {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
              <Dropdown.Item
                eventKey="none"
                onSelect={this.sortCost}
                as="button"
              >
                No Sort
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="lohi"
                onSelect={this.sortCost}
                as="button"
              >
                Lowest to Highest
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="hilo"
                onSelect={this.sortCost}
                as="button"
              >
                Highest to Lowest
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <DisplayList
            add={this.addToTeam}
            list={this.props.list
              .filter(this.matchCost)
              .filter(this.matchPosition)
              .sort(this.matchSort)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <DisplayAdded
            add={this.addToTeam}
            subtract={this.subtractFromTeam}
            remove={this.removeFromTeam}
            dict={this.getDict()}
            list={this.props.list.filter(this.matchteam)}
            total={this.getTotal()}
          />
        </div>
      </div>
    );
  }
}

export default FilteredList;
