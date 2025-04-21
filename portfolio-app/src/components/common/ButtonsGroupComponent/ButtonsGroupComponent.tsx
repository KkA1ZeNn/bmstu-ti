import './ButtonsGroupComponent.css'

// Определение интерфейса для конфигурации каждой кнопки
interface ButtonConfig {
    label: string;
    onClick: () => void;
}

// Определение интерфейса для пропсов компонента ButtonGroup
interface ButtonGroupProps {
    customClassName?: string;
    groupLabel?: string;
    buttonConfigs: ButtonConfig[];
}

// Компонент ButtonGroup
const ButtonGroup: React.FC<ButtonGroupProps> = ({ customClassName, groupLabel, buttonConfigs }) => {
    return (
        <div className={`${customClassName} buttons-group-wrapper`}>
            <p className='buttons-group__label'> {groupLabel} </p>
            {buttonConfigs.map((config, index) => (
                <button className='buttons-group__button' key={index} onClick={config.onClick}>
                    {config.label}
                </button>
            ))}
        </div>
    );
};

export default ButtonGroup;