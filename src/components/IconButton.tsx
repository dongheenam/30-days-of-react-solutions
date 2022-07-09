import Button, { ButtonProps } from "./Button";

interface ButtonIconProps
  extends Omit<ButtonProps, "leftIcon" | "rightIcon" | "children"> {
  icon: React.ReactElement;
  "aria-label": string;
  [otherProps: string]: any;
}
export default function IconButton({
  icon,
  className = "",
  ...otherProps
}: ButtonIconProps) {
  return (
    <Button className={`btn-icon ${className}`} {...otherProps}>
      {icon}
    </Button>
  );
}
