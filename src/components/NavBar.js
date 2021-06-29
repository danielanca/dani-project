import arrow from "../media/Path.png";
import Logo from "../components/Logo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
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
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#">
                                Home <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">
                                Features
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black work_but" href="#">
                                Work with Us <img src={arrow}></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
