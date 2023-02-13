import { Remarkable } from "remarkable";

const md = new Remarkable();

export default function Markdown({ markdown }) {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    />
  );
}
