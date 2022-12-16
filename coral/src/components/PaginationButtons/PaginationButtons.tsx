import { useParams } from "react-router-dom";
import { Container, Next, Pages, Wrapper } from "./style";


export function PaginationButtons() {

    const {userId} = useParams()

    const redirect = (page:number)=>{
        window.location.href = `/${userId}/handbags/${page}`
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