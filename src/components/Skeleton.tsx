import { range } from "../utils";

interface SkeletonProps {
  text?: boolean;
  lines?: number;
}

export default function Skeleton({ text, lines }: SkeletonProps) {
  const commonClass = `bg-gray-200 dark:bg-gray-700 
    rounded opacity-md animate-pulse`;
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
  return <div className={`h-full w-full ${commonClass}`}></div>;
}
