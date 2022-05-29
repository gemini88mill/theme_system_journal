import React, {useState} from "react";
import TaskName from "../atoms/taskName";
import BubbleList from "../molecules/bubbleList";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Typewriter from "../atoms/typewriter";

const TaskContainerInit = [
    {
        id: 1,
        taskName: "Some Task",
        bubbles: [
            {id: 1, val: 2},
            {id: 2, val: 0},
            {id: 3, val: 0},
            {id: 4, val: 1},
            {id: 5, val: 0},
        ],
        sum: 3
    },
    {
        id: 2,
        taskName: "Some Task 2",
        bubbles: [
            {id: 1, val: 2},
            {id: 2, val: 2},
            {id: 3, val: 0},
            {id: 4, val: 1},
            {id: 5, val: 0},
        ],
        sum: 5
    }
];

const TaskItem = ({taskName, bubbles, sum}, bubbleNum) => {
    const [taskNameState, setTaskNameState] = useState(taskName);
    const [bubblesState, setBubblesState] = useState(bubbles);
    const [bubbleSum, setBubbleSum] = useState(sum)

    const handleName = (e) => {
        console.log(e.target.value);
        setTaskNameState(e.target.value);
    }

    const handleBubbles = (e) => {
        setBubblesState(e);
        setBubbleSum(e.reduce((a, b) => a + b.val, 0));
        bubbleNum = bubblesState.length;
    }
    
    return(
        <div className="row">
            <div className="col"><TaskName name={taskNameState} nameHandler={handleName}></TaskName></div>
            <BubbleList bubbleArr={bubblesState} handleBubbleArr={handleBubbles}></BubbleList>
            <div className="col">{bubbleSum}</div>
        </div>
    );
}

const TaskTitles = ({bubbles}) => {
    const weekdayTitles = ['M', 'T', 'W', 'R', 'F', 'S', 'S'];

    return(
        <div className="row labelRow">
            <div className="col text-start">Task Name</div>
            {
                bubbles.map((obj, i) => {
                    return <div key={obj.id} className="col-1">{weekdayTitles[i % bubbles.length]}</div>
                })
            }
            <div className="col">Sum</div>
        </div>
    );
}

const TaskContainer = () => {
    const plusStyle = {
        color: "green"
    }

    const minusStyle = {
        color: "red"
    }

    const handleHover = (e) => {
        console.log(e.target);
    }

    return(
        <div className="container">
            <TaskTitles bubbles={TaskContainerInit[0].bubbles}></TaskTitles>
            {   
                TaskContainerInit.map(obj => {
                   return <div key={obj.id}>{TaskItem(obj, obj.bubbles.length)}</div>;
                })
            }
            <div className="row">
                <div className="col text-muted text-start" onMouseEnter={handleHover}>
                    <FontAwesomeIcon icon={faPlus} style={plusStyle} />
                    <Typewriter></Typewriter>
                </div>
                <div className="col text-muted text-start" onMouseEnter={handleHover}>
                    <FontAwesomeIcon icon={faMinus} style={minusStyle} />
                    <div>Remove Row</div>
                </div>
            </div>
        </div>
    );
};

export default TaskContainer;