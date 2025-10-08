import React, { useState } from 'react';

// Component for copying markdown to clipboard
function CopyButton({ markdown }) {
  const [copied, setCopied] = useState(false);

  // Function to copy text to clipboard
  const copyToClipboard = async () => {
    try {
      // Check if markdown exists
      if (!markdown || markdown.trim() === '') {
        alert('Please fill out some information first!');
        return;
      }

      // Copy to clipboard
      await navigator.clipboard.writeText(markdown);
      
      // Show success message
      setCopied(true);
      
      // Reset the message after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = markdown;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <button 
      className={`copy-button ${copied ? 'copied' : ''}`}
      onClick={copyToClipboard}
      disabled={!markdown || markdown.trim() === ''}
    >
      {copied ? (
        <>
          ✅ Copied!
        </>
      ) : (
        <>
          📋 Copy to Clipboard
        </>
      )}
    </button>
  );
}

export default CopyButton;