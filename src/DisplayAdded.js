import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./App.css";
import React from "react";
import Text from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class DisplayAdded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.dict);
  }

  render() {
    return (
      <div>
        <h1>My Team</h1>
        <h4>Total Cost: ${this.props.total} </h4>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {this.props.list.map((item) => (
            <Card style={{ width: "220px", height: "400px" }}>
              <Card.Header style={{ fontWeight: "bold" }}>
                {item.name}
              </Card.Header>
              <Card.Img
                variant="top"
                width="220px"
                height="155px"
                src={"/" + item.name + ".jpg"}
              />
              <Card.Body>
                <Card.Text>Position: {item.position}</Card.Text>
                <Card.Text>Cost: ${item.cost}</Card.Text>

                <div className="def-number-input number-input mb-3">
                  <button
                    onClick={() => this.props.subtract(item)}
                    className="minus"
                  ></button>
                  <input
                    className="quantity"
                    name="quantity"
                    value={this.props.dict[item.name]}
                    type="number"
                  />
                  <button
                    onClick={() => this.props.add(item)}
                    className="plus"
                  ></button>
                </div>
                <Button
                  key={item}
                  onClick={() => this.props.remove(item)}
                  variant="primary"
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayAdded;
