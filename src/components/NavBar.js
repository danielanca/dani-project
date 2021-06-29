import Logo from "../components/Logo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import NavLink_Items from "./NavLink_Items";
const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand text-white" href="#">
                    {" "}
                    <Logo />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <NavLink_Items />
            </nav>
        </div>
    );
};

export default NavBar;
