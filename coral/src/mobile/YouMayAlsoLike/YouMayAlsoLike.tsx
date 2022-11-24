import { ProdDescMobile } from "../ProdDescMobile/ProdDescMobile";
import { RowListMobile } from "../RowListMobile/RowListMobile";
import { Container } from "./style";


export function YouMayAlsoLike(){
    return(
        <Container>
            <ProdDescMobile title="You Might Also Like" arrow={false}/>
            <RowListMobile/>
        </Container>
    )
}