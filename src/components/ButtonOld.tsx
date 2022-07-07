interface ButtonProps {
  children: string | React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [otherProps: string]: any;
}

export default function Button({
  children,
  className = "",
  onClick,
  ...otherProps
}: ButtonProps) {
  const classes: string = `
    my-2 px-4 py-2 shadow-md
    border-2 border-slate-900 rounded bg-slate-100 hover:bg-slate-200
    dark:border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700
    text-lg font-semibold
    transition-colors
    ${className}
  `;

  return (
    <button className={classes} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
}
