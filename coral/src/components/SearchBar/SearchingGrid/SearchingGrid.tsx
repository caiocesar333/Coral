import { SearchShowCase } from "./SearchShowCase/SearchShowCase";
import { Background, Container } from "./style"
import { useRef } from "react";
import { useSpring, animated } from "react-spring"

export interface SearchingGridProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function SearchingGrid({ search, setSearch, showModal, setShowModal }: SearchingGridProps) {

    const modalRef = useRef(null);
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
    })

    const closeModal = (e: any) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }
    return (<>
        <Background ref={modalRef} onClick={closeModal} >
            <animated.div style={animation}>
                <Container>
                    <SearchShowCase showModal={showModal} setShowModal={setShowModal} search={search} setSearch={setSearch}/>
                </Container>
            </animated.div>
        </Background>

    </>
    )
}