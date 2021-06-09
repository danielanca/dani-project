import Menu_header from './Menu_header';
import './house_details.css';
import contact_profile_pic from '../media/avatar.png'
import arrow_right from '../media/arrow.png';
import picArray from '../components/image_importer';
import image_src from '../media/house_interior.png';
import slot_icons from '../components/slot_icons_importer';
import NavBar from '../components/NavBar';
// Second page
var House_details = () => {    

    return(
      <div>
        <div className="house_detail_background">
            {/* <Menu_header></Menu_header> */}
            <NavBar>  </NavBar>
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
        <div className="big-wrapper">
            <img className="imagePreviewFull" src={image_src}></img>
            <div className="preview-container">
               { picArray.map(picArray => <img className="image_thumbnail" src={picArray}></img>)}
                
            </div>
            <div className="details-container">
               <div className="details-title">Details </div>
               <div className="details-slots">

                  { slot_icons.map(slot_icons => <div className="slot-box"> <img src={slot_icons}></img> 3 </div>     )   }

                  

               </div>
            </div>

            <div className="description_House">
              <div className="title-description"> <h2 className="title_desc"> Description</h2></div>
              <div className="long-text"> <h3 className="full-text"> At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.

Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.

Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim. </h3> </div>
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
      </div>
      

      
   
 
    );

}

export default House_details;