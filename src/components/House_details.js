import Menu_header from './Menu_header';
import './house_details.css';
import contact_profile_pic from '../media/avatar.png'
import arrow_right from '../media/arrow.png';
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

        <div className="contact-form"> 
          <div className="view-profile">
            <img className="profilephoto" src={contact_profile_pic}></img> 
             <div className="profile-text">
                <p className="contactname">Kayley Hall</p>
                <p className="profile-link">View profile</p>
             </div>
             
          </div>
          <div className="form-container">
              <input className="form" id="firstname" type="text"  placeholder=" First Name " />
              <input className="form" id="firstname" type="text"  placeholder=" Phone " />
              <input className="form" id="firstname" type="text"  placeholder=" Email " />
              <input className="form" id="firstname" type="text"  placeholder=" Hello, I'm interested in " />
              {/* <label for="firstname" class="form-field__label">First name</label> */}
          </div>
          <div className="view-more">
            <button className="button-viewmore"> View more <img className="arrow-c" src={arrow_right}></img></button>
          </div>
        </div>

      </div>
      

      
   
 
    );

}

export default House_details;