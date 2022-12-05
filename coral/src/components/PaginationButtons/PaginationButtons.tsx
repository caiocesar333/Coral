import { useState } from "react";
import { Container, Next, Pages, Wrapper } from "./style";


export function PaginationButtons() {

    const redirect = (page:number)=>{
        window.location.href = `http://localhost:3001/handbags/${page}`
    }


    return (
        <Container>
            <Wrapper>
                <Pages onClick={()=>{
                    redirect(1)
                }}>1</Pages>
                <Pages onClick={()=>{
                    redirect(2)
                }}>2</Pages>
                <Pages onClick={()=>{
                    redirect(3)
                }}>3</Pages>
                <Pages onClick={()=>{
                    redirect(4)
                }}>4</Pages>
                <Pages onClick={()=>{
                    redirect(5)
                }}>5</Pages>
            </Wrapper>

            <Next>Next</Next>
        </Container>
    )
   
}