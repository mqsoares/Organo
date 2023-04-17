import { useState } from "react"
import { Button } from "../Button"
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

    const [name, setName] = useState('')
    const [post, setPost] = useState('')
    const [image, setImage] = useState('')

    const saveData = (e) => {
        e.preventDefault()
        console.log('salvou ---> ', name, post, image)
    }

    return (
        <section className="form">
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            <form onSubmit={saveData}>
            <Input 
                reqField={true}
                name="Nome" 
                placeholder="Digite seu nome" 
                vl={name} 
                whenEdit={value => setName(value)}
            />
            <Input 
                reqField={true}
                name="Cargo"
                placeholder="Digite seu cargo" 
                vl={post}
                whenEdit={value => setPost(value)}
            />
            <Input
                name="Imagem"
                placeholder="Informe o endereço da imagem" 
                vl={image}
                whenEdit={value => setImage(value)}
            />
            <ListSelect reqField={true} name="Time" items={times} />
            <Button>
                Criar card
            </Button>
            </form>
        </section>
    )
}