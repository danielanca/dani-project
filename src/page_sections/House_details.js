import HouseDetail_header from '../components/HouseDetail_header';
import HouseDetail_container from '../components/HouseDetail_container'
import SiteFooter from '../components/SiteFooter';
import SimilarListing from '../components/SimilarListing';
import NavBar from '../components/NavBar';
import './house_details.css';


import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams
} from 'react-router-dom'
// Second page
var House_details = (param) => {    
  
 
  const { id } = useParams()
  let house_data = require('../components/house_prop.json');
  window.scrollTo(0, 0); 
   
  return(
      <div>
        <div className="house_detail_background">
           
            <NavBar/>
        </div>

        <HouseDetail_header house_data = {house_data[id]}/>  
        <HouseDetail_container house_data = {house_data[id]}/>
        <SimilarListing/>
        <SiteFooter/>
      

      </div>
   
 
    );

}

export default House_details;