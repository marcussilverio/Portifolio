import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetwork.sass'

const socialNetworks =[
    {name: "linkedin", icon: <FaLinkedin/>, link:'https://www.linkedin.com/in/marcussilverio/'},
    {name: "github", icon: <FaGithub/>, link:'https://github.com/marcussilverio'},
    {name: "instagram", icon: <FaInstagram/>, link:'https://www.instagram.com/maarcusge/'}
];
const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network)=>(
            <a href={network.link} className='social-btn' id={network.name} key={network.name} target=
            "_blank">
                {network.icon}
            </a>
        ))}

    </section>
  )
}

export default SocialNetworks