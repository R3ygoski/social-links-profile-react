import './SocialMedia.scss'
import {socialMediasList} from './data'

export default function SocialMedia(){
    return (
        <ul className="list">
            {socialMediasList.map((item)=>{
                return (
                    <li className='list__social_media' key={item.id}>
                        <a className='social_media__link' href={item.link}>{item.socialMediasName}</a>
                    </li>
                )
            })}
        </ul>
    )
}