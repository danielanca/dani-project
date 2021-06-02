
import React, { Component } from "react";

// Custom JSON file

let admins = require('../house_list/house_prop.json');

export class House_image_import extends Component {
    render() {
        var dani = admins[1].category3;
        
        return(
         
                <div>
                   <div className="xan">Ben  {admins[1].category3} </div> 
                {admins.map((postDetail,))}
                </div>
           
        );
    }
}

export default House_image_import;
