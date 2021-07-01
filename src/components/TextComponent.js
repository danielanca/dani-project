import "./TextComponent.css";

var TextComponent = (props) => {
    let data_in = props.house_data;
    return <h3 className="full-text"> {data_in.description_full} </h3>;
};

export default TextComponent;
