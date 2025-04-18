export interface Link {
    href: string;
    text: string;
}

interface NavLinksProps {
    links: Link[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
    return (
        <ul className="nav-links">
            {links.map((link, index) => (
                <li className="nav-links__link" key={index}><a href={link.href}>{link.text}</a></li>
            ))}
        </ul>
    );
};

export default NavLinks