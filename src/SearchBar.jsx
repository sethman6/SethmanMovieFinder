import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {sub : ' '}

  }


  render () {
    return (
        <div>
        <h3>Welcome to SethmanMovieFinder </h3>
        <input
      value = {this.state.sub}
      onChange= {(event) => this.setState({sub: event.target.value})} />
        Value of the input : {this.state.sub}
      </div>
    )
  }

  onInputChange(sub) {
    this.setState({sub})
    this.props.onSearchSubChange(sub)
  }

}


export default SearchBar
