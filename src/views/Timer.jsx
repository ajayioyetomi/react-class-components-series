import {Fragment,Component } from 'react'

let start;
let isStarted = false;
export class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {value:this.props.initial};
  }
  startTimer = () =>{
     start = setInterval(()=>{
      const time = this.state.value;
      if(time > 0){
         this.setState({...this.state,value:time-1})
      }
      else{
         clearInterval(start);
      }
     },1000)
  }

  componentDidMount = () =>{
    if(!isStarted){
      isStarted = true;
      this.startTimer()
    }
  }
  render() {
    const timeValue = this.state.value;
    return (
      <div className="timer-container">
        <div>{timeValue}</div>
      </div>
    )
  }
}

export default Timer