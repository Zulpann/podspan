import Card1 from "../asset/img/bg-card1.png";
import Card2 from "../asset/img/bg-card2.png";
import Card3 from "../asset/img/bg-card3.png";
import Card4 from "../asset/img/bg-card4.png";
import Card5 from "../asset/img/bg-card5.png";
import Card6 from "../asset/img/bg-card6.png";
import Card7 from "../asset/img/bg-card7.png";
import Card8 from "../asset/img/bg-card8.png";

function Categories() {
    return(
        <div className="body-categories">
        <div className="container-categories">
            <div className="categories">
                <h2>CATEGORIES</h2>
                <div className="list-cstegories">
                    <div className="card-categories">
                        <img src={Card1}></img>
                        <p>Seni</p>
                    </div>
                    <div className="card-categories">
                        <img src={Card2}></img>
                        <p>E-Sport</p>
                    </div>
                    <div className="card-categories">
                        <img src={Card3}></img>
                        <p>Berita</p>
                    </div>
                    <div className="card-categories">
                        <img src={Card4}></img>
                        <p>Barat</p>
                    </div>
                </div>
                <div className="list-cstegories">
                    <div className="card-categories">
                        <img src={Card5}></img>
                        <p>Photogafy</p>
                    </div>
                    <div className="card-categories">
                        <img src={Card6}></img>
                        <p>Sport</p>
                    </div>
                    <div className="card-categories">
                        <img src={Card7}></img>
                        <p>TradingCard</p>
                    </div>
                    <div className="card-categories">
                        <img src={Card8}></img>
                        <p>Utility</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};
export default Categories;