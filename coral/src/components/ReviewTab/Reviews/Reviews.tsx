import { Container, Img, P, Wrapper } from "./style";
import arrow from "../../../assets/arrow2.svg"
import { Star } from "../../Icons/Stars";


export function Reviews() {

     return (
          <Container>
               <Wrapper>
                    <P>GUCCI Colbar Handbag</P>
                    <P>Quality product with awesome accessories</P>
                    <Star />
                    <Img src={arrow} alt=""></Img>
               </Wrapper>
          </Container>
     )
}