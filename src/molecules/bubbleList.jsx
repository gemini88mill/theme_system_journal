import React, {useState} from "react";
import Bubble from "../atoms/bubble";

// const BubbleInline = ({bubbleArr}) => {
//   return
// };

const BubbleList = ({bubbleArr, handleBubbleArr}) => {

    const bubbleHandler = (bubbleValue) => {
        handleBubbleArr(bubbleArr.map(obj => obj.id === bubbleValue.id
            ? bubbleValue.val > 2 ? {id: bubbleValue.id, val: 0} : bubbleValue
            : obj
        ));
    }

    return(
        <>
            {bubbleArr.map(obj => {
                return <div className="col-1" key={obj.id}><Bubble key={obj.id} bubbleVal={obj} handleBubbleVal={bubbleHandler} onChange={handleBubbleArr}></Bubble></div> ;
            })}
        </>
    );
};

export default BubbleList;