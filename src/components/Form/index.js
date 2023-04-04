import { Input } from "../InputsTxt"
import "./Form.css"

export const Form = () => {
    return (
        <section className="form">
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <form>
            <Input name="Nome" placeholder="Digite seu nome" />
            <Input name="Cargo" placeholder="Digite seu cargo" />
            <Input name="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )
}