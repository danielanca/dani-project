
import profile_picture from '../media/Oval.png';
import './testimonials.css';
function Testimonials()
{
    return(
        <div className="background_c">
            <div className="testimonial-line"> </div>
            <div className="text_desc">“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”</div>
            <div className="testimonial_container">
                <div className="cell">
                    <div className="profile-pic" > <img src={profile_picture} alt="Logo" /></div>
                    <div className="text-wrapper"> 
                        <div className="profile-name "> Lara Madrigal</div>
                        <div className="profile-desc ">Client</div>
                    </div>

                </div>
                <div className="cell black-back"> 
                    <div className="profile-pic" > <img src={profile_picture} alt="Logo" /></div>
                    <div className="text-wrapper"> 
                        <div className="profile-name white"> Lara Madrigal</div>
                        <div className="profile-desc gray">Client</div>
                    </div>
                    </div>
                <div className="cell"> 
                    <div className="profile-pic" > <img src={profile_picture} alt="Logo" /></div>
                    <div className="text-wrapper"> 
                        <div className="profile-name "> Lara Madrigal</div>
                        <div className="profile-desc ">Client</div>
                    </div>
                </div>
            </div>
        </div>


    );
}


export default Testimonials;