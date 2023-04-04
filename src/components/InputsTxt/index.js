import "./InputsTxt.css"

export const Input = (props) => {
    return (
        <section className="inputs">
            <label className="ipt-label">{props.name}</label>
            <input className="ipt-input" placeholder={props.placeholder}></input>
        </section>
    )
}