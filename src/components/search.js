import Profile from "../asset/img/user.png"
import IconSearch from "../asset/img/searchbig.png"

function search() {
    return(
        <div className="search-container">
            <div className="wrapersearch">
                <div className="wraper-search-left">
                    <p>Popular</p>
                    <div>
                        <img src={Profile} className="satu"></img>
                        <img src={Profile} className="dua"></img>
                        <img src={Profile} className="tiga"></img>
                    </div>
                </div>
                <div className="wraper-search-middle">
                    <div className="seacrh-engine">
                        <img src={IconSearch} className="image-search"></img>
                        <div className="int"><input placeholder="search"></input></div>
                    </div>
                </div>
                <div className="wraper-search-right">
                    <div className="image-phone"></div>
                </div>
            </div>
        </div>
    );
};

export default search;