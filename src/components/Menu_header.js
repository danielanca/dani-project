
import header_background from '../media/header_pic.png';
import Hero_component from './Hero_component';
import '../components/Hero_component.css';
import NavBar from '../components/NavBar';
import '../components/NavBar.css';


function Menu_header(props)
{
    return(
        <div className="header_h" style= {{"--img":  `url(${header_background})`}}>
            <NavBar></NavBar>
            <Hero_component title="Beautiful homes made for you"> </Hero_component>
         </div>
      
    );
    
}

export default Menu_header;