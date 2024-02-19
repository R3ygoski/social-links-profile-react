import './SocialMedia.scss'

export default function SocialMedia({socialMedia}){
    return (
        <ul className="list">
            {socialMedia.map((item)=>{
                return (
                    <li className='list__social_media' key={item.id}>
                        <a className='social_media__link' href={item.link}>{item.socialMediasName}</a>
                    </li>
                )
            })}
        </ul>
    )
}