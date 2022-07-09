interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [otherProps: string]: any;
}

export default function Checkbox({
  className = "",
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
