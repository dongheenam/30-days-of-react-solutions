interface HeadingProps {
  children: string | React.ReactNode;
  className?: string;
  [otherProps: string]: any;
}

export function H1({ children, className, ...otherProps }: HeadingProps) {
  const h1Props = {
    className: `text-4xl font-bold mb-16 ${className}`,
    ...otherProps,
  };
  return <h1 {...h1Props}>{children}</h1>;
}
export function H2({ children, className, ...otherProps }: HeadingProps) {
  const h2Props = {
    className: `text-3xl font-bold mt-12 mb-6 ${className}`,
    ...otherProps,
  };
  return <h2 {...h2Props}>{children}</h2>;
}
export function H3({ children, className, ...otherProps }: HeadingProps) {
  const h3Props = {
    className: `text-2xl font-bold mt-8 mb-4 ${className}`,
    ...otherProps,
  };
  return <h3 {...h3Props}>{children}</h3>;
}
