import React from "react";

import NavBar from "components/NavBar/NavBar";
import Menu_header from "components/MenuHeader/Menu_header";
import Details_component from "components/DetailsComponent/Details_component";
import Search_container from "components/SearchContainer/Search_container";
import End_Part from "../components/EndPart/End_Part";
import Testimonials from "components/Testimonials/Testimonials";
import SiteFooter from "components/SiteFooter/SiteFooter";

import "bootstrap/dist/css/bootstrap.min.css";
// First page
var HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Menu_header />
            <Details_component />
            <Search_container />
            <Details_component />
            <End_Part />
            <Testimonials />
            <SiteFooter />
        </div>
    );
};

export default HomePage;
