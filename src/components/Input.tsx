interface InputProps {
  className?: string;
  type: string;
  id: string;
  [otherProps: string]: any;
}

export default function Input({
  className = "",
  type,
  id,
  ...otherProps
}: InputProps) {
  const inputProps = {
    className: `w-full bg-gray-100 dark:bg-gray-700
      border-gray-900 rounded-md
      opacity-md hover:opacity-high focus:ring-primary-500
     ${className}`,
    id: id,
    ...otherProps,
  };
  return <input type={type} {...inputProps} />;
}
