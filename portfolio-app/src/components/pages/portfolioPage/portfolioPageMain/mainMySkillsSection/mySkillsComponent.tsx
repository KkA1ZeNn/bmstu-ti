import { useState } from 'react';
import ButtonGroup from '../../../../common/ButtonsGroupComponent/ButtonsGroupComponent';
import SkillBar from './skillBarComponent/skillBarComponent';
import './mySkillsComponent.css'
import htmlIcon from '../../../../../assets/images/skills/skill=html.svg'
import cssIcon from '../../../../../assets/images/skills/skill=css.svg'
import jsIcon from '../../../../../assets/images/skills/skill=javascript.svg'
import reactIcon from '../../../../../assets/images/skills/skill=react.svg'
import javaIcon from '../../../../../assets/images/skills/skill=java.svg'

interface Skill {
    name: string;
    grade: number;
    icon: string;
}

const initialSkills: Skill[] = [
    { name: 'HTML', grade: 90, icon: htmlIcon },
    { name: 'CSS', grade: 85, icon: cssIcon },
    { name: 'JavaScript', grade: 80, icon: jsIcon },
    { name: 'React', grade: 10, icon: reactIcon },
    { name: 'Angular', grade: 30, icon: javaIcon },
].sort((a, b) => a.name.localeCompare(b.name));

const MySkills = () => {
    const [skills, setSkills] = useState<Skill[]>(initialSkills);

    const sortByName = () => {
        const sorted = [...skills].sort((a, b) => a.name.localeCompare(b.name));
        setSkills(sorted);
    };

    const sortByGrade = () => {
        const sorted = [...skills].sort((a, b) => b.grade - a.grade);
        setSkills(sorted);
    };

    const mySkillsButtonsConfig = [
        {
            label: 'по названию',
            onClick: sortByName,
        },
        {
            label: 'по уровню',
            onClick: sortByGrade,
        }
    ];

    return (
        <>
            <div className='mySkills-header-wrapper'>
                <h3 className='mySkills__header'>Мои навыки</h3>
                <ButtonGroup 
                    customClassName='mySkills__buttons' 
                    groupLabel='Сортировать' 
                    buttonConfigs={mySkillsButtonsConfig} 
                />
            </div>
            <div className='mySkills-content-wrapper'>
                <dl className='skills-list'>
                    {skills.map((skill) => (
                        <SkillBar 
                            key={skill.name}
                            skillName={skill.name}
                            skillGrade={skill.grade}
                            skillIcon={skill.icon}
                        />
                    ))}
                </dl>
            </div>
        </>
    );
};

export default MySkills;