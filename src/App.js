import {Fragment,Component} from 'react';
import {Timer,Counter,Taskmanager,SlideShow} from './views/index';
import './App.css';
import {fetchTasks} from './api/index';

const slides = [
  {
    title:"title1",
    text:"Hello this is text1"
  },
  {
    title:"title2",
    text:"Hello this is text2"
  },
  {
    title:"title3",
    text:"Hello this is text3"
  },
  {
    title:"title4",
    text:"Hello this is text4"
  }


]

class App extends Component{
  constructor(){
    super();
    this.state = null;
  }


  componentDidMount(){
    fetchTasks()
    .then(res => console.log(res))
    .catch(err => console.log(err))     
  }
  render(){
    const tasks = this.state
    return (
      <Fragment>
        {/* <Counter initial={10} /> */}
        {/* <Timer initial={20}/> */}
        {/* <Taskmanager tasks={tasks}/> */}
        <SlideShow slides={slides}/>
      </Fragment>
    );
}
}

export default App;
