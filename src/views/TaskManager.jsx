import React, {Fragment, Component } from 'react';
import {Header} from '../components/index';

export class TaskManager extends Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate=(preProps,nextState)=>{
    console.log(this.props.tasks)
  }
  render() {
    return (
        <Fragment>
            <Header />
        </Fragment>
      
    )
  }
}

export default TaskManager