import "bootstrap/dist/css/bootstrap.min.css";
import "../EndPart/End_Part.css";
import Push_Button from "../PushButton/Push_Button";
const End_Part = () => {
    return (
        <div className="container-fluid black_section">
            <div className="row p-5">
                <div className="line_design mx-auto "></div>
            </div>

            <div className="row p-5">
                <div className="white_text mx-auto">You're in good hands</div>
            </div>

            <div className="row p-2">
                <div className="descriptive mx-auto">
                    {" "}
                    Torquatos nostros? quos dolores eos, qui dolorem ipsum per
                    se texit, ne ferae quidem se repellere, idque instituit
                    docere sic: omne animal, simul atque integre iudicante
                    itaque aiunt hanc quasi involuta aperiri, altera occulta
                    quaedam et voluptatem accusantium doloremque.
                </div>
            </div>
            <div className="row p-2">
                {" "}
                <Push_Button classNameParams="mx-auto" text="Learn More" />
            </div>
        </div>
    );
};

export default End_Part;
