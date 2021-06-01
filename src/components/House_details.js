import Menu_header from './Menu_header';
import './house_details.css';

// Second page
function House_details()
{
    
    return(
      <div>
        <div className="house_detail_background">
            <Menu_header></Menu_header>
        </div>
        <div className="detail_header">
          <div className="left-wrapper">
            <div className="text-h">Modern House</div>
            <div className="text-small">3002 Foster Ave, Brooklyn, NY 11210, USA</div>
          </div>
          <div className="right-wrapper">
            <div className="text-price">$450,000</div>
            <div className="text-msquare">$2,800/sq ft</div>
          </div>
          
        </div>


      </div>
      

      
   
 
    );

}

export default House_details;