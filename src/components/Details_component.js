import "bootstrap/dist/css/bootstrap.min.css";
import "./details_component.css";
import details_img from "../media/details_image.png";
import click_arrow from "../media/arrow.png";
import header_background from "../media/header_pic.png";

const Details_component = () => {
    return (
        <div className="details_background">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <div className="detail-line-delimiter"></div>
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-black custom-dim">
                            {" "}
                            You're in good hands{" "}
                        </h1>
                        <p className="lead text-black">
                            Quickly design and customize responsive mobile-first
                            sites with Bootstrap, the world’s most popular
                            front-end open source toolkit, featuring Sass
                            variables and mixins, responsive grid system,
                            extensive prebuilt components, and powerful
                            JavaScript plugins.
                        </p>
                        <button className="button_atr">
                            {" "}
                            CLICK HERE{" "}
                            <div
                                className="clickarrow"
                                style={{
                                    "--click_arrow": `url(${click_arrow})`,
                                }}
                            ></div>{" "}
                        </button>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            {" "}
                        </div>
                    </div>

                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src={details_img}
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width="700"
                            height="500"
                            loading="lazy"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details_component;
