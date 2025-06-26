import myPhoto from '../../../../../assets/images/intro-photo.jpg'
import './myBioComponent.css'

const MyBio = () => {
    return (
        <>
            <div className="myBio__info">
                <h1 className="info__name">Даниил Мануйлов</h1>
                <h1 className="subtitle">Frontend developer</h1>
            </div>
            <div className="myBio__photo">
                <img src={myPhoto} alt="my photo" />
            </div>
        </>
    );
};

export default MyBio;