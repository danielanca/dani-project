import "bootstrap/dist/css/bootstrap.min.css";
import "./Push_Button.css";
import click_arrow from "../../media/arrow.png";
const Push_Button = (props) => {
    let text = props.text;
    let bg_color = props.bg_color;
    let background_color, text_color;
    const color_style = {
        white: "rgb(255 255 255)",
        black: "rgb(0 0 0)",
        orange: "rgb(255 178 17) ",
    };

    //default
    background_color = color_style.black;
    text_color = color_style.white;

    switch (props.text_color) {
        case "white":
            text_color = color_style.white;
            break;

        case "black":
            text_color = color_style.black;
            break;

        case "orange":
            text_color = color_style.orange;
            break;
    }
    switch (props.bg_color) {
        case "white":
            background_color = color_style.white;
            break;
        case "black":
            background_color = color_style.black;
            break;
        case "orange":
            background_color = color_style.orange;
            break;
    }
    var classNameParameter = "button_atr ";
    if (props.classNameParams != null) {
        classNameParameter += props.classNameParams;
    }

    return (
        <button
            className={`${classNameParameter}`}
            style={{
                "background-color": `${background_color}`,
                color: `${text_color}`,
            }}
        >
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
