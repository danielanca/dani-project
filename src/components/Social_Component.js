
import facebook_icon from '../media/social_icons/facebook.png';
import instagram_icon from '../media/social_icons/instagram.png';
import twitter_icon from '../media/social_icons/twitter.png';
import './SiteFooter.css';
var Social_Component = () => {

    return(

        <div className="social_icons">
            <img className="social-facebook" height="20px" width="auto" src={facebook_icon} ></img>
            <img className="social-twiiter" height="20px" width="auto" src={instagram_icon}></img>
            <img className="social-instagram" height="20px" width="auto" src={twitter_icon}></img>
        </div>

    );

}

export default Social_Component;