
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import { useState } from "react";
import { Handle, Img, P } from "./style";

export function QuantityHandle() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () =>{
        setCount(count-1);
    }

    return (
            <Handle>
                <Img onClick={decrementCount} src={minus}></Img>
                <P>{count}</P>
                <Img onClick={incrementCount} src={plus}></Img>
            </Handle>
    )

}