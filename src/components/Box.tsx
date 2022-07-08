interface SolutionProps {
  children: string | React.ReactNode;
  className?: string;
  [otherProps: string]: any;
}

export default function Box({
  children,
  className = "",
  ...otherProps
}: SolutionProps) {
  const solutionProps = {
    className: `my-8 p-8 flex flex-col gap-4
      rounded-md drop-shadow dark:drop-shadow-none
      bg-gray-50 dark:bg-gray-850 ${className}`,
  };
  return <div {...solutionProps}>{children}</div>;
}
