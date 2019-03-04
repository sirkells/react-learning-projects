import React from "react";
import ReactDOM from "react-dom";

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

  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }
    if (this.state.lat && !this.state.errorMsg) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading....</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
