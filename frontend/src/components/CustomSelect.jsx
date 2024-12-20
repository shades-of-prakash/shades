import React, { useState } from "react";
import "../styles/CustomSelect.css";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

const CustomSelect = ({ options, onChange, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const defaultOption = options[0];
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    return (
        <div className={`custom-select`}>
            <div
                className="custom-select-trigger"
                onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedOption.label}</span>
                {isOpen ? (
                    <ArrowUp2 size="20" color={theme ? "white" : "black"} />
                ) : (
                    <ArrowDown2 size="20" color={theme ? "white" : "black"} />
                )}
            </div>
            {isOpen && (
                <div className="custom-options">
                    {options
                        .slice(1) // Skip the first option
                        .map((option) => (
                            <div
                                key={option.value}
                                className="custom-option"
                                onClick={() => handleOptionClick(option)}>
                                {option.label}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
