import Irama from "../asset/img/irama.png"
import Imageheader from "../asset/img/bg.png"

function header() {
    return(
        <header>
            <div className="headerleft">
                <div className="headerleft-top">
                    <h1>TODAY</h1>
                    <img src={Irama} className="irama"></img>
                </div>
                <div className="headerleft-bottom"><h2>PODCAST</h2></div>
                <p>Enjoy the experience of listening to music with a trusted platform</p>
            </div>
            <div className="headerright">
                <img src={Imageheader} className="imageheader"></img>
            </div>
        </header>
    );
}
export default header;