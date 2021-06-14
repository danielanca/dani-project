
import './HouseDetail_header.css';

var HouseDetail_header = (props) => {

    let data_in = props.house_data;

    return(

        <div className="detail_header">
        <div className="left-wrapper">
          <div className="text-h">{data_in.name}</div>
          <div className="text-small">{data_in.description}</div>
        </div>
        <div className="right-wrapper">
          <div className="text-price">{data_in.price}</div>
          <div className="text-msquare">{data_in.price_squarefeet}/sq ft</div>
        </div>
      </div>


    );


    }

    export default HouseDetail_header;