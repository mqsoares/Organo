import './Player.css'

export const Player = ({name, post, image}) => {
    return (
        <div className='player'>
            <div className='header'>
                <img src={image} alt={'Foto do '+ name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{post}</h5>
            </div>
        </div>
    )
} 