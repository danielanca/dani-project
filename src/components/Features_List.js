import orange_icon from "../media/icon_orange.png";
import "./Features_List.css";

const Features_List = (props) => {
    let data_in = props.house_data;

    return (
        <ul className="features-list">
            <li>
                <img className="orange_icon" src={orange_icon}></img> WiFi:{" "}
                {data_in.features.Wifi}
            </li>
            <li>
                <img className="orange_icon" src={orange_icon}></img> TV:{" "}
                {data_in.features.Television}
            </li>
            <li>
                <img className="orange_icon" src={orange_icon}></img>
                Radio: {data_in.features.Radio}
            </li>
            <li>
                <img className="orange_icon" src={orange_icon}></img>
                Ocean View: {data_in.features.Ocean_view}
            </li>
        </ul>
    );
};

export default Features_List;
