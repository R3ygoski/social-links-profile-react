import SocialMedia from '../SocialMedia'
import './Card.scss'

const socialMediasList = [
    {
        id: 1,
        socialMediasName: 'GitHub',
        link: '#',
    },
    {
        id: 2,
        socialMediasName: 'Frontend Mentor',
        link: '#',
    },
    {
        id: 3,
        socialMediasName: 'Linkedin',
        link: '#',
    },
    {
        id: 4,
        socialMediasName: 'Twitter',
        link: '#',
    },
    {
        id: 5,
        socialMediasName: 'Instagram',
        link: '#',
    }
]

export default function Card(){
    return (
        <nav className="card">
            <img className="card__avatar" src="/assets/images/avatar-jessica.jpeg" alt="Avatar Image"/>
            <h1 className="card__profile">Jessica Randall</h1>
            <h2 className="card__local">London, United Kingdom</h2>
            <p className="card__citation">"Front-end developer and avid reader."</p>
            <SocialMedia socialMedia={socialMediasList}/>
        </nav>
    )
}