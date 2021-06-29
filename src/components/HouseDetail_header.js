import "bootstrap/dist/css/bootstrap.min.css";
import "./HouseDetail_header.css";

const HouseDetail_header = (props) => {
    let data_in = props.house_data;

    return (
        <div className="container-fluid p-3 detail_header">
            <div className="row">
                <div className="col-6">
                    <div className="text-h ">{data_in.name}</div>
                    <div className="text-small">{data_in.description}</div>
                </div>

                <div className="col-6">
                    <div className="text-price">{data_in.price}</div>
                    <div className="text-msquare">
                        {data_in.price_squarefeet}/sq ft
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDetail_header;
