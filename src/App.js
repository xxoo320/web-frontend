import React, { useState } from 'react';
import './App.css';  // 样式文件

function App() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    // 创建请求数据对象
    const data = { userId, message };

    try {
      // 向后端发送请求
      const res = await fetch('https://web-backend-m326.onrender.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      
      // 显示后端返回的响应
      if (res.ok) {
        setResponse(`Message stored: ${result.message}`);
      } else {
        setResponse(`Error: ${result.message}`);
      }
    } catch (err) {
      setResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Submit Your Message</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID</label>
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your user ID"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <p>{response}</p>
    </div>
  );
}

export default App;
