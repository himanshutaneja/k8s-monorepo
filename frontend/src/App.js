import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading from API...');

  useEffect(() => {
    // Fetches from the backend NodePort service running on your local machine
    fetch('http://localhost:32000/api/data')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Could not connect to backend API ❌'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>React Frontend 🚀</h1>
      <div style={{ border: '2px solid #ccc', padding: '20px', display: 'inline-block', borderRadius: '8px' }}>
        <h3>Backend Response:</h3>
        <p style={{ color: '#0070f3', fontWeight: 'bold' }}>{message}</p>
      </div>
    </div>
  );
}

export default App;
