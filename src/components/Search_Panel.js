import './search_container.css';
import arrow_down from '../media/arrow_down.png';
var Search_Panel = (props) => {


        return(
            <div className="search_container">
                 {props.param_objs.map( (text,index) => <div key={index}  className="search_type"> {text} <img src={arrow_down}></img> </div> )}
                  
            </div>
                  


        );
    

}

export default Search_Panel;