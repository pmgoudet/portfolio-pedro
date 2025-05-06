import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'primary-sm';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}) => {

  const baseClasses =
    'font-medium rounded-md transition-colors duration-200';
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  if (variant === 'secondary') {
    return (
      <div className="inline-block p-[2px] rounded-md bg-gradient-primary ">
        <div className="bg-white dark:bg-dark-color rounded-md px-6 py-3  lg:over:opacity-90">
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

  if (variant === 'primary-sm') {
    return (
      <div className="inline-block p-[2px] rounded-md bg-gradient-primary ">
        <div className="bg-white dark:bg-dark-color rounded-md lg:over:opacity-90 py-2">
          <button
            className={`w-full h-full bg-white rounded-md text-gradient-primary px-4 ${baseClasses} ${disabledClasses}`}
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
      className={`bg-gradient-primary text-white duration-300 px-6 py-3  hover:opacity-90 ${baseClasses} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
