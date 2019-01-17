import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  searchInput = (event) => {
    this.setState({
      search: event.target.value 
    })
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div>
        <input type='text' id='filter'
          value={this.state.search}
          onChange={this.searchInput} />
      </div>
    )
  }
}

export default SearchBox;