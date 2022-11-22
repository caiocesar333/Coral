import { PlaceOrder } from "../Buttons/PlaceOrder/PlaceOrder";
import { Pincode } from "../DeliveryDetails/style";
import { ProductBag } from "../ProductBag/ProductBag";
import { Back } from "../TextComponents/Back";
import { TotalPrice } from "../TotalPrice/TotalPrice";
import { Container } from "./style";

export interface ModalProps{
    showModal:boolean,
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({showModal,setShowModal}:ModalProps){
    return(
        <>
        {showModal ? 
        <Container>
            <Back></Back>
            <ProductBag></ProductBag>
            <TotalPrice></TotalPrice>
            {/* <Pincode></Pincode> */}
            <PlaceOrder></PlaceOrder>
            {/* <ContinueShopp></ContinueShopp> */}
        </Container> 
        : null}
        
        </>
    )
}