import React, { useState } from 'react';

const CopyUrlComponent = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const currentUrl = window.location.href; // Get the current URL

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setCopySuccess('URL copied to clipboard!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
      })
      .catch(err => {
        setCopySuccess('Failed to copy URL.');
        console.error('Error copying to clipboard: ', err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-white">
        Copy the URL and Send it to your Relatives
      </h1>
      <p className="text-lg text-white mb-4">{currentUrl}</p> {/* Display the current URL */}
      <button
        onClick={copyToClipboard}
        className="px-6 py-2 text-white bg-blue-700 rounded hover:bg-blue-600 transition duration-300"
      >
        Copy URL to Clipboard
      </button>
      {copySuccess && (
        <p className="mt-4 text-green-300">{copySuccess}</p>
      )}
    </div>
  );
};

export default CopyUrlComponent;