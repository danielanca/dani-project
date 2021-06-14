import logo from '../media/logo.png';
import logo_harvest from '../media/logo_harvest.png';
import './Logo.css';

var Logo = () => {

    return(
        <div  className="logo-wrapper"> <img className="logo-icon" src={logo_harvest}></img> <img className="logo-front" src={logo}></img>  </div>

    );
}

export default Logo;