import { Container, H3, Img } from "./style";

export interface SectionsProps {
    children?: string,
    image: string,
    title: string,
    url: string,
    userId: string | undefined
}

export function Sections({ image, title, url, userId }: SectionsProps) {

    const testUrl = () => {
        if (url !== "NotFound") {
                window.location.href = `/${userId}/${url}/1/`
        } else if (url === "NotFound") {
                window.location.href = `/${url}`
        }
    }

    return (
        <Container>
            <Img onClick={testUrl} src={image} alt="" />
            <H3>{title}</H3>
        </Container>
    )
}