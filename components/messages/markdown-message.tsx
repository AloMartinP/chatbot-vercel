import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';

interface MarkdownMessageProps {
    content: string;
}

const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ content }) => (
    <div>
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeSanitize]}
        >
            {content}
        </Markdown>
    </div>
);

export default MarkdownMessage;