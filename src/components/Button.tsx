import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'primary-sm' | 'secondary-sm';
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
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
            type={type}
            className={`w-full h-full bg-white rounded-md text-gradient-primary  ${baseClasses} ${disabledClasses}`}
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
      <div className="inline-block p-[2px] rounded-md bg-gradient-primary shadow-md">
        <div className="bg-white rounded-md lg:over:opacity-90 py-0">
          <button
            type={type}
            className={`w-full h-full bg-white text-sm rounded-md text-gradient-primary px-2  ${baseClasses} ${disabledClasses}`}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'secondary-sm') {
    return (
      <button
        type={type}
        className={`bg-gradient-primary text-white duration-300 px-4 py-1  hover:opacity-90 shadow-md text-sm ${baseClasses} ${disabledClasses}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      className={`bg-gradient-primary text-white duration-300 px-6 py-3 hover:opacity-90 flex items-center gap-2 ${baseClasses} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
