import NavLinks, { Link } from "../../../common/navBarComponent/navBarComponent";
import main_logo from '../../../../assets/images/main-logo.svg';
import './portfolioPageHeader.css'

const Header: React.FC = () => {
    const headerLinks: Link[] = [
        { href: "#aboutMe", text: "Обо мне" },
        { href: "#skills", text: "Навыки" },
        { href: "#interests", text: "Интересы" },
        { href: "#contacts", text: "Контакты" }
    ];

    return (
        <>
            <div className="logo-wrapper">
                <a href="#"><img src={main_logo} alt="main page logo" /></a>
            </div>
            <nav className="nav-wrapper">
                <NavLinks links={headerLinks} customClassName="main-nav"/>
            </nav>
        </>
    );
};

export default Header;