
import arrow from '../media/Path.png';
import Logo from '../components/Logo';
function NavBar()
{
        return(

            <div className="cardcss centered">
                
                <Logo/>
                <p className="nav_link"> NavLink </p>
                <p className="nav_link "> NavLink </p>
                <p className="nav_link"> NavLink </p>
                <p className="nav_link"> NavLink </p>
                <p className="work_but"> Work with Us <img src={arrow}></img> </p>
            </div>


        );


}


export default NavBar;
