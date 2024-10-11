
import React, { useState } from 'react';

const Chatbot = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);

  const handleSend = () => {
    if (input.trim() || image) {
      onSend(input, image); 
      setInput('');
      setImage(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file); 
      console.log('Image selected:', file);
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const handleImageUploadClick = () => {
    document.getElementById('image-upload').click();
  };

  return (
    <div className="p-4 bg-white border-t border-gray-300 flex fixed bottom-0 left-0 right-0">
      <button
        onClick={handleImageUploadClick}
        className="bg-gray-300 p-2 rounded-l-lg border border-gray-300"
      >
        📷
      </button>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything about the Indian justice system..."
        className="flex-grow border border-gray-300 p-2 resize-none h-20"
      />

      <button onClick={handleSend} className="bg-black text-white px-4 rounded-r-lg">
        Send
      </button>
    </div>
  );
};

export default Chatbot;

