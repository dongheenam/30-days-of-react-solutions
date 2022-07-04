interface TagProps {
  children: string | React.ReactNode;
}
export default function Tag(props: TagProps) {
  return (
    <div className="px-2 py-1 rounded-lg bg-purple-700 text-white">
      {props.children}
    </div>
  );
}
