import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import swal from 'sweetalert'
import { MdOutlineCopyAll } from "react-icons/md";

const Copy = ({props}) => {
  return (
    <div className="flex bg-custom-blue">
      <CopyToClipboard text={String("").replace(/\n$/, '')} className="justify-end -px-2 textinput">
        <button><MdOutlineCopyAll className="hover:bg-white" /></button>
      </CopyToClipboard>
    </div>
  );

}
const Highlighter = ({ node, inline, className, children, ...props }) => {

  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <div className="relative">
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={dracula}
        language={match[1]}
        {...props}
      />

    <div className="absolute right-0 top-0 z-2">
      <CopyToClipboard text={String("").replace(/\n$/, '')} className="justify-end -px-2 textinput">
        <button><MdOutlineCopyAll className="hover:bg-white" /></button>
      </CopyToClipboard>
    </div>
    </div>

  ) : (
    <code className={className} {...props}>
        {children}
    </code>
  )
}

export default Highlighter;