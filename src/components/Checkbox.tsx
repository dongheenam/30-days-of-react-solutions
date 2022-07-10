interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [otherProps: string]: any;
}

export default function Checkbox({
  className = `bg-transparent rounded-sm
    text-primary-500 dark:text-primary-300/high
    focus:outline-primary-500 dark:focus:outline-primary-300/high
    focus:ring-transparent focus:ring-offset-transparent`,
  disabled = false,
  onChange,
  ...otherProps
}: CheckboxProps) {
  const checkboxProps = {
    className: `checkbox${disabled ? " disabled" : ""} ${className}`,
    ...otherProps,
  };
  return (
    <input
      type="checkbox"
      onChange={onChange}
      disabled={disabled}
      {...checkboxProps}
    />
  );
}
