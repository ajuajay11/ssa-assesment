import React from 'react';
import './Button.css';

const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    disabled = false,
    showIcon = true,
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            className={`custom-button ${variant} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            <span className="button-text">{children}</span>
            {showIcon && (
                <span className="button-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            )}
        </button>
    );
};

export default Button;
