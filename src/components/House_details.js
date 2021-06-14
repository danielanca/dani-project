import HouseDetail_header from './HouseDetail_header';
import HouseDetail_container from './HouseDetail_container';
import SiteFooter from './SiteFooter';
import SimilarListing from './SimilarListing';
import NavBar from './NavBar';
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

    return(
      <div>
        <div className="house_detail_background">
           
            <NavBar>  </NavBar>
        </div>

        <HouseDetail_header house_data = {house_data[id]}/>  
        <HouseDetail_container house_data = {house_data[id]}/>
        <SimilarListing/>
        <SiteFooter/>
      

      </div>
   
 
    );

}

export default House_details;