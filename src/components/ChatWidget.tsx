import React, { useState, useEffect } from 'react';
import { MessageCircle, X, User, Send, Phone, Mail } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'agent', message: 'Hello! Welcome to FUTURIS. How can I assist you with your market research needs today?', time: '10:30' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  // Auto-open chat after 20 seconds (more corporate timing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
    }, 20000);

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
      
      // Corporate agent responses
      setTimeout(() => {
        const corporateResponses = [
          'Thank you for your inquiry. A market research specialist will contact you within 24 hours.',
          'I understand your requirements. Let me connect you with our African markets expert.',
          'Excellent question. Our team has 15+ years of experience across 29 African markets.',
          'I\'d be pleased to assist you. Could you please provide more details about your research objectives?',
          'Our comprehensive services cover fieldwork, quality control, and analytics. Which area interests you most?',
          'Would you prefer to schedule a consultation call with our senior research consultant?',
          'Our field operations span 29+ African markets with 3,685 trained agents.',
          'For detailed proposals, I can arrange a meeting with our business development team.'
        ];
        
        const randomResponse = corporateResponses[Math.floor(Math.random() * corporateResponses.length)];
        const agentMessage = {
          id: chatMessages.length + 2,
          sender: 'agent',
          message: randomResponse,
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        
        setChatMessages(prev => [...prev, agentMessage]);
      }, 2000);
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+27761525291';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contact@futuris.com?subject=Inquiry from Website&body=Hello FUTURIS team,%0D%0A%0D%0AI am interested in learning more about your market research services.%0D%0A%0D%0APlease contact me to discuss my requirements.%0D%0A%0D%0AThank you.';
  };

  return (
    <>
      {/* Corporate Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Corporate Chat Header */}
          <div className="bg-white border-b border-gray-200 text-black p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-black">FUTURIS Support</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Online now
                </div>
              </div>
            </div>
            <button 
              onClick={handleChatToggle}
              className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Corporate Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-3 rounded-lg text-sm shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}>
                  <div className="leading-relaxed">{msg.message}</div>
                  <div className={`text-xs mt-2 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate Quick Actions */}
          <div className="px-4 py-2 bg-white border-t border-gray-200">
            <div className="flex gap-2 mb-3">
              <button 
                onClick={handleCall}
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors border border-gray-200 flex items-center justify-center gap-2 hover:text-blue-600 hover:border-blue-200"
              >
                <Phone className="h-3 w-3" />
                Call Us
              </button>
              <button 
                onClick={handleEmail}
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors border border-gray-200 flex items-center justify-center gap-2 hover:text-blue-600 hover:border-blue-200"
              >
                <Mail className="h-3 w-3" />
                Email
              </button>
            </div>
          </div>

          {/* Corporate Chat Input */}
          <div className="p-4 bg-white rounded-b-lg border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Powered by FUTURIS Support Team
            </div>
          </div>
        </div>
      )}

      {/* Corporate Floating Chat Button */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleChatToggle}
            className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Corporate Chat Tooltip */}
          <div className="absolute bottom-16 right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
              Need assistance? Chat with us
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

