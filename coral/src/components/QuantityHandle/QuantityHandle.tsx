
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import { useState } from "react";
import { Handle, Img, P } from "./style";

export interface QuantityHandleProps{
    quantity:number
}

export function QuantityHandle({quantity}:QuantityHandleProps) {
    const [count, setCount] = useState(quantity);
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