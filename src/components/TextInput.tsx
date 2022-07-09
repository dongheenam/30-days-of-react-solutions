interface InputProps {
  className?: string;
  type?: "text" | "password" | "email" | "search" | "tel" | "url" | "number";
  [otherProps: string]: any;
}

export default function TextInput({
  className = "",
  type = "text",
  ...otherProps
}: InputProps) {
  const inputProps = {
    className: `input ${className}`,
    ...otherProps,
  };
  return <input type={type} {...inputProps} />;
}
