import NavLinks, { Link } from "../../../common/navBarComponent/navBarComponent";
import main_logo from '../../../../assets/main-logo.svg';

const Header: React.FC = () => {
    const headerLinks: Link[] = [
        { href: "#aboutMe", text: "Обо мне" },
        { href: "#skills", text: "Навыки" },
        { href: "#interests", text: "Интересы" },
        { href: "#contacts", text: "Контакты" }
    ];

    return (
        <header className="header">
            <div className="logo-wrapper">
                <a href="#"><img src={main_logo} alt="" /></a>
            </div>
            <nav>
                <NavLinks links={headerLinks} />
            </nav>
        </header>
    );
};

export default Header;