import { useRef } from "react";
import { useSpring, animated } from "react-spring"
import { PlaceOrder } from "../Buttons/PlaceOrder/PlaceOrder";
import { Pincode } from "../Pincode/Pincode";
import { ProductBag } from "../ProductBag/ProductBag";
import { Back } from "../TextComponents/Back";
import { ContinueShopp } from "../TextComponents/ContinueShopp/ContinueShopp";
import { TotalPrice } from "../TotalPrice/TotalPrice";
import { Background, Container } from "./style";

export interface ModalProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({ showModal, setShowModal }: ModalProps) {
    const modalRef = useRef(null);
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
    })

    const closeModal = (e:any) =>{
        if(modalRef.current === e.target){
            setShowModal(false)
        }
    }

    return (
        <>
            {showModal ?
                <Background ref={modalRef} onClick={closeModal} >
                    <animated.div style={animation}>
                        <Container>
                            <Back showModal={showModal} setShowModal={setShowModal}></Back>
                            <ProductBag></ProductBag>
                            <ProductBag></ProductBag>
                            <TotalPrice></TotalPrice>
                            <Pincode placeholder="Coupon Code"></Pincode>
                            <PlaceOrder></PlaceOrder>
                            <ContinueShopp></ContinueShopp>
                        </Container>
                    </animated.div>
                </Background>
                : null}

        </>
    )
}