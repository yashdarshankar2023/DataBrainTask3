import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="item-list-container">
      <h1>Post List</h1>
      <ul className="post-list">
        {items.map(item => (
          <li key={item.id} className="post-item">
            <strong>{item.title}</strong>
            <h6>UserID: {item.userId}</h6>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
