import katex from "katex";
import "katex/dist/katex.min.css";

interface KatexProps {
  children?: string;
  expr?: string;
}

export default function Katex({ children, expr, ...props }: KatexProps) {
  let input = children ? children : expr;
  if (!input) {
    return <></>;
  }
  input = input.replace("*", "\\times").replace("/", "\\div");
  const katexHTML = katex.renderToString(input);
  return <div dangerouslySetInnerHTML={{ __html: katexHTML }}></div>;
}
