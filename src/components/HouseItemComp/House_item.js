import houseimage from "../../media/house_list/house_list";

import slot_icons from "../slot_icons_importer";

const click_me = (data_in) => (event) => {
    console.log("You selected house:" + data_in.name);
    window.location.assign(window.location.origin + "/details/" + data_in.id);
};

var House_item = (props) => {
    let data = props.data_in;

    return (
        <div onClick={click_me(data)} className="house_item_component">
            <div className="house_image">
                {" "}
                <img height="190px" src={houseimage[data.id]}></img>{" "}
            </div>
            <div className="house_title"> {data.name} </div>
            <div className="house_details">
                <div className="block_component leftcomp">
                    <img height="15px" src={slot_icons.bed_icon.default}></img>{" "}
                </div>
                <div className="block_component middlecomp">
                    <img
                        height="15px"
                        src={slot_icons.bathroom_icon.default}
                    ></img>
                </div>
                <div className="block_component rightcomp">
                    <img
                        height="15px"
                        src={slot_icons.floor_icon.default}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default House_item;
