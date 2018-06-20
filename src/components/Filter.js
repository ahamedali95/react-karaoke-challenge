import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => {this.props.handleSearch(this.state.searchTerm)});
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Filter;
