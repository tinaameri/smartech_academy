import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import React from 'react';

export default function Markdown({ text }) {
  return (
    <ReactMarkdown
      components={{
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        em: ({ ...props }) => <span className="text-secondary" {...props} />,
      }}
      rehypePlugins={[rehypeRaw]}
    >
      {text}
    </ReactMarkdown>
  );
}
