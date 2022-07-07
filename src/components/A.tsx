interface AProps {
  children: string | React.ReactNode;
  href: string;
  blank?: boolean;
  className?: string;
  [otherProps: string]: any;
}

export default function A({
  children,
  href,
  blank = false,
  className = "",
  ...otherProps
}: AProps) {
  const aProps = {
    href: href,
    target: blank ? "_blank" : "",
    className: `text-pink-600 dark:text-pink-400 hover:underline ${className}`,
    ...otherProps,
  };
  return <a {...aProps}>{children}</a>;
}
