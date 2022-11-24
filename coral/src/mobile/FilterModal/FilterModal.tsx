import { useRef } from "react";
import { useSpring, animated } from "react-spring"
import { ProdDescMobile } from "../ProdDescMobile/ProdDescMobile";
import { SortMobile } from "../SortMobile/SortMobile";
import { Background, Container } from "./style";

export interface FilterModalProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export function FilterModal({ showModal, setShowModal }: FilterModalProps) {
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
                            <ProdDescMobile title="Sort By" arrow={false}/>
                            <SortMobile/>
                        </Container>
                    </animated.div>
                </Background>
                : null}

        </>
    )
}