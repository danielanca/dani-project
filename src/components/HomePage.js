import React from 'react'
import '../components/menu_header.css';
import Menu_header from './Menu_header';

import Details_component from './Details_component';
import '../components/details_component.css';
import Search_container from './Search_container';
import '../components/search_container.css';
import End_Part from './End_Part';
import '../components/End_Part.css';
import Testimonials from './Testimonials';
import '../components/testimonials.css';
import SiteFooter from './SiteFooter';
import NavBar from './NavBar';

// First page
var HomePage = () => {
    return(
          <div>
                  <NavBar/>
                  <Menu_header />
                  <Details_component/> 
                  <Search_container/> 
                  <Details_component/>  
                  <End_Part/> 
                  <Testimonials/>
                  <SiteFooter/>
              
          </div>
      
   
 
    );

}

export default HomePage;