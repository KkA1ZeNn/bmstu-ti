import './skillBarComponent.css'

// Определение интерфейса для пропсов компонента ButtonGroup
interface SkillBarProps {
    customClassName?: string;
    skillName:string;
    skillIconPath?: string;
    skillGrade: number;
}

// Компонент SkillBar
const SkillBar: React.FC<SkillBarProps> = ({ customClassName, skillName, skillIconPath, skillGrade }) => {
    return (
        
    );
};

export default SkillBar;