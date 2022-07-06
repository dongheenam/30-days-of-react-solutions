interface CheckboxProps {
  children: string | React.ReactNode;
  id: string;
  className?: string;
  inputClass?: string;
  labelClass?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  [otherProps: string]: any;
}

export default function Checkbox(props: CheckboxProps) {
  const {
    children,
    id,
    className = "",
    inputClass = "",
    labelClass = "",
    checked,
    onChange,
    ...otherProps
  } = props;
  return (
    <div
      key={id}
      className={`debug py-1 px-2 flex gap-4
      text-lg hover:text-slate-700 dark:hover:text-slate-300 ${className}`}
      {...otherProps}
    >
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        className={`${inputClass}`}
      />
      <label htmlFor={id} className={`cursor-pointer ${labelClass}`}>
        {children}
      </label>
    </div>
  );
}
