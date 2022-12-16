import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/global.css"
import { Reviews } from "./Reviews/Reviews";

import { Container} from "./style";
import { TableColumsReview } from "./TableColumsReview/TableColumsReview";


export function ReviewTab() {

    let { userId } = useParams()
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