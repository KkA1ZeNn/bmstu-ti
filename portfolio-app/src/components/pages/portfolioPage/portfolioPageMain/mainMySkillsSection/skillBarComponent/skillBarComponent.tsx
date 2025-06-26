import './skillBarComponent.css'

// Определение интерфейса для пропсов компонента SkillBar
interface SkillBarProps {
    skillName: string;
    skillGrade: number;
}

// Функция для получения CSS класса иконки на основе имени навыка
const getIconClass = (skillName: string): string => {
    const iconMap: { [key: string]: string } = {
        'HTML': 'skill-name--html',
        'CSS': 'skill-name--css', 
        'JavaScript': 'skill-name--javascript',
        'React': 'skill-name--react',
        'Angular': 'skill-name--angular'
    };
    
    return iconMap[skillName] || 'skill-name';
};

// Компонент SkillBar
const SkillBar: React.FC<SkillBarProps> = ({ skillName, skillGrade }) => {
    const iconClass = getIconClass(skillName);
    
    return (
        <div className="skill-item">
            <dt className={`skill-name ${iconClass}`}>
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