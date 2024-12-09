import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال الرسالة بنجاح!');
    setName('');
    setMessage('');
  };

  return (
    <section className="contact">
      <h2>اتصل بي</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="اسمك" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="رسالتك" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <button type="submit">إرسال</button>
      </form>
    </section>
  );
};

export default Contact;
