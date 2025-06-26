import { useState } from "react";
import NavLinks, { Link } from "../../../common/navBarComponent/navBarComponent";
import main_logo from '../../../../assets/images/main-logo.svg';
import burger_icon from '../../../../assets/images/Property 1=burger.svg';
import vector_icon from '../../../../assets/images/Vector.svg';
import './portfolioPageHeader.css'

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const headerLinks: Link[] = [
        { href: "#aboutMe", text: "Обо мне" },
        { href: "#skills", text: "Навыки" },
        { href: "#interests", text: "Интересы" },
        { href: "#contacts", text: "Контакты" }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="header-top">
                <div className="logo-wrapper">
                    <a href="#"><img src={main_logo} alt="main page logo" /></a>
                </div>
                <button 
                    className="mobile-menu-toggle" 
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
                >
                    <img 
                        src={isMobileMenuOpen ? vector_icon : burger_icon} 
                        alt={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"} 
                    />
                </button>
                <nav className="nav-wrapper nav-wrapper--desktop">
                    <NavLinks links={headerLinks} customClassName="main-nav"/>
                </nav>
            </div>
            <nav className={`nav-wrapper nav-wrapper--mobile ${isMobileMenuOpen ? 'nav-wrapper--mobile-open' : ''}`}>
                <NavLinks links={headerLinks} customClassName="main-nav main-nav--mobile"/>
            </nav>
        </>
    );
};

export default Header;