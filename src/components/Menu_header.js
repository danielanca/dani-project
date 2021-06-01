import logo from '../media/logo.png';
import arrow from '../media/Path.png';
import header_background from '../media/header_pic.png';
import Hero_component from './Hero_component';
import '../components/Hero_component.css';
function Menu_header(props)
{
    return(
        
            <div className="cardcss centered">
                <p className="logo_front" style= {{"--img":  `url(${logo})`}}> </p>
                <p className="nav_link"> NavLink </p>
                <p className="nav_link "> NavLink </p>
                <p className="nav_link"> NavLink </p>
                <p className="nav_link"> NavLink </p>
                <p className="orange_card "> Work with Us <p style= {{"--arrow_img":  `url(${arrow})`}}></p> </p>
            </div>

      
    );
    
}

export default Menu_header;