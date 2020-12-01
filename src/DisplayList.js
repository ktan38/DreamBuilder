import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./App.css";
import React from "react";
import Text from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class DisplayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {this.props.list.map((item) => (
          //   <li>
          //     {item.name}, {item.cost}, {item.position}
          //   </li>
          <Card style={{ width: "220px", height: "350px" }}>
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
              <Button
                key={item}
                onClick={() => this.props.add(item)}
                variant="primary"
              >
                Add to Team
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default DisplayList;
