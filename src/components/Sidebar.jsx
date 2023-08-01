import SocialNetworks from './SocialNetworks'
import Avatar from '../img/perfil desktop.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './informationContainer'


const Sidebar = () => {
  return <aside id="sidebar">
      <img src={Avatar} alt="Filipe Silva" />
       <p className="title">Desenvolvedor Front End</p>
       <SocialNetworks/>
       <InformationContainer/>
       <a href="" className="btn">Download do currículo</a>
  </aside>
}

export default Sidebar
