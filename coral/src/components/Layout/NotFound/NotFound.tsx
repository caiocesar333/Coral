
// imports for Mobile Version

import MediaQuery from "react-responsive";
import { Error } from "./Error";

export function NotFound() {


    return (<>
        <MediaQuery minWidth={1200}>
            <Error/>
        </MediaQuery>
    </>
    )
}