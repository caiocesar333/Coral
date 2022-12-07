import { useForm } from "react-hook-form";
import { MobileNumberCamp } from "./MobileNumberCamp/MobileNumberCamp";
import { Container, LongWrapper, Wrapper } from "./style";


export function AddressForm() {
    const { register, handleSubmit, setValue, setFocus } = useForm();

    const onSubmit = (e: any) => {
        console.log(e);
    }

    const checkCEP = (e: any) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            // register({ name: 'address', value: data.logradouro });
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');
        });
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <Wrapper>
                    <label>
                        Full name:
                        <input className="input" type="text" {...register("fullName")} />
                    </label>
                    <label>
                        Street Adress:
                        <input className="input" type="text" {...register("address")} />
                    </label>
                    <label>
                        City:
                        <input  className="input"type="text" {...register("city")} />
                    </label>
                </Wrapper>
                <LongWrapper>
                    <MobileNumberCamp campName="Mobile number" />
                    <label>
                        State:
                        <input className="input" type="text" {...register("uf")} />
                    </label>
                    <label>
                        Pin Code:
                        <input className="input" type="text" {...register("cep")} onBlur={checkCEP} />
                    </label>
                </LongWrapper>
            </Container>
        </form>

    )
}