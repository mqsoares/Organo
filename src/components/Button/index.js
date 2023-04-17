import './Button.css'

export const Button = (props) => {
    return (
        <div>
            <button className='btn'>{props.children}</button>
        </div>
    )
}