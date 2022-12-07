import { useState } from "react";
import { SelectFilter } from "../../../SelectFilter/SelectFilter";
import { InputRadio } from "../../PaymentsOpWrapper/PaymentOptions/style";
import { ColumnDiv, Container, HiddenDiv, Img, InputId, P, Wrapper } from "./style";

export interface IdOptionsProps {
    img?: string,
    name?: string
    placeholder?: string,
}

export function IdOptions({ img, placeholder, name }: IdOptionsProps) {
    const [open, setOpen] = useState(false);

    const handle = () => {
        setOpen(!open)
    }

    return (
        <Container>
            <ColumnDiv>
                <Wrapper>
                    <Img src={img} />
                    <P>{name}</P>
                </Wrapper>
                <InputRadio name="idOptions" onClick={handle} type="radio" />
            </ColumnDiv>

            {open ?
                <><HiddenDiv>
                    <InputId placeholder={placeholder} />
                    <SelectFilter filterName="Save this for future transactions" 
                    open={open}  setOpen={setOpen}  />
                </HiddenDiv></>
                : <></>}
        </Container>
    )
}