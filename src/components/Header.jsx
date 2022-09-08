import React, { Component } from 'react';
import {Button} from './index';

export class Header extends Component {
    handleClick = () =>{
        
    }
  render() {
    return (
      <div className='header-converter'>
        <span>Task Manager</span>
        <Button text={'Add Book'} click={this.handleClick}/>
      </div>
    )
  }
}

export default Header