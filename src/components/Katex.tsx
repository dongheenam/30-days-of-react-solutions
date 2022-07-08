import React from "react";

import katex from "katex";
import "katex/dist/katex.min.css";

import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

interface KatexProps {
  children?: string;
  expr?: string;
  [otherProps: string]: any;
}
export default function Katex({ children, expr, ...otherProps }: KatexProps) {
  let input = children ? children : expr;
  if (!input) {
    return <></>;
  }
  // use proper mult and div symbols
  input = input.replace("*", "\\times").replace("/", "\\div");

  // render the input, the result is a string containing HTML
  const katexHTML = katex.renderToString(input);

  // use unified and rehype to transform the HTML to a react component
  // https://spacejelly.dev/posts/how-to-add-a-dynamic-table-of-contents-to-static-html-in-react-with-rehype/
  const parseHTML = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      createElement: React.createElement,
      Fragment: React.Fragment,
    });
  return <span {...otherProps}>{parseHTML.processSync(katexHTML).result}</span>;
}
