

import { AddressForm } from "./AddressForm/AddressForm";
import { useState } from "react";
import { Container, Wrapper, P, TextDiv, Img } from "./style";
import arrow from "../../assets/icons/arrows/arrowDrop.svg"
import arrowUp from "../../assets/icons/arrows/arrowUp.svg"

export interface AddNewAddressProps {
    text: string
}

export function AddNewAddress({ text }: AddNewAddressProps) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    
    return (
        <Container>
            <TextDiv>
                <P onClick={handleOpen}>Add New Address</P>
                <Img onClick={handleOpen} src={open ? arrow : arrowUp} />
            </TextDiv>
            {open
                ? <Wrapper>
                    <AddressForm />
                </Wrapper>
                : <></>
            }
        </Container>
    )
}



