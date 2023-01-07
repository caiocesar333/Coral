import { useParams } from "react-router-dom";
import { Favorite } from "../Icons/Favorite";
import { FavDiv } from "./style";
import { Container, H4, H3, P, Wrapper, Div, Banner } from "./style";


export interface ProductRowProps {
    children?: string,
    image: string,
    name: string,
    description: string,
    price: string,
    userId: string | undefined
}

export function ProductRow({ image, name, description, price,userId }: ProductRowProps) {

    
    const redirect = () => {
        window.location.href = `${name}/${name}Image`
    }
    return (
        <Container>
            <Banner onClick={redirect} src={image} alt={name} />
            <Div>
                <Wrapper>
                    <H4 onClick={redirect} >{name}</H4>
                    <H3>{description}</H3>
                    <P>{price}</P>
                </Wrapper>
                <FavDiv>
                    <Favorite />
                </FavDiv>
            </Div>
        </Container>
    )
}