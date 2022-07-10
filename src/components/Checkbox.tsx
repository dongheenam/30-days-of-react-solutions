interface CheckboxProps {
  className?: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [otherProps: string]: any;
}

export default function Checkbox({
  className = "",
  id,
  disabled = false,
  checked,
  onChange,
  ...otherProps
}: CheckboxProps) {
  const checkboxProps = {
    className: `checkbox${disabled ? " disabled" : ""} ${className}`,
    id: id,
    disabled: disabled,
    checked: checked,
    onChange: onChange,
    ...otherProps,
  };
  return <input type="checkbox" {...checkboxProps} />;
}
