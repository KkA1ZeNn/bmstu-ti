import './myContactsComponent.css'

const MyContacts = () => {
    const socialLinks = [
        { iconClass: "social__icon--github", href: "https://github.com/your-github", label: "GitHub" },
        { iconClass: "social__icon--gitlab", href: "https://gitlab.com/your-gitlab", label: "GitLab" },
        { iconClass: "social__icon--instagram", href: "https://instagram.com/your-instagram", label: "Instagram" },
        { iconClass: "social__icon--telegram", href: "https://t.me/your-telegram", label: "Telegram" },
        { iconClass: "social__icon--vk", href: "https://vk.com/your-vk", label: "ВКонтакте" }
    ];

    return (
        <div className="myContacts-wrapper">
            <h2 className="myContacts__header">Мои контакты</h2>
            
            <ul className="myContacts__info">
                <li>
                    <a href="tel:+7XXXXXXXXXX" className="info__item info__item--phone">
                        +7 (XXX) XXX-XX-XX
                    </a>
                </li>
                <li>
                    <a href="mailto:your.email@example.com" className="info__item info__item--email">
                        your.email@example.com
                    </a>
                </li>
            </ul>

            <ul className="myContacts__social">
                {socialLinks.map((social, index) => (
                    <li key={index}>
                        <a 
                            href={social.href}
                            className="social__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                        >
                            <div 
                                className={`social__icon ${social.iconClass}`}
                                aria-label={social.label}
                            ></div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyContacts; 