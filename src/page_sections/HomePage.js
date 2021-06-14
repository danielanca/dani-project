import React from 'react'


import NavBar from '../components/NavBar';
import Menu_header from '../components/Menu_header';
import Details_component from '../components/Details_component';
import Search_container from '../components/Search_container';
import End_Part from '../components/End_Part';
import Testimonials from '../components/Testimonials';
import SiteFooter from '../components/SiteFooter';
// First page
var HomePage = () => {
    return(

            <div>
                    <NavBar></NavBar>
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