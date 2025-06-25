import './skillBarComponent.css'

// Определение интерфейса для пропсов компонента SkillBar
interface SkillBarProps {
    skillName: string;
    skillGrade: number;
    skillIcon: string;
}

// Компонент SkillBar
const SkillBar: React.FC<SkillBarProps> = ({ skillName, skillGrade, skillIcon }) => {
    return (
        <div className="skill-item">
            <dt className="skill-name">
                <img src={skillIcon} alt={skillName} className="skill-icon" />
                {skillName}
            </dt>
            <dd className="skill-progress">
                <div 
                    className="progress-bar" 
                    style={{ width: `${skillGrade}%` }}
                >
                </div>
            </dd>
        </div>
    );
};

export default SkillBar;