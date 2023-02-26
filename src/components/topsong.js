import Card1 from "../asset/img/bg-card1.png";
import Card2 from "../asset/img/bg-card2.png";
import Card3 from "../asset/img/bg-card3.png";
import Card4 from "../asset/img/bg-card4.png";

function Topsong() {
    return(
        <div className="body-topsong">
            <div className="container-topsong">
            <div className="nav-topsong">
                <h2>Top Song Barat</h2>
                <a href="#">See All</a>
            </div>
                <div className="list-topsong">
                    <div className="card-topsong">
                        <img src={Card1} className="img-topsong" ></img>
                        <p className="paraf-topsong" >Seni</p>
                    </div>
                    <div className="card-topsong">
                        <img src={Card2} className="img-topsong" ></img>
                        <p className="paraf-topsong" >E-Sport</p>
                    </div>
                    <div className="card-topsong">
                        <img src={Card3} className="img-topsong" ></img>
                        <p className="paraf-topsong" >Berita</p>
                    </div>
                    <div className="card-topsong">
                        <img src={Card4} className="img-topsong" ></img>
                        <p className="paraf-topsong" >Barat</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Topsong;