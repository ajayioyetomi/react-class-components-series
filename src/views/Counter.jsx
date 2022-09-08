import {Fragment, Component } from 'react'
import {Button} from '../components/index';

export class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {value:this.props.initial};
  }
  addtoClick = () =>{
    this.setState({...this.state,value:this.state.value+1})
  }
  removeFromClick = () =>{
    const value = this.state.value > 0?this.state.value-1:this.state.value
    this.setState({...this.state,value});
  }
  render() {
    const count = this.state.value;
    return (
      <Fragment>
        <div className='counter-container'>
          <div>Count:{count}</div>
          <div>
              <Button text={'Increment Counter'} click={this.addtoClick}/>
              <Button text={'Decrement Counter'} click={this.removeFromClick} />
          </div>
        </div>
        
      </Fragment>
    )
  }
}

export default Counter