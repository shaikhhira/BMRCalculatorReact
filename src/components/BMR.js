import React from "react";
import BtnChoose from "./BtnChoose";

class BMR extends React.Component {
  constructor() {
    super();
    this.state = {
      btn: 1
    };
  }
  imperial() {
    this.setState({
      btn: 2
    });
  }
  metricbmr() {
    this.setState({
      btn: 1
    });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.metricbmr()}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "2px solid transparent",
            outline: "none",
            borderRadius: "20px",
            padding: "5px 20px",
            margin: "20px",
            cursor: "pointer"
          }}
        >
          Metric
        </button>
        <button
          onClick={() => this.imperial()}
          style={{
            backgroundColor: "black",
            color: "white",
            border: "2px solid transparent",
            outline: "none",
            borderRadius: "20px",
            padding: "5px 20px",
            margin: "20px",
            cursor:"pointer"
          }}
        >
          Imperial
        </button>
        <BtnChoose btn={this.state.btn} />
      </div>
    );
  }
}
export default BMR;
