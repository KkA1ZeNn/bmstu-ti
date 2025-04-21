import myPhoto from '../../../../../assets/images/intro-photo.jpg'
import './myBioComponent.css'

const MyBio = () => {
    return (
        <>
            <div className="myBio__info">
                <h1 className="info__name">Даниил Мануйлов</h1>
                <h2 className="info__work-position">Frontend developer</h2>
            </div>
            <div className="myBio__photo">
                <img src={myPhoto} alt="my photo" />
            </div>
        </>
    );
};

export default MyBio;