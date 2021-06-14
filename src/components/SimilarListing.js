import House_image_import from './House_image_import';
import './SimilarListing.css';
var SimilarListing = () => {

    return(

        <div className="similar_section">
            
            <div className="listing-header">
                <div className="linear-line"> </div>
                <h2 className="headerLine"> Similar Listings </h2>
            </div>
            
        <House_image_import size_length={3}></House_image_import>
        </div>
    
        
    );

}

export default SimilarListing;