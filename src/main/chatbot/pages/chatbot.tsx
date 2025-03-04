import  { useState, forwardRef } from 'react';
import HomeMobileNavBar from '../../home/component/patient/HomeMobileNavBar';
import HomeNavBar from '../../home/component/patient/HomeNavBar';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
    { sender: 'user', text: 'Hi! I need some help with my account.' },
    { sender: 'bot', text: 'Sure, I can help with that. What seems to be the problem?' },
    { sender: 'user', text: 'I forgot my password.' },
    { sender: 'bot', text: 'No worries. You can reset your password by clicking on the "Forgot Password" link on the login page.' },
    { sender: 'user', text: 'Thanks! I will try that.' },
    { sender: 'bot', text: 'Is there anything else I can help you with?' },
    { sender: 'user', text: 'Yes, I also need to update my email address.' },
    { sender: 'bot', text: 'You can update your email address in the account settings.' },
    { sender: 'user', text: 'Got it. Thank you!' },
    { sender: 'bot', text: 'You\'re welcome! Have a great day!' },
    { sender: 'user', text: 'You too!' },
    { sender: 'bot', text: 'Hello again! How can I assist you today?' },
    { sender: 'user', text: 'Hi! I need some help with my account.' },
    { sender: 'bot', text: 'Sure, I can help with that. What seems to be the problem?' },
    { sender: 'user', text: 'I forgot my password.' },
    { sender: 'bot', text: 'No worries. You can reset your password by clicking on the "Forgot Password" link on the login page.' },
    { sender: 'user', text: 'Thanks! I will try that.' },
    { sender: 'bot', text: 'Is there anything else I can help you with?' },
    { sender: 'user', text: 'No, that\'s all for now. Thanks!' },
  ]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: 'This is a bot response.' }]);
      }, 1000);
    }
  };

  return (
    <>
      <HomeNavBar title='Chatbot'/>
      <HomeMobileNavBar title='Chatbot'/>
      <div className="flex flex-col h-screen md:ms-[250px] bg-gray-100">
        <div className="flex-none bg-cosmic-primary-color text-white p-4 text-center font-bold">
          Chatbot
        </div>
        <div className="flex-1 overflow-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-none p-4  bg-white border-t border-gray-300">
          <div className="flex">
            <input
              title='enter text'
              placeholder=' '
              name='chat'
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="bg-cosmic-primary-color text-white p-2 rounded-r-lg"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;