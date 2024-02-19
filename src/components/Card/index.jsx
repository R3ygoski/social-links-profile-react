import SocialMedia from '../SocialMedia'
import './Card.scss'
import avatarImage from './assets/avatar-jessica.jpeg'

export default function Card(){
    return (
        <nav className="card">
            <img className="card__avatar" src={avatarImage} alt="Avatar Image"/>
            <h1 className="card__profile">Jessica Randall</h1>
            <h2 className="card__local">London, United Kingdom</h2>
            <p className="card__citation">"Front-end developer and avid reader."</p>
            <SocialMedia/>
        </nav>
    )
}