import { Container, P, Select } from "./style";
import "../../../../styles/global.css"

export interface DateFormProps {
    campName: string,
    value?: string
}

export function DateForm({ campName, value }: DateFormProps) {

    let placeholder: Array<string>
    placeholder = campName.split(" ", 2)
    let str: string = `Enter ${placeholder[placeholder.length - 1]}`
    return (
        <Container>
            <P>Date of Birth</P>
            <Select>
                <option value="" disabled selected>DD/MM/YYYY</option>
            </Select>
        </Container>
    )
}