import details_img from '../media/details_image.png';
import click_arrow from '../media/arrow.png';

function Details_component()
{
    return(
            <div className="component_background">
                <div className="div1" style= {{"--details_img":  `url(${details_img})`}}>
                </div>
                
                <div className="div2"> 
                    <div className="detail-line-delimiter"> </div>
                    <h1 className="title_h1">You're in good hands</h1>
                    <h2 className="text_h2"> Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</h2>
                
                    <button className="button_atr"> CLICK HERE <div className="clickarrow" style = {{"--click_arrow":  `url(${click_arrow})`}} ></div>  </button>
                
                </div>

            </div>
            
    );
}

export default Details_component;