import React from 'react';

interface ClassSelectProps {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
}

const ClassSelect: React.FC<ClassSelectProps> = ({ options, selectedOption, onSelect }) => {
    return (
        <div className="class-select">
            {options.map((option) => (
                <button
                    key={option}
                    className={selectedOption === option ? 'selected' : ''}
                    onClick={() => onSelect(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default ClassSelect;