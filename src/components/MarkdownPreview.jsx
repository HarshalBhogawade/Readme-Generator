import React from 'react';

// Function to convert markdown to HTML (basic implementation)
const convertMarkdownToHTML = (markdown) => {
  let html = markdown;
  
  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Convert bold text
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  
  // Convert images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" style="max-width: 100%; height: auto;" />');
  
  // Convert links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Convert line breaks
  html = html.replace(/\n\n/gim, '</p><p>');
  html = html.replace(/\n/gim, '<br>');
  
  // Wrap in paragraphs
  html = '<p>' + html + '</p>';
  
  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/gim, '');
  html = html.replace(/<p><br><\/p>/gim, '');
  
  return html;
};

// Component to preview the generated markdown
function MarkdownPreview({ markdown }) {
  return (
    <div className="markdown-preview">
      <div className="preview-content">
        {markdown ? (
          <div 
            className="rendered-markdown"
            dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(markdown) }}
          />
        ) : (
          <div className="empty-preview">
            <p>Fill out the form to see your README preview!</p>
            <p>Your generated markdown will appear here in real-time.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarkdownPreview;