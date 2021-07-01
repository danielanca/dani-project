import "bootstrap/dist/css/bootstrap.min.css";

import NavLink_Custom from "components/NavBar/NavLink_Custom";

const NavLink_Items = () => {
    return (
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <NavLink_Custom
                    text="Home"
                    link="https://nomorecoffeeplease.com"
                    light_color="yes"
                />
                <NavLink_Custom
                    text="Welcome"
                    link="https://nomorecoffeeplease.com"
                    light_color="yes"
                />
                <NavLink_Custom
                    text="About US"
                    link="https://nomorecoffeeplease.com"
                    light_color="yes"
                />
                <NavLink_Custom
                    text="Contact"
                    link="https://nomorecoffeeplease.com"
                    dark_background="yes"
                    arrow_icon="yes"
                />
            </ul>
        </div>
    );
};

export default NavLink_Items;
