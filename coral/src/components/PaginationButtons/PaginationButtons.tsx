import { useState } from "react";
import { Container, Next, Pages, Wrapper } from "./style";


export function PaginationButtons() {

    const redirect = ()=>{
        window.location.href = ""
    }


    return (
        <Container>
            <Wrapper>
                <Pages>1</Pages>
                <Pages>2</Pages>
                <Pages>3</Pages>
                <Pages>4</Pages>
                <Pages>5</Pages>
            </Wrapper>

            <Next>Next</Next>
        </Container>
    )
   
}