import ButtonGroup from '../../../../common/ButtonsGroupComponent/ButtonsGroupComponent';
import SkillBar from './skillBarComponent/skillBarComponent';
import './mySkillsComponent.css'

const mySkillsButtonsConfig = [
    {
        label: 'по названию',
        onClick: () => alert('отсортировал по названию'),
    },
    {
        label: 'по уровню',
        onClick: () => alert('отсортировал по уровню'),
    }
];

const MySkills = () => {
    return (
        <>
            <div className='mySkills-header-wrapper'>
                <h3 className='mySkills__header'>Мои навыки</h3>
                <ButtonGroup customClassName='mySkills__buttons' groupLabel='Сортировать' buttonConfigs={mySkillsButtonsConfig} />
            </div>
            <div className='mySkills-content-wrapper'>
                
            </div>
        </>
    );
};

export default MySkills;