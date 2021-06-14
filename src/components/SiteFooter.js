
import Social_Component from '../components/Social_Component';
import './SiteFooter.css';
import Logo from './Logo';
import FooterList from './FooterList';
import Button_WorkWithUs from '../components/Button_WorkWithUs';
var SiteFooter = () => {

    return(

    <div className="footer_component">
        <h2 className="footer_titleText"> Make your dream a <a className="orangeclr">reality</a></h2>
        {/* <button className="work_with_us"> Work with us!</button> */}
                <Button_WorkWithUs/>
        <div className="footer-wrapper">
            <Logo/>
            <Social_Component/>
        </div>

        <FooterList/>
        
    </div>
        
    );

}

export default SiteFooter;