import './myInterestsComponent.css'

const MyInterests = () => {
    return (
        <>
            <h2 className='myIntests__header'>Мои интересы</h2>
            <div className='myIntests__text'>
                <p>
                    Наибольший интерес для меня в данный момент представляет
                    программирование и изучение веб технологий.
                </p>     
                <p>
                    Но помимо учёбы и работы я также люблю играть в волейбол,
                    играть в компьютерные игры, путешествовать по разным странам и городам России,
                    кататься на лыжах, проводить время с друзьями.
                </p>
            </div>
        </>
    );
};

export default MyInterests;