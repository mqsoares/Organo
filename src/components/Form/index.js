import { Input } from "../InputsTxt"
import { ListSelect } from "../ListSelect"
import "./Form.css"

export const Form = () => {
    
    const times = [
        "",
        "Programação",
        "Fornt-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Ivovação e Gestão"
    ]

    return (
        <section className="form">
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <form>
            <Input name="Nome" placeholder="Digite seu nome" />
            <Input name="Cargo" placeholder="Digite seu cargo" />
            <Input name="Imagem" placeholder="Informe o endereço da imagem" />
            <ListSelect name="time" items={times} />
            </form>
        </section>
    )
}