import './Team.css'

export const Team = (props) => {
    return (
        <section className='team' style={{backgroundColor: props.colorSecondary}}>
            <h3 style={{borderBottomColor: props.colorPrimary}}>{props.teamName}</h3>

        </section>
    )
}