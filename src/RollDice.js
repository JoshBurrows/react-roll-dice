import React, { Component } from "react";
import Die from "./Die";
import "./Rolldice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      face: "one",
      face2: "one",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newDie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({
      face: newDie1,
      face2: newDie2,
      rolling: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 500);
  }
  render() {
    return (
      <div className="Rolldice">
        <div className="die-container">
          <Die face={this.state.face} />
          <Die face={this.state.face2} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
