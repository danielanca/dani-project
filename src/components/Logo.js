import logo from '../media/logo.png';
import logo_harvest from '../media/logo_harvest.png';
import './Logo.css';

function redirect_link() {
    window.location.assign(window.location.origin+"/home");
}
var Logo = () => {

  
    return(
     <div onClick={redirect_link} className="logo-wrapper"> <img className="logo-icon" src={logo_harvest}></img> <img className="logo-front" src={logo}></img>  </div>

    );
}

export default Logo;