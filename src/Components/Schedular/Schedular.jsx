import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Schedule.css';

const Schedular = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [scheduledMessages, setScheduledMessages] = useState([]);

  const handleScheduleMessage = () => {
    const newMessage = { message, recipient, scheduleDate };
    setScheduledMessages([...scheduledMessages, newMessage]);
    setMessage('');
    setRecipient('');
    setScheduleDate(new Date());
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = scheduledMessages.filter((_, i) => i !== index);
    setScheduledMessages(updatedMessages);
  };

  return (
    <div className="dashboard">
      <h2>Schedule WhatsApp Message</h2>
      
      <div className="input-group">
        <label>Recipient:</label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter WhatsApp number"
        />
      </div>
      {/* <div className="input-group">
        <label>Schedule Date & Time:</label>
        <DatePicker
          selected={scheduleDate}
          onChange={(date) => setScheduleDate(date)}
          showTimeSelect
          dateFormat="Pp"
          popperClassName="react-datepicker-popper" 
        />
      </div> */}
      <div className="input-group">
        <label>Schedule Date & Time:</label>
        <input type="datetime-local" name="data" id="date" onChange={(e) => setScheduleDate(e.target.value)}/>
      </div>

      <div className="input-group">
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button onClick={handleScheduleMessage}>Schedule Message</button>
      <h3>Scheduled Messages</h3>
      <ul>
        { scheduledMessages.sort().slice(0,1).map((msg, index) => (
          <li key={index}>
            <p>
              <strong>To:</strong> {msg.recipient} <br />
              <strong>Message:</strong> {msg.message} <br />
              <strong>Scheduled for:</strong> {msg.scheduleDate.toString()}
            </p>
            <button onClick={() => handleDeleteMessage(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedular;
