import House_image_import from "components/Importers/House_image_import";
import Search_Panel from "components/SearchContainer/Search_Panel";

import "bootstrap/dist/css/bootstrap.min.css";
import "components/SearchContainer/search_container.css";

function Search_container() {
    var text_list = ["Country", "Type of house", "Floors", "Price"];
    return (
        <div className="container_section">
            <div className="row quarter border_clr_green">
                <div className="line-delimiter pos-1"></div>
                <div className="title_head"> Find your next place to live </div>
            </div>

            <div className=" row quarter border_clr_green">
                <Search_Panel param_objs={text_list} />
            </div>

            <div className="grid_house"></div>
            <div className=" row border_clr_green">
                <House_image_import />
            </div>
        </div>
    );
}

export default Search_container;
