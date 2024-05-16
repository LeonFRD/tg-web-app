import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const telegram = window.Telegram.WebApp;
    telegram.ready();

    const fetchData = async () => {
      try {
        const chatId = await telegram.chatId; // Get the current chat ID
        const groups = await telegram.getChatAdministrators(chatId);
        const groupData = groups.map(member => ({
          id: member.user.id,
          username: member.user.username,
          firstName: member.user.first_name,
          lastName: member.user.last_name
        }));
        setGroups(groupData);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div className="App">
      <h1>My Groups</h1>
      <ul className="group-list">
        {groups.map(group => (
          <li key={group.id} className="group-item">
            {group.firstName} {group.lastName} ({group.username})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;