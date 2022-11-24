import { useRef } from "react";
import { useSpring, animated } from "react-spring"
import { RatingDiv } from "../DescriptionMobile/style";
import { Background, Container, Rate, TextDiv, Average, Text, Img } from "./style";
import rate from "../../assets/Mobile/Products/rate.svg"
import modalproduct from "../../assets/Mobile/Products/modalproduct.svg"

export interface ModalMobileProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export function ModalMobile({ showModal, setShowModal }: ModalMobileProps) {
    const modalRef = useRef(null);
    const animation = useSpring({
        config: {
            duration: 300
        },
        opacity: showModal ? 1 : 0,
        from: { transform: showModal ? 'translateY(100%)' : 'translateY(-100%)' },
        to: [
            { transform: "translateY(100%)" },
            { transform: "translateY(0%)" },
        ],
    })

    const closeModal = (e: any) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    return (
        <>
            {showModal ?
                <Background ref={modalRef} onClick={closeModal} >
                    <animated.div style={animation}>
                        <Container>
                            <Img src={modalproduct}></Img>
                            <RatingDiv>
                                <Rate src={rate}></Rate>
                                <TextDiv>
                                    <Average>Average Rating</Average>
                                    <Text>43 Ratings & 23 Reviews</Text>
                                </TextDiv>
                            </RatingDiv>
                        </Container>
                    </animated.div>
                </Background>
                : null}

        </>
    )
}