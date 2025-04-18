import './portfolioPageMain.css'
import myPhoto from '../../../../assets/intro-photo.jpg'

const Main = () => {
    return (
        <>
            <article className="myBio">
                <div className="myBio__info">
                    <h1 className="info__name">Даниил Мануйлов</h1>
                    <h2 className="info__work-position">Frontend developer</h2>
                </div>
                <div className="myBio__photo">
                    <img src={myPhoto} alt="my photo" />
                </div>
            </article>

            <section id='aboutMe'>
                <h3 className='aboutMe__header'>Пара слов обо мне</h3>
                <div className='aboutMe__text'>
                    <p>Привет ✌</p>
                    <p>
                        В данный момент я учусь в магистратуре МФ МГТУ им. Н. Э. Баумана
                        по направлению «Информатика и вычисли­тельная техника».
                    </p>     
                    <p>
                        В прошлом году защитил диплом бакалавра на тему «Разработка web-сайта
                        для работы с интерактивными картами зданий». Работа была высоко оценена комиссией.
                    </p>
                    <p>
                        С декабря 2024 работаю frontend разработчиком в компании "НВП Болид". Планирую получить здесь
                        необходимую квалификацию и опыт для дальнейшего продвижения по карьерной лестнице.
                    </p>
                </div>
            </section>

            <section id='skills'>
                
            </section>
        </>
    );
};

export default Main;