import React from 'react';

// Component to preview the generated markdown
function MarkdownPreview({ markdown }) {
  return (
    <div className="markdown-preview">
      <div className="preview-content">
        {markdown ? (
          <pre>{markdown}</pre>
        ) : (
          <div className="empty-preview">
            <p>👋 Fill out the form to see your README preview!</p>
            <p>Your generated markdown will appear here in real-time.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarkdownPreview;