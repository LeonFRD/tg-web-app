import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const telegram = window.Telegram.WebApp; // Get the Telegram web app object
    telegram.ready(); 

    const fetchData = async () => {
      try {
        await telegram.sendMessage('7134726909:AAE793FREFmLcpWiyb3SQwQ36ff8xiiEWJQ', '/getGroups'); // Send the /getGroups command
        telegram.onEvent('message', (msg) => { 
          if (msg.text && msg.text.startsWith('[')) { // Check if the message contains the group data (JSON)
            const parsedData = JSON.parse(msg.text);
            setGroups(parsedData);
          }
        });
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>My Groups</h1>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            <strong>{group.firstName} {group.lastName}</strong> ({group.username})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;