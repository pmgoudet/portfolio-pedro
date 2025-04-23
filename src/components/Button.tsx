import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  const baseClasses =
    'px-6 py-3 font-medium rounded-md transition-colors duration-200';
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  if (variant === 'secondary') {
    return (
      <div className="inline-block p-[2px] rounded-md bg-gradient-primary">
        <div className="bg-white dark:bg-dark-color rounded-md lg:over:opacity-90">
          <button
            className={`w-full h-full bg-white rounded-md text-gradient-primary ${baseClasses} ${disabledClasses}`}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      className={`bg-gradient-primary text-white duration-300 hover:opacity-90 ${baseClasses} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
