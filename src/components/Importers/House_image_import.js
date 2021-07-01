import "bootstrap/dist/css/bootstrap.min.css";
import House_item from "components/HouseItemComp/House_item";
import "components/HouseItemComp/house_item.css";
import React, { useState } from "react";

var House_image_import = (props) => {
    let house_data = require("components/house_prop.json");
    let houseListing_length = 0;
    if (props.size_length == null || props.size_length == 0) {
        houseListing_length = 6;
    } else {
        houseListing_length = props.size_length;
    }
    let house_Data_array = [];
    for (let i = 0; i < houseListing_length; i++) {
        house_Data_array[i] = house_data[i];
    }
    return (
        <div className="house_list_wrapper mx-auto">
            {house_Data_array.map((index) => (
                <House_item key={index.id} data_in={index} />
            ))}
        </div>
    );
};

export default House_image_import;
