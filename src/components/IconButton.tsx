import Button, { ButtonProps } from "./Button";

interface ButtonIconProps
  extends Omit<ButtonProps, "leftIcon" | "rightIcon" | "children"> {
  icon: React.ReactElement;
  "aria-label": string;
  [otherProps: string]: any;
}
export default function IconButton({
  icon,
  className = "p-2 px-2 font-semibold rounded-md border border-transparent",
  ...otherProps
}: ButtonIconProps) {
  return (
    <Button className={className} {...otherProps}>
      {icon}
    </Button>
  );
}
