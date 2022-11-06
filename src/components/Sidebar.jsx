import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/Foto_perfil.png';

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Marcus Silverio" />
      <h3 className="title">Full Stack Developer</h3>  
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn" download>
        Download Curriculo
      </a>
    </aside>
  )
}

export default Sidebar