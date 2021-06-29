import picArray from "../components/image_importer";

import ContactForm_Person from "./ContactForm_Person";
import HouseDetail_FacilityIcons from "./HouseDetail_FacilityIcons";
import HouseDetail_descriptionH from "./HouseDetail_descriptionH";
import orange_icon from "../media/icon_orange.png";
import CardBoard_container from "./CardBoard_container";

var HouseDetail_container = (props) => {
    let data_in = props.house_data;
    let photo_preview = require("../media/house_list/" + data_in.img_src);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 pl-5">
                    <img
                        className="imagePreviewFull"
                        src={photo_preview.default}
                    ></img>
                    <div className=" preview-container pl-5">
                        {picArray.map((picArray) => (
                            <img
                                className="image_thumbnail"
                                src={picArray}
                            ></img>
                        ))}
                    </div>
                    <HouseDetail_FacilityIcons house_data={data_in} />

                    {/* <HouseDetail_descriptionH data_in={data_in} /> */}
                    <CardBoard_container
                        title="Details"
                        full_text="Blabla"
                        data_in={data_in}
                    />
                    <div className="card_template">
                        <div className="title-description">
                            <h2 className="title_desc"> Features</h2>{" "}
                        </div>
                        <div className="long-text">
                            <ul className="features-list">
                                <li>
                                    <img
                                        className="orange_icon"
                                        src={orange_icon}
                                    ></img>{" "}
                                    WiFi: {data_in.features.Wifi}
                                </li>
                                <li>
                                    <img
                                        className="orange_icon"
                                        src={orange_icon}
                                    ></img>{" "}
                                    TV: {data_in.features.Television}
                                </li>
                                <li>
                                    <img
                                        className="orange_icon"
                                        src={orange_icon}
                                    ></img>
                                    Radio: {data_in.features.Radio}
                                </li>
                                <li>
                                    <img
                                        className="orange_icon"
                                        src={orange_icon}
                                    ></img>
                                    Ocean View: {data_in.features.Ocean_view}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <ContactForm_Person person_data={data_in} />
                </div>

                {/* <div className="right_childwrapper">
                <ContactForm_Person person_data = {data_in}/>
              </div> */}
            </div>
        </div>
    );
};

export default HouseDetail_container;
