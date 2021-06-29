import "bootstrap/dist/css/bootstrap.min.css";
import House_image_import from "./House_image_import";
import "./SimilarListing.css";
const SimilarListing = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-row">
                <div className="col align-self-center pl-5">
                    <div className="linear-line mt-5"> </div>
                    <h2 className="headerLine mx-auto"> Similar Listings </h2>
                    <div className="col sm4 pl-5">
                        <House_image_import
                            size_length={3}
                        ></House_image_import>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimilarListing;
