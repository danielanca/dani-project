import picArray from "../components/image_importer";

import ContactForm_Person from "./ContactForm_Person";
import HouseDetail_FacilityIcons from "./HouseDetail_FacilityIcons";
import HouseDetail_descriptionH from "./HouseDetail_descriptionH";

import CardBoard_container from "./CardBoard_container";
import Features_List from "./Features_List";
import TextComponent from "./TextComponent";
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

                    <CardBoard_container title="Details">
                        <TextComponent house_data={data_in} />
                    </CardBoard_container>
                    <CardBoard_container title="Features">
                        <Features_List house_data={data_in} />
                    </CardBoard_container>
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
