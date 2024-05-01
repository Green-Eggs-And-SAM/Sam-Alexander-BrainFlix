import './Header.scss';
import search from '../assets/icons/search.svg';
import logo from '../assets/images/BrainFlix-logo.svg';

function Header() {
    return (
        <>
            <section className="header__container">
                <img src={logo} />
                <div id="input__container">
                    <input type="text" id="input__textbox" />
                    <img src={search} id="input__img" />
                </div>
            </section>
        </>
    );
}

export default Header;
