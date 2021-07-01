import "../CardBoard/CardBoard_container.css";

import AnyComponent_Container from "./../AnyComponent_Container";

const CardBoard_container = (props) => {
    let title = props.title;
    let content_Component = props.children;
    let data_in = props.data_in;

    return (
        <div className="description_House">
            <div className="title-description">
                {" "}
                <h2 className="title_desc"> {props.title}</h2>
            </div>
            <div className="long-text">{props.children}</div>
        </div>
    );
};

export default CardBoard_container;
