import './portfolioPageMain.css'
import MyBio from './mainMyBioSection/myBioComponent';
import AboutMe from './mainAboutMeSection/aboutMeComponent';
import MyInterests from './mainMyInterestsSection/myInterestsComponent';
import MySkills from './mainMySkillsSection/mySkillsComponent';

const Main = () => {
    return (
        <>
        <article id="myBio">
            <MyBio/>
        </article>

        <section id='aboutMe'>
            <AboutMe/>
        </section>

        <section id='skills'>
            <MySkills/>
        </section>

        <section id='interests'>
            <MyInterests/>
        </section>
        </>
    );
};

export default Main;