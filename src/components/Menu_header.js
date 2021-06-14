
import header_background from '../media/header_pic.png';

import Hero_component from './Hero_component';

import './menu_header.css';

var Menu_header = () => {
    return(
        <div className="header_h" style= {{"--img":  `url(${header_background})`}}>
            
            <Hero_component title="Beautiful homes made for you"> </Hero_component>
         </div>
      
    );
    
}

export default Menu_header;