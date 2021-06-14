
import House_item from './House_item'
import './house_item.css'
import React, {useState} from 'react';


var House_image_import = (props) => {

    

    let house_data = require('../components/house_prop.json');
    let houseListing_length = 0;
   if(props.size_length==null || props.size_length==0)
   {
    houseListing_length = 6;
   }
   else
   {
       houseListing_length = props.size_length;
   }
    let house_Data_array = [];
    for(let i=0;i<houseListing_length;i++)
    {
        house_Data_array[i] = house_data[i];
    }
    return(
        <div className="house_list_wrapper"> 
        { house_Data_array.map( index => <House_item key={index.id} data_in = {index}/>  )}
       
       
   {/* {
            (() => {
            for(let i = 0 ;i < Object.keys(admins.length);i++){
            
            }})} */}
     </div>  
    )
    
}


export default House_image_import
