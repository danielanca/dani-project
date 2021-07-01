import "bootstrap/dist/css/bootstrap.min.css";
import "./HouseDetail_FacilityIcons.css";
import slot_icons from "components/slot_icons_importer";
const HouseDetail_FacilityIcons = (props) => {
    let data_in = props.house_data;
    let photo_preview = require("media/house_list/" + data_in.img_src);
    return (
        <div className="details-container">
            <div className="details-title">Details </div>
            <div className="details-slots">
                <div className="slot-box">
                    {" "}
                    <img
                        style={{ height: "2vw" }}
                        src={slot_icons.bed_icon.default}
                    ></img>{" "}
                    {data_in.room_slots}{" "}
                </div>
                <div className="slot-box">
                    {" "}
                    <img
                        style={{ height: "2vw" }}
                        src={slot_icons.bathroom_icon.default}
                    ></img>{" "}
                    {data_in.bath_rooms}{" "}
                </div>
                <div className="slot-box">
                    {" "}
                    <img
                        style={{ height: "2vw" }}
                        src={slot_icons.floor_icon.default}
                    ></img>{" "}
                    {data_in.floor}{" "}
                </div>
                <div className="slot-box">
                    {" "}
                    <img
                        style={{ height: "2vw" }}
                        src={slot_icons.garage_icon.default}
                    ></img>{" "}
                    {data_in.garage}{" "}
                </div>
                <div className="slot-box">
                    {" "}
                    <img
                        style={{ height: "2vw" }}
                        src={slot_icons.calendar_icon.default}
                    ></img>{" "}
                    {data_in.data_fabrication}{" "}
                </div>
            </div>
        </div>
    );
};

export default HouseDetail_FacilityIcons;
