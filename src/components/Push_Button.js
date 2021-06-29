import "bootstrap/dist/css/bootstrap.min.css";
import "./Push_Button.css";
import click_arrow from "../media/arrow.png";
const Push_Button = (props) => {
    let text = props.text;
    return (
        <button className="button_atr">
            {" "}
            {text}{" "}
            <div
                className="clickarrow"
                style={{
                    "--click_arrow": `url(${click_arrow})`,
                }}
            ></div>{" "}
        </button>
    );
};

export default Push_Button;
