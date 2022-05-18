import React from "react";

const TaskName = ({name, nameHandler}) => {
    return <input className="form-control" placeholder="Task Name" value={name} onChange={nameHandler} />;

}

export default TaskName;