
import "../../styles/global.css"
import { Reviews } from "./Reviews/Reviews";

import { Container} from "./style";
import { TableColumsReview } from "./TableColumsReview/TableColumsReview";


export function ReviewTab() {

    return (
        <Container>
            <TableColumsReview/>
            <Reviews/>
            <Reviews/>
            <Reviews/>
            <Reviews/>
        </Container>
    )
}