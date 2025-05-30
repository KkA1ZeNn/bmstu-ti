import './myContactsComponent.css'
import { FaGithub, FaGitlab, FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'

const MyContacts = () => {
    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/your-github", label: "GitHub" },
        { icon: FaGitlab, href: "https://gitlab.com/your-gitlab", label: "GitLab" },
        { icon: FaInstagram, href: "https://instagram.com/your-instagram", label: "Instagram" },
        { icon: FaTelegram, href: "https://t.me/your-telegram", label: "Telegram" },
        { icon: FaVk, href: "https://vk.com/your-vk", label: "VK" }
    ];

    return (
        <div className="myContacts-wrapper">
            <h3 className="myContacts__header">Мои контакты</h3>
            
            <div className="myContacts__info">
                <div className="info__item">
                    <MdPhone className="info__icon" />
                    <span className="info__text">+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="info__item">
                    <MdEmail className="info__icon" />
                    <span className="info__text">your.email@example.com</span>
                </div>
            </div>

            <div className="myContacts__social">
                {socialLinks.map((social, index) => (
                    <a 
                        key={index}
                        href={social.href}
                        className="social__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                    >
                        <social.icon className="social__icon" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MyContacts; 