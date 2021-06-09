import arrow_down from '../media/arrow_down.png';

import House_image_import from './House_image_import';

function Search_container()
{
    return(

        
            <div className="container_section"> 
                <div className="section1">
                    <div className="line-delimiter pos-1"></div>
                    <div className="title_head">Find your next place to live</div>
                </div>
               
                <div className="search_container">
                
                  <div className="search_type"> Looking for <img src={arrow_down}></img> </div>
                  <div className="search_type"> Location <img src={arrow_down}></img></div>
                  <div className="search_type"> Property Type <img src={arrow_down}></img></div>
                  <div className="search_type"> Price <img src={arrow_down}></img> </div>
                </div>
                <div className="grid_house">

                     <House_image_import/>
                    
                     {/* { slot_icons.map(slot_icons => <div className="slot-box"> <img src={slot_icons}></img> 3 </div>     )   } */}

                    
                   
                </div>
            </div>
        

    );

}


export default Search_container;