import React, {useEffect, useState} from "react";
const words = "add row";

const Typewriter = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === words.length - 1 && subIndex === words[index].length) {
            return;
        }

        if (
            subIndex === words[index].length + 1 &&
            index !== words.length - 1 &&
            !reverse
        ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + 1);
        }, 300);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    //blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 300);
        return () => clearTimeout(timeout2);
    }, [blink])

    return(
        <>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</>
    );
}

export default Typewriter;