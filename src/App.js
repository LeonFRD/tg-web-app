import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if Telegram Web App is available
    if (window.Telegram && window.Telegram.WebApp) {
      const telegram = window.Telegram.WebApp;
      telegram.ready();
    } else {
      console.error('Telegram Web App is not available.');
    }
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    if (window.Telegram && window.Telegram.WebApp) {
      const telegram = window.Telegram.WebApp;
      try {
        await telegram.sendMessage('7134726909:AAE793FREFmLcpWiyb3SQwQ36ff8xiiEWJQ', message); // Send message to your bot
        setMessage(''); // Clear the input field after sending
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Send Message to Bot</h1>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter your message" 
          value={message} 
          onChange={handleInputChange} 
        />
        <button onClick={sendMessage}>Send</button> {/* Your existing button */}

        {/* Add the test button here */}
        <button onClick={() => { 
          if (window.Telegram && window.Telegram.WebApp) {
            const telegram = window.Telegram.WebApp;
            telegram.sendMessage('7134726909:AAE793FREFmLcpWiyb3SQwQ36ff8xiiEWJQ', 'Test message'); 
          } 
        }}>
          Send Test
        </button> 

      </div>
    </div>
  );
}

export default App;