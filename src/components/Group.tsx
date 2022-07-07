interface GroupProps {
  children: React.ReactNode;
  className?: string;
  [otherProps: string]: any;
}

export default function Group({
  children,
  className = "",
  ...otherProps
}: GroupProps) {
  const groupProps = {
    className: `flex gap-4 ${className}`,
    ...otherProps,
  };
  return <div {...groupProps}>{children}</div>;
}
