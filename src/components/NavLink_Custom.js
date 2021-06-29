import "bootstrap/dist/css/bootstrap.min.css";
import "./NavLink_Custom.css";
import arrow from "../media/Path.png";
const NavLink_Custom = (props) => {
    let text = props.text;
    let direct_link = props.link;
    let dark_background = props.dark_background;
    let light_color = props.light_color;
    let arrow_icon = props.arrow_icon;
    let classNaming = " ";
    if (props.light_color != null) {
        classNaming = "nav-link active text-white";
    } else if (props.dark_background != null) {
        classNaming = "nav-link text-black orange_back";
    }

    if (props.light_color != null && props.dark_background != null) {
        classNaming = "nav-link active text-white";
    }
    if (arrow_icon == null) {
        arrow_icon = "no";
    }
    return (
        <li className="nav-item">
            <a className={classNaming} href={direct_link}>
                {text}{" "}
                {arrow_icon.includes("yes") ? <img src={arrow}></img> : ""}
            </a>
        </li>
    );
};

export default NavLink_Custom;
