import arrow from "../media/Path.png";
import "./Button_WorkWithUs.css";
var Button_WorkWithUs = () => {
    return (
        <button className="work_with_us">
            {" "}
            <p className="orange_card">
                {" "}
                Work with Us <img src={arrow}></img>{" "}
            </p>{" "}
        </button>
    );
};

export default Button_WorkWithUs;
