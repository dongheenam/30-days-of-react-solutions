import { Value } from "./CheckboxGroup";

interface SwitchProps {
  className?: string;
  id?: string;
  value?: Value;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [otherProps: string]: any;
}

export default function Switch({
  className = "",
  id,
  value,
  disabled = false,
  checked,
  onChange,
  ...otherProps
}: SwitchProps) {
  const switchProps = {
    className: `${disabled ? " disabled" : ""} ${className}`,
    id: id,
    disabled: disabled,
    checked: checked,
    onChange: onChange,
    value: value,
  };
  return (
    <div className={`switch ${className}`} {...otherProps}>
      <input type="checkbox" {...switchProps} />
      <div className="s-slider" />
      <div className="s-thumb" />
    </div>
  );
}
