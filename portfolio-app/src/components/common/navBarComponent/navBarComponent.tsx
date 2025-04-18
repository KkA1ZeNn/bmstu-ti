import './navBarComponent.css'

export interface Link {
    href: string;
    text: string;
}

interface NavLinksProps {
    links: Link[];
    customClassName?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, customClassName }) => {
    return (
        <ul className={`nav-links ${customClassName}`}>
            {links.map((link, index) => (
                <li className="nav-links__link" key={index}><a href={link.href}>{link.text}</a></li>
            ))}
        </ul>
    );
};

export default NavLinks