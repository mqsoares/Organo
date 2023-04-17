import { useState } from "react"
import "./InputsTxt.css"

export const Input = (props) => {

    const whenTyping = (e) => {
        props.whenEdit(e.target.value)
    }

    return (
        <section className="inputs">
            <label className="ipt-label">{props.name}</label>
            <input value={props.vl} className="ipt-input" placeholder={props.placeholder} onChange={whenTyping} required={props.reqField}></input>
        </section>
    )
}