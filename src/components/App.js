import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      greased: false,
      sort: "none",
    }
  }

  handleGreasedFilter = () => {
    this.setState({greased: !this.state.greased})
  }

  handleSortSelect = (e) => {
    this.setState({ sort: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.handleGreasedFilter}>Filter by Greased</button>
        <label>Sort:</label>
        <select 
          onChange={ this.handleSortSelect }
          value={this.state.sort}
        >
          <option value={"none"}>- None -</option>
          <option value={"alpha"}>Alphabetically</option>
          <option value={"weight"}>By Weight</option>
        </select>
        <HogContainer hogs={hogs} greased={this.state.greased} sort={this.state.sort}/>
      </div>
    );
  }
}

export default App;
