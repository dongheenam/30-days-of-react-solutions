interface TagProps {
  children: string | React.ReactElement;
  key?: string;
  className?: string;
  [otherProps: string]: any;
}
export default function Tag({
  children,
  key,
  className,
  ...otherProps
}: TagProps) {
  const tagProps = {
    key: key,
    className: `px-2 text-sm rounded ${className}`,
    ...otherProps,
  };
  return <div {...tagProps}>{children}</div>;
}
