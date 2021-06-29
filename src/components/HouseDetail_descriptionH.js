const HouseDetail_descriptionH = (props) => {
    let data_in = props.data_in;
    return (
        <div className="description_House">
            <div className="title-description">
                {" "}
                <h2 className="title_desc"> Description</h2>
            </div>
            <div className="long-text">
                {" "}
                <h3 className="full-text"> {data_in.description_full} </h3>{" "}
            </div>
        </div>
    );
};

export default HouseDetail_descriptionH;
