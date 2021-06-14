

import picArray from '../components/image_importer';
import image_src from '../media/house_interior.png';
import slot_icons from '../components/slot_icons_importer';
import ContactForm_Person from './ContactForm_Person';
import orange_icon from '../media/icon_orange.png';

var HouseDetail_container = (props) => {
 
  let data_in = props.house_data;
  let photo_preview = require("../media/house_list/"+data_in.img_src);
    return(

    <div className="big-wrapper">
           <div className="left_childwrapper">
           
                <img className="imagePreviewFull" src={photo_preview.default}></img>
                <div className="preview-container">
                  { picArray.map(picArray => <img className="image_thumbnail" src={picArray}></img>)}
                    
                </div>
                <div className="details-container">
                  <div className="details-title">Details </div>
                  <div className="details-slots">
                      <div className="slot-box"> <img style={{height:"2vw"}} src={slot_icons.bed_icon.default}></img> {data_in.room_slots} </div> 
                      <div className="slot-box"> <img style={{height:"2vw"}} src={slot_icons.bathroom_icon.default}></img>  {data_in.bath_rooms} </div> 
                      <div className="slot-box"> <img style={{height:"2vw"}} src={slot_icons.floor_icon.default}></img>  {data_in.floor} </div> 
                      <div className="slot-box"> <img style={{height:"2vw"}} src={slot_icons.garage_icon.default}></img>  {data_in.garage} </div> 
                      <div className="slot-box"> <img style={{height:"2vw"}} src={slot_icons.calendar_icon.default}></img>  {data_in.data_fabrication} </div> 
                  </div>
                </div>

                <div className="description_House">
                  <div className="title-description"> <h2 className="title_desc"> Description</h2></div>
                  <div className="long-text"> <h3 className="full-text"> {data_in.description_full} </h3> </div>
                </div>

              <div className="card_template">
                  <div className="title-description"><h2 className="title_desc"> Features</h2> </div>
                  <div className="long-text"> 
                  <ul className="features-list">

                    <li><img className="orange_icon" src={orange_icon}></img> WiFi: {data_in.features.Wifi}</li>
                    <li><img className="orange_icon" src={orange_icon}></img> TV: {data_in.features.Television}</li>
                    <li><img className="orange_icon"  src={orange_icon}></img>Radio: {data_in.features.Radio}</li>
                    <li><img className="orange_icon" src={orange_icon}></img>Ocean View: {data_in.features.Ocean_view}</li>
                  </ul>
                  

                  </div>
              </div>

            </div>

            <div className="right_childwrapper">
              <ContactForm_Person person_data = {data_in}/>
            </div>
      </div>

    );

}

export default HouseDetail_container;