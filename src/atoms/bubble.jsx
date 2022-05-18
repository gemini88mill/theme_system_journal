import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faCircleHalfStroke} from "@fortawesome/free-solid-svg-icons";
import {faCircle as faCircleReg} from "@fortawesome/free-regular-svg-icons";

const bubbleIcon = {
    "0": <FontAwesomeIcon icon={faCircleReg}></FontAwesomeIcon>,
    "1": <FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon>,
    "2": <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
}

const BubbleIcon = ({val}) => bubbleIcon[val];

const Bubble = ({bubbleVal, handleBubbleVal}) => {
    return (
        <div onClick={() => handleBubbleVal({id: bubbleVal.id, val: ++bubbleVal.val})}>
            <BubbleIcon val={bubbleVal.val}></BubbleIcon>
        </div>
    );

};

export default Bubble;