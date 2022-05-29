import logo from './logo.svg';
import './App.css';
import BubbleList from "./molecules/bubbleList";
import TaskName from "./atoms/taskName";
import "bootstrap/dist/css/bootstrap.css"
import TaskContainer from './organisms/TaskContainer';

const taskName = ""

const bubbleArr = [
  {id: 5, val: 0},
  {id: 1, val: 2},
  {id: 2, val: 1},
  {id: 3, val: 0},
  {id: 4, val: 0},
];

function App() {
  const handleName = (e) => {
    console.log(e.target.value);
  };

  const handleBubbleArr = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <TaskContainer></TaskContainer>
      </header>
    </div>
  );
}

export default App;
