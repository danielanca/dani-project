
import houseIMG from '../media/house1.png';

import bed from '../media/room.png';
import room from '../media/Shape.png';
function House_item()
{
    return(
        <div className="house_item_component">
            <div className="house_image">  <img height="190px" src={houseIMG}></img></div>
            <div className="house_title">title</div>
            <div className="house_details">
                <div class="block_component" ><img height="15px" src={bed}></img>2</div>
                <div class="block_component" ><img height="15px" src={bed}></img>3</div>
                <div class="block_component" ><img height="15px" src={bed}></img>4</div>
            </div>
        </div>


    );
}

export default House_item;