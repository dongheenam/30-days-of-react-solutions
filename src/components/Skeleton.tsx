import { range } from "../utils";

interface SkeletonProps {
  text?: boolean;
  lines?: number;
  className?: string;
}

export default function Skeleton({ text, lines, className }: SkeletonProps) {
  const commonClass = `bg-gray-200 dark:bg-gray-700 
    rounded opacity-md animate-pulse ${className}`;
  if (text) {
    const nLines = lines ? lines : 1;
    let gap: undefined | string, height: string;
    if (nLines === 1) {
      height = "h-[1.45em]";
    } else {
      gap = "gap-[0.5em]";
      height = "h-[1em]";
    }
    return (
      <div className={`flex flex-col ${gap}`}>
        {range(nLines).map((num) => (
          <span
            key={`skel-row-${num}`}
            className={`${height} w-full ${commonClass}`}
          />
        ))}
      </div>
    );
  }
  return <div className={`w-full h-full ${commonClass}`}></div>;
}
