import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"

import '../Styles/components/socialnetworks.sass'


const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin/>, link: "https://www.linkedin.com/in/filipe-x-/"},
    { name: "github", icon: <FaGithub/>, link: "https://github.com/filipe-tti"},
    { name: "instagram", icon: <FaInstagram/>, link: "https://www.instagram.com/filipe_x_/"},
]

const SocialNetworks = () => {
  return <section id='social-networks'>
    {socialNetworks.map((network) => (
        <a href={network.link} className='social-btn' id={network.name} key={network.name}>

                {network.icon}
        </a>
    
    ) )}
  </section>
  
}

export default SocialNetworks
