import logo from '../media/logo.png';
import arrow from '../media/Path.png';

function NavBar()
{
        return(

            <div className="cardcss centered">
                <div className="logo-wrapper">  <img className="logo-front" src={logo}></img>  </div>
                <p className="nav_link"> NavLink </p>
                <p className="nav_link "> NavLink </p>
                <p className="nav_link"> NavLink </p>
                <p className="nav_link"> NavLink </p>
                <p className="orange_card "> Work with Us <img src={arrow}></img> </p>
            </div>


        );


}


export default NavBar;
