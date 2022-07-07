interface SolutionProps {
  children: string | React.ReactNode;
  className?: string;
  [otherProps: string]: any;
}

export default function Solution({
  children,
  className = "",
  ...otherProps
}: SolutionProps) {
  const solutionProps = {
    className: `my-8 p-8 flex flex-col gap-4 items-center
      rounded-md drop-shadow dark:drop-shadow-none
      bg-white dark:bg-slate-800 ${className}`,
  };
  return <div {...solutionProps}>{children}</div>;
}
