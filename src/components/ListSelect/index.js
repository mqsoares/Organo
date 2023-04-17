import './ListSelect.css'

export const ListSelect = (props) => {
    return (
        <div className="select">
            <label className='sel-label'>{props.name}</label>
            <select 
                className='sel-select' 
                required={props.reqField}
                value={props.vl}
                onChange={e => props.whenEdit(e.target.value)}
            > 
                {props.items.map(item => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}