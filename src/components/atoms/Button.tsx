interface ButtonProps {
  text?: string;
  onClick?: () => void;
  ariaLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  ariaLabel,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="gap-2.5 self-center py-3 mt-8 w-60 max-w-full text-sm tracking-widest leading-tight bg-white text-neutral-800 z-10"
    >
      {text || children}
    </button>
  );
};

export default Button;
