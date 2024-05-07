import './Header.scss';
import search from '../assets/icons/search.svg';
import logo from '../assets/images/BrainFlix-logo.svg';
import defaultImg from '../assets/images/Mohan-muruge.jpg';
import uploadImg from '../assets/icons/upload.svg';

function Header() {
    return (
        <>
            <section className="header__container">
                <img
                    src={logo}
                    alt="BrainFlix"
                    className="header__brainflix-logo"
                />
                <div className="header__navbar">
                    <div className="header__search-icon-pair">
                        <div className="header__search--container">
                            <input
                                type="text"
                                className="header__search--textbox"
                                defaultValue="Search"
                            />
                            <img
                                src={search}
                                className="header__search--icon "
                                alt="Search"
                            />
                        </div>
                        <img
                            src={defaultImg}
                            className="header__default-img header__default-img--mobile"
                            alt=""
                        />
                    </div>

                    <div className="header__upload--container">
                        <button className="header__upload--button">
                            UPLOAD
                        </button>
                        <img
                            src={uploadImg}
                            className="header__upload--icon"
                            alt=""
                        />
                    </div>

                    <img
                        src={defaultImg}
                        className="header__default-img header__default-img--tablet"
                        alt=""
                    />
                </div>
            </section>
        </>
    );
}

export default Header;
