import "./CardBoard_container.css";
const CardBoard_container = (props) => {
    let title = props.title;
    let content_Component = props.component;
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

export default CardBoard_container;
