import './skillBarComponent.css'

// Определение интерфейса для пропсов компонента ButtonGroup
interface SkillBarProps {
    skillName: string;
    skillGrade: number;
}

// Компонент SkillBar
const SkillBar: React.FC<SkillBarProps> = ({ skillName, skillGrade }) => {
    return (
        <div className="skill-item">
            <dt className="skill-name">{skillName}</dt>
            <dd className="skill-progress">
                <div 
                    className="progress-bar" 
                    style={{ width: `${skillGrade}%` }}
                >
                    {skillGrade}%
                </div>
            </dd>
        </div>
    );
};

export default SkillBar;