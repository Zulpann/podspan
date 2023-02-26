import card1 from "../asset/img/Ellipse1.png"
import card2 from "../asset/img/Ellipse2.png"
import card3 from "../asset/img/Ellipse3.png"
import card4 from "../asset/img/Ellipse4.png"
import card5 from "../asset/img/Ellipse5.png"
import card6 from "../asset/img/Ellipse6.png"
import card7 from "../asset/img/Ellipse7.png"
import card8 from "../asset/img/Ellipse8.png"

function Popular() {
    return (
        <div className="bodypopular">
        <div className="container-popular">
            <h2>TOP PODCAST</h2>
            <div className="list-wraper">
                <div className="card">
                    <img src={card1} className="card-img"></img>
                    <p>RizKhen</p>
                </div>
                <div className="card">
                    <img src={card2} className="card-img"></img>
                    <p>Pokko</p>
                </div>
                <div className="card">
                    <img src={card3} className="card-img"></img>
                    <p>Wetur</p>
                </div>
                <div className="card">
                    <img src={card4} className="card-img"></img>
                    <p>Abdliie</p>
                </div>
                <div className="card">
                    <img src={card5} className="card-img"></img>
                    <p>Berhans</p>
                </div>
                <div className="card">
                    <img src={card6} className="card-img"></img>
                    <p>Hags</p>
                </div>
                <div className="card">
                    <img src={card7} className="card-img"></img>
                    <p>Fukiep</p>
                </div>
                <div className="card">
                    <img src={card8} className="card-img"></img>
                    <p>Jhiehe</p>
                </div>
            </div>
        </div>
        </div>
    )
};
export default Popular;