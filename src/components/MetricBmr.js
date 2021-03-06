import React from "react";
import "./BMRStylesheet.css";

class MetricBmr extends React.Component {
  constructor() {
    super();
    this.state = {
      weight: "",
      height: "",
      age: "",
      gender: "",
      error: "",
      bmr: "",
      activityValue: "",
      activityRes: "",
      activityVisible: false
    };
  }
// handle to take value from input
  handleWeightChange = (event) => {
    this.setState({
      weight: event.target.value
    });
  };

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value
    });
  };

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value
    });
  };

  handleHeightChange = (event) => {
    this.setState({
      height: event.target.value
    });
  };

  bmrBtn() {
    let age = this.state.age;
    let gender = this.state.gender;
    let height = this.state.height;
    let weight = this.state.weight;
    if (weight == "" || age == "" || height == "" || gender == "") {
      this.setState({
        error: "All field are required"
      });
      return;
    }
    this.setState({ error: "" });

    let calmmr;
    if (gender === "1") {
      calmmr = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
    } else if (gender === "2") {
      calmmr = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
    }
    this.setState({
      bmr: calmmr
    });
    if (calmmr) {
      var activityVisibility = document.getElementById("workout");
      activityVisibility.classList.remove("hidden");
      this.setState({
        activityVisible: true
      });
    }
  }

  handleActivityChange = (event) => {
    this.setState({
      activityValue: event.target.value
    });
  };

  activityBtn() {
    let calActivity;
    if (this.state.bmr) {
      let activity = this.state.activityValue;
      calActivity = this.state.bmr * activity;
      this.setState({
        activityRes: calActivity
      });
      console.log(calActivity);
    } else {
      this.setState({
        error: "first calculate bmr"
      });
      return;
    }
    this.setState({ error: "" });
  }

  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }

    let result;
    if (this.state.bmr) {
      result = <div className="result">{this.state.bmr}</div>;
    }
    let activity;
    if (this.state.activityRes) {
      activity = <div className="result">{this.state.activityRes}</div>;
    }
    return (
      <div>
        <div id="bmrcalc">
          <div className="form">
            <h3>METRIC BMR</h3>
            <h2>BMR &amp; Daily Calorie Calculator</h2>
            {error}
            <div className="inputwrap">
              <label className="label">Gender</label>
              <label>
                <input
                  onChange={this.handleGenderChange}
                  checked={this.state.gender === "1"}
                  type="radio"
                  className="genderF"
                  name="gender"
                  value="1"
                />
                Female
              </label>
              <label>
                <input
                  onChange={this.handleGenderChange}
                  type="radio"
                  className="genderM"
                  name="gender"
                  value="2"
                  checked={this.state.gender === "2"}
                />
                Male
              </label>
            </div>
            <div className="inputwrap">
              <label className="label">Weight in Kg</label>
              <input
                value={this.state.weight}
                onChange={this.handleWeightChange}
                type="number"
                name="weight"
                className="weight"
                min="0"
                max="999"
              />
            </div>
            <div className="inputwrap">
              <label className="label">Height in cm</label>
              <input
                onChange={this.handleHeightChange}
                type="number"
                name="height"
                className="height"
                min="0"
                max="8"
              />
            </div>
            <div className="inputwrap">
              <label className="label">Age in years</label>
              <input
                onChange={this.handleAgeChange}
                type="number"
                className="age"
                name="age"
                min="0"
                max="120"
              />
            </div>
            <button onClick={() => this.bmrBtn()} className="btn" type="button">
              Calculate BMR
            </button>
            {result}
            <div className="workout hidden " id="workout">
              <div className="inputwrap">
                <label className="label">Workout in a Week</label>
                <select
                  className="activity"
                  name="activity"
                  onChange={this.handleActivityChange}
                >
                  <option value="">Select your Activity</option>
                  <option value="1.2" checked={this.state.activityValue === 1.2}>
                    Sedentary (Very little or no exercise, and desk job)
                  </option>
                  <option value="1.375" checked={this.state.activityValue === 1.375}>
                    Lightly Active (Light exercise 1 to 3 days per week)
                  </option>
                  <option value="1.55" checked={this.state.activityValue === 1.55}>
                    Moderately Active (Moderate exercise 3 to 5 days per week)
                  </option>
                  <option value="1.725" checked={this.state.activityValue === 1.725}>
                    Very Active (Heavy exercise 6 to 7 days per week)
                  </option>
                  <option value="1.9" checked={this.state.activityValue === 1.9}>
                    Extremely Active (Very intense exercise, and physical job,
                    exercise multiple times per day)
                  </option>
                </select>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => this.activityBtn()}
              >
                Calculate Calories
              </button>
              {activity}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MetricBmr;
