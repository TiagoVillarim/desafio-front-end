import { useMarkdown } from "@site/src/ContextAPI/contextApi";
import ReactMarkdown from "react-markdown";
import MarkdownEditor from "../MarkdownEditor/editMarkdown";

export default function FetchDataContent({ url, fileKey }) {
  const { content, setContent } = useMarkdown();

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
      <MarkdownEditor
        content={content}
        setContent={setContent}
        fileKey={fileKey}
      />
    </div>
  );
}
