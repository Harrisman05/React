import './hero.css'
import keyboard from '../../assets/image 22.png'
import swim from '../../assets/image 23.png'
import sing from '../../assets/image 24.png'
import meditate from '../../assets/image 25.png'
import ballet from '../../assets/image 26.png'
import rice from '../../assets/image 27.png'
import bowl from '../../assets/image 28.png'
import guitar from '../../assets/image 29.png'
import female from '../../assets/image 30.png'

function Hero () {
    return (
        <div className="hero-container">
            <div className="static-images-container">
                <img src={bowl} alt="bowl" id="bowl"></img>
                <img src={female} alt="guitar" id="female"></img>
                <img src={rice} alt="rice" id="rice"></img>
                <img src={keyboard} alt="pan" id="keyboard"></img>
                <img src={meditate} alt="meditate" id="meditate"></img>
                <img src={ballet} alt="ballet" id="ballet"></img>
                <img src={guitar} alt="guitar"></img>
                <img src={swim} alt="swim" id="swim"></img>
                <img src={sing} alt="sing" id="sing"></img>                
            </div>   
            <h1>Online Experiences</h1>
            <h3>Join unique interactive activites led by one-of a kind hosts - all without leaving home.</h3>
        </div>
    )
}

export default Hero;