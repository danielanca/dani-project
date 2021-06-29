import arrow_right from "../media/arrow.png";
import "./ContactForm_Person.css";
var ContactForm_Person = (props) => {
    let person_data = props.person_data;
    let person_picture = require("../media/avatars/" +
        person_data.seller.profile_pic);
    return (
        <div className="contact-form">
            <div className="view-profile">
                <img
                    className="profilephoto"
                    src={person_picture.default}
                ></img>
                <div className="profile-text">
                    <p className="contactname">{person_data.seller.name}</p>
                    <p className="profile-link">View profile</p>
                </div>
            </div>
            <div className="form-container">
                <input
                    className="form"
                    id="firstname"
                    type="text"
                    placeholder=" First Name "
                />
                <input
                    className="form"
                    id="firstname"
                    type="text"
                    placeholder=" Phone "
                />
                <input
                    className="form"
                    id="firstname"
                    type="text"
                    placeholder=" Email "
                />
                <input
                    className="form"
                    id="firstname"
                    type="text"
                    placeholder=" Hello, I'm interested in "
                />
                {/* <label for="firstname" class="form-field__label">First name</label> */}
            </div>
            <div className="view-more">
                <button className="button-viewmore">
                    {" "}
                    View more <img className="arrow-c" src={arrow_right}></img>
                </button>
            </div>
        </div>
    );
};

export default ContactForm_Person;
