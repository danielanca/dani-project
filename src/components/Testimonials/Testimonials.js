import profile_picture from "media/Oval.png";
import "./testimonials.css";
const Testimonials = () => {
    return (
        <div className="container-fluid background_c">
            <div className="row justify-content-center">
                <div className="col-md-4 mx-auto mt-5 mb-5">
                    <div className="testimonial-line mx-auto mt-5 mb-5"></div>
                    <div className=" text_desc">
                        “Certe, inquam, pertinax non existimant oportere
                        exquisitis rationibus conquisitis de quo enim ipsam.
                        Torquem detraxit hosti et quidem faciunt, ut aut.”
                    </div>
                </div>
            </div>

            <div className="row h-120 mx-auto mt-5 mb-5">
                <div className="col-md-4">
                    <div className="cell">
                        <div className="profile-pic">
                            {" "}
                            <img src={profile_picture} alt="Logo" />
                        </div>
                        <div className="text-wrapper">
                            <div className="profile-name ">Lara Madrigal</div>
                            <div className="profile-desc ">Client</div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="cell black-back">
                        <div className="profile-pic">
                            {" "}
                            <img src={profile_picture} alt="Logo" />
                        </div>
                        <div className="text-wrapper">
                            <div className="profile-name white">
                                {" "}
                                Lara Madrigal
                            </div>
                            <div className="profile-desc gray">Client</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cell">
                        <div className="profile-pic">
                            {" "}
                            <img src={profile_picture} alt="Logo" />
                        </div>
                        <div className="text-wrapper">
                            <div className="profile-name "> Lara Madrigal</div>
                            <div className="profile-desc ">Client</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
