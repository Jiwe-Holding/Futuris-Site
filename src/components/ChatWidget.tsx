import React, { useState, useEffect } from 'react';
import { MessageCircle, X, User, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'agent', message: 'Hello! Welcome to FUTURIS. How can I help you today?', time: '10:30' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  // Auto-open chat after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
    }, 15000); // 15 seconds

    // Cleanup timer if component unmounts or chat is manually opened
    return () => clearTimeout(timer);
  }, []);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: currentMessage,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages([...chatMessages, userMessage]);
      setCurrentMessage('');
      
      // Simulate agent response
      setTimeout(() => {
        const agentResponses = [
          'Thank you for your message! One of our experts will assist you shortly.',
          'I understand your inquiry. Let me connect you with our market research specialist.',
          'That\'s a great question! Our team has extensive experience in African markets.',
          'I\'d be happy to help you with that. Can you provide more details about your project?',
          'Our services cover all 30 African markets. What specific region are you interested in?',
          'We offer comprehensive fieldwork, quality control, and analytics services.',
          'Would you like to schedule a consultation with our team?',
          'Our field agents are available across 30+ African markets.'
        ];
        
        const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)];
        const agentMessage = {
          id: chatMessages.length + 2,
          sender: 'agent',
          message: randomResponse,
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        
        setChatMessages(prev => [...prev, agentMessage]);
      }, 1500);
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold">FUTURIS Support</div>
                <div className="text-xs opacity-90">Online now</div>
              </div>
            </div>
            <button 
              onClick={handleChatToggle}
              className="text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-800 shadow-sm'
                }`}>
                  <div>{msg.message}</div>
                  <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={handleChatToggle}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ChatWidget;

