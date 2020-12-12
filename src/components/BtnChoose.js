import React from "react";
import MetricBmr from "./MetricBmr";
import ImperialBmr from "./ImperialBmr";

function BtnChoose(props) {
  if (props.btn === 1) {
    return (
      <div>
        <MetricBmr />
      </div>
    );
  }
  return (
    <div>
      <ImperialBmr />
    </div>
  );
}
export default BtnChoose;
