import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { lat: null, errorMsg: "" };

  // didMount happens afte state is initialized. its used in handling state
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude
        }),
      err =>
        this.setState({
          errorMsg: err.message
        })
    );
  }

  contents() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if (this.state.lat && !this.state.errorMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader message="Please accept location request..." />;
  }

  render() {
    return <div>{this.contents()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
