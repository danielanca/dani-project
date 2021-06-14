

import House_image_import from './House_image_import';
import Search_Panel from './Search_Panel';

import './search_container.css';
function Search_container()
{
    var text_list = ['Country', 'Type of house', 'Floors', 'Price'];
    return(

        
            <div className="container_section"> 
                    <div className="section1">
                        <div className="line-delimiter pos-1"></div>
                        <div className="title_head">Find your next place to live</div>
                    </div>    
                <Search_Panel param_objs = {text_list}/>

                 <div className="grid_house">
                    <House_image_import/>
                </div>
            </div>
    

    );

}


export default Search_container;