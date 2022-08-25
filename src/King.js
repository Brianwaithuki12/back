import React, { Component } from 'react'

export default class King extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "ford",
            model: "Mustung",
            year: 1934
        };
    }
    changeColor = () => {
        this.setState({model: "shelby"});
    }
  render() {
    return (
      <div>
        the kings {this.state.brand} {this.state.model} {this.state.year} crown is {this.props.color}
        <button onClick={this.changeColor}>Click me</button>
      </div>
    )
  }
}
