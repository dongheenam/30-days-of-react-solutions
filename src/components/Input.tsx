interface InputProps {
  className?: string;
  id: string;
  [otherProps: string]: any;
}

export default function Input({
  className = "",
  id,
  ...otherProps
}: InputProps) {
  const inputProps = {
    className: `px-4 py-2 w-full bg-transparent rounded outline-2
    outline-slate-300 dark:outline-slate-500
    focus:outline-pink-500 dark:focus:outline-pink-300
     ${className}`,
    id: id,
    ...otherProps,
  };
  return <input {...inputProps} />;
}
