import Social_Component from "../components/Social_Component";
import "./SiteFooter.css";
import Logo from "./Logo";
import FooterList from "./FooterList";
import Button_WorkWithUs from "../components/Button_WorkWithUs";
const SiteFooter = () => {
    return (
        <div className="container-fluid footer_component">
            <div className="row">
                <div className="col-sm border-color">
                    <h2 className="footer_titleText">
                        {" "}
                        Make your dream a <a className="orangeclr">reality</a>
                    </h2>
                </div>
                <div className="col-sm border-color">
                    <Button_WorkWithUs />
                </div>
            </div>
            <div className="row">
                <div className="col-sm border-color">
                    <Logo />
                    <Social_Component />
                </div>
                <div className="col-sm border-color">
                    <FooterList />
                </div>
            </div>
        </div>
    );
};

export default SiteFooter;
