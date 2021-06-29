import header_background from "../media/header_pic.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu_header.css";

const Menu_header = () => {
    return (
        <div
            className="header_h"
            style={{ "--img": `url(${header_background})` }}
        >
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        {/* <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img> */}
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white custom">
                            {" "}
                            Beautiful <br></br> homes made <br></br> for you{" "}
                        </h1>
                        <p className="lead text-white">
                            Quickly design and customize responsive mobile-first
                            sites with Bootstrap, the world’s most popular
                            front-end open source toolkit, featuring Sass
                            variables and mixins, responsive grid system,
                            extensive prebuilt components, and powerful
                            JavaScript plugins.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            {" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu_header;
