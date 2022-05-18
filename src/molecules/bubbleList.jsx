import React, {useState} from "react";
import Bubble from "../atoms/bubble";

// const BubbleInline = ({bubbleArr}) => {
//   return
// };

const BubbleList = ({bubbleArr, handleBubbleArr}) => {
    const [bubbleArrState, setBubbleArrState] = useState(bubbleArr);

    const bubbleHandler = (bubbleValue) => {
        setBubbleArrState(bubbleArrState.map(obj => obj.id === bubbleValue.id
            ? bubbleValue.val > 2 ? {id: bubbleValue.id, val: 0} : bubbleValue
            : obj
        ));
    }

    return(
        <>
            {bubbleArrState.map(obj => {
                return <div className="col-1" key={obj.id}><Bubble key={obj.id} bubbleVal={obj} handleBubbleVal={bubbleHandler} onChange={handleBubbleArr}></Bubble></div> ;
            })}
        </>
    );
};

export default BubbleList;