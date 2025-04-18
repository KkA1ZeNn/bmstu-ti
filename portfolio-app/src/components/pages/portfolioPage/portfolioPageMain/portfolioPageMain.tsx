import './portfolioPageMain.css'
import myPhoto from '../../../../assets/intro-photo.jpg'

const Main = () => {
    return (
        <>
            <article className="myBio">
                <div className="myBio__info">
                    <p className="info__name">Даниил Мануйлов</p>
                    <p className="info__work-position">Frontend developer</p>
                </div>
                <div className="myBio__photo">
                    <img src={myPhoto} alt="my photo" />
                </div>
            </article>
        </>
    );
};

export default Main;