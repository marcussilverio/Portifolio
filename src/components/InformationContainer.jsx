import { AiOutlineMail, AiFillEnvironment} from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"

import '../styles/components/informationcontainer.sass'
const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <FaWhatsapp id="phone-icon"/>
            <div>
                <h3>Telefone</h3>
                <p>(45) 99155-4942</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>E-mail</h3>
                <p>marcus_vs@live.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localixação</h3>
                <p>Toledo-PR</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer