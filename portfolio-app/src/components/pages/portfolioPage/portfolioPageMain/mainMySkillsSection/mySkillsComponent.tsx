import { useState } from 'react';
import ButtonGroup from '../../../../common/ButtonsGroupComponent/ButtonsGroupComponent';
import SkillBar from './skillBarComponent/skillBarComponent';
import './mySkillsComponent.css'

interface Skill {
    name: string;
    grade: number;
}

const initialSkills: Skill[] = [
    { name: 'HTML', grade: 90 },
    { name: 'CSS', grade: 85 },
    { name: 'JavaScript', grade: 80 },
    { name: 'React', grade: 75 },
    { name: 'Angular', grade: 70 },
];

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
                        />
                    ))}
                </dl>
            </div>
        </>
    );
};

export default MySkills;