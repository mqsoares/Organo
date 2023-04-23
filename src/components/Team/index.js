import { Player } from '../Player'
import './Team.css'

export const Team = (props) => {
    return (
        props.players.length > 0 && <section className='team' style={{backgroundColor: props.colorSecondary}}>
            <h3 style={{borderBottomColor: props.colorPrimary}}>{props.teamName}</h3>
            <div className='cards'>
                {props.players.map( player => <Player colorBackgroundHeader={props.colorPrimary} key={player.name} name={player.name} post={player.post} image={player.image} />)}
            </div>
        </section>
    )
}