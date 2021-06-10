
import houseIMG from '../media/house1.png';

import bed from '../media/room.png';
import room from '../media/Shape.png';

import houseimage from '../media/house_list/house_list';

import slot_icons from '../components/slot_icons_importer';

function click_me() {

     console.log("That dude clicked me!");
}

var House_item = (props) => {  

   let data = props.data_in;
    
    return(

        <div onClick={click_me} className="house_item_component">
          
            <div className="house_image">  <img height="190px" src={houseimage[data.id]}></img> </div> 
            <div className="house_title"> {data.name} </div>
            <div className="house_details">
               
                <div className="block_component leftcomp" ><img height="15px" src={slot_icons.bed_icon.default}></img> </div>
                <div className="block_component middlecomp" ><img height="15px" src={slot_icons.bathroom_icon.default}></img></div>
                <div className="block_component rightcomp" ><img height="15px" src={slot_icons.floor_icon.default}></img></div>
            </div>
        </div>


    );
}

export default House_item;