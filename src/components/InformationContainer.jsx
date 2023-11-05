import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../Styles/components/informationcontainer.sass'

const informationContainer = () => {
    return <section id='information'>
    <div className="info-card">
        <AiFillPhone id='phone-icon'/>
        
        <div>
            <h3>Whatsapp</h3>
            <p>(47)99665-5148</p>
        </div>
    </div>

    <div className="info-card">
        <AiOutlineMail id='email-icon'/>
        
        <div>
            <h3>E-mail</h3>
            <p>filipe18tti@gmail.com</p>
        </div>
    </div>

    <div className="info-card">
        <AiFillEnvironment id='pin-icon'/>
       
        <div>
            <h3>Localização</h3>
            <p>Joinville / SC</p>
        </div>
    </div>

</section>
}

export default informationContainer
