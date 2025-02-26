/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Component } from "react";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
class LiveClockUpdate extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="flex flex-col m-4 text-center">
        <h2 className="text-5xl ">
          {weekday[this.state.date.getDay()] +
            ", " +
            this.state.date.toLocaleDateString()}
        </h2>
        <h2 className="text-5xl p-4">{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default LiveClockUpdate;
