import { useNavigate, To } from "react-router-dom";

interface ButtonProps {
  text: String;
  to: To;
}
export default function DayButton({ text, to }: ButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      className="my-2 px-4 py-2 shadow-md
            border-2 border-slate-900 rounded bg-slate-100 hover:bg-slate-200
            text-lg font-semibold
            transition-colors"
      onClick={() => navigate(to)}
    >
      {text}
    </button>
  );
}
