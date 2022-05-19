import React from "react";
import TaskName from "../atoms/taskName";
import BubbleList from "../molecules/bubbleList";

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

const TaskItem = ({taskName, bubbles, sum}) => {
    const handleName = (e) => {
        console.log(e);
    }

    const handleBubbles = (e) => {
        console.log(e);
    }
    
    return(
        <div className="row">
            <div className="col"><TaskName name={taskName} nameHandler={handleName}></TaskName></div>
            <BubbleList bubbleArr={bubbles} handleBubbleArr={handleBubbles}></BubbleList>
            <div className="col">{sum}</div>
        </div>
    );
}

const TaskContainer = () => {
    return(
        <div className="container">
            {   
                TaskContainerInit.map(obj => {
                   return <div key={obj.id}>{TaskItem(obj)}</div>;
                })
            }
        </div>
    );
};

export default TaskContainer;