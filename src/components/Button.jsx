import React, { Component } from 'react'

export class Button extends Component {
    constructor(props){
        super(props);
        this.state = {text:this.props.text,click:this.props.click}
    }
    handleClick = () =>{
        this.props.click();
    }
  render() {
    const text = this.state.text;
    return (
      <button onClick={()=>this.handleClick()}>{text}</button>
    )
  }
}

export default Button