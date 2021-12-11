import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAstronauts } from "../actions/fetchAstronauts";

class App extends Component {
  handleOnClick() {
    this.props.fetchAstronauts();
  }

  render() {
    const astronauts = this.props.astronauts.map((astro) => (
      <li key={astro.id}>{astro.name}</li>
    ));

    return (
      <div>
        <button onClick={(event) => this.handleOnClick(event)} />
        {astronauts}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchAstronauts: () => dispatch(fetchAstronauts()) };
}

function mapStateToProps(state) {
  return { astronauts: state.astronauts };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);