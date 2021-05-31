import header_background from '../media/header_pic.png';

import '../components/menu_header.css';
import Menu_header from './Menu_header';

import Details_component from '../components/Details_component';
import '../components/details_component.css';
import Search_container from '../components/Search_container';
import '../components/search_container.css';
import End_Part from '../components/End_Part';
import '../components/End_Part.css';
import Testimonials from '../components/Testimonials';
import '../components/testimonials.css';


function Bodyground()
{
    
    return(
      <div>
        <div className="full_wrap" >
              {/* <Menu_header name="NavLink1"> </Menu_header>
              <Details_component></Details_component> 
              <Search_container></Search_container> 
              <Details_component></Details_component>  */}
              {/* <End_Part></End_Part> */}
              <Testimonials></Testimonials>
      </div>

      </div>
      
   
 
    );

}

export default Bodyground;