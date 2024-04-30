import './Header.scss';

function Header() {
    return (
        <>
            <h1>BrainFlix</h1>
            <div id="input_container">
                <input type="text" id="input" value />
                <img src="../assets/icons/search.svg" id="input_img" />
            </div>

            <img src="../assets/icons/search.svg" id="input_img" alt="SEARCH" />
        </>
    );
}

export default Header;
