import './myContactsComponent.css'
import githubIcon from '../../../../../assets/images/social/social=github.svg'
import gitlabIcon from '../../../../../assets/images/social/social=gitlab.svg'
import instagramIcon from '../../../../../assets/images/social/social=instagram.svg'
import telegramIcon from '../../../../../assets/images/social/social=telegram.svg'
import phoneIcon from '../../../../../assets/images/contacts/icon=phone.svg'
import emailIcon from '../../../../../assets/images/contacts/icon=email.svg'

const MyContacts = () => {
    const socialLinks = [
        { icon: githubIcon, href: "https://github.com/your-github", label: "GitHub" },
        { icon: gitlabIcon, href: "https://gitlab.com/your-gitlab", label: "GitLab" },
        { icon: instagramIcon, href: "https://instagram.com/your-instagram", label: "Instagram" },
        { icon: telegramIcon, href: "https://t.me/your-telegram", label: "Telegram" }
    ];

    return (
        <div className="myContacts-wrapper">
            <h3 className="myContacts__header">Мои контакты</h3>
            
            <div className="myContacts__info">
                <div className="info__item">
                    <img src={phoneIcon} alt="phone" className="info__icon" />
                    <span className="info__text">+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="info__item">
                    <img src={emailIcon} alt="email" className="info__icon" />
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
                        <img src={social.icon} alt={social.label} className="social__icon" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MyContacts; 