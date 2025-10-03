import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, User } from 'lucide-react';
import Swal from 'sweetalert2';
import { EMAIL_API_CONFIG } from '../config/api';

interface Message {
  id: number;
  sender: 'agent' | 'user';
  message: string;
  time: string;
}

interface ConversationStep {
  step: string;
  choice: string;
  timestamp: string;
}

type ChatState = 
  | 'welcome'
  | 'services_choice'
  | 'quantitative'
  | 'qualitative'
  | 'methodologies_quant'
  | 'methodologies_qual'
  | 'projects_quant'
  | 'projects_qual'
  | 'team'
  | 'contact_request'
  | 'collect_info'
  | 'summary';

const ChatWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [currentState, setCurrentState] = useState<ChatState>('welcome');
  const [conversation, setConversation] = useState<ConversationStep[]>([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isCollectingInfo, setIsCollectingInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open chat after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize welcome message
  useEffect(() => {
    if (isChatOpen && chatMessages.length === 0) {
      addAgentMessage("Hello and welcome to Futuris Group, your partner in market research and strategic consulting! How would you like to begin?");
    }
  }, [isChatOpen, chatMessages.length]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const getTime = () => {
    return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const addAgentMessage = (message: string) => {
    const agentMessage: Message = {
      id: Date.now() + Math.random(),
      sender: 'agent',
      message: message,
      time: getTime()
    };
    setChatMessages(prev => [...prev, agentMessage]);
  };

  const addUserMessage = (message: string) => {
    const userMessage: Message = {
      id: Date.now() + Math.random(),
        sender: 'user',
      message: message,
      time: getTime()
    };
    setChatMessages(prev => [...prev, userMessage]);
  };

  const addToConversation = (step: string, choice: string) => {
    const conversationStep: ConversationStep = {
      step,
      choice,
      timestamp: new Date().toLocaleString('fr-FR')
    };
    setConversation(prev => [...prev, conversationStep]);
  };

  const handleOptionClick = (optionText: string, nextState: ChatState) => {
    addUserMessage(optionText);
    addToConversation(currentState, optionText);

    setTimeout(() => {
      setCurrentState(nextState);
      
      switch (nextState) {
        case 'services_choice':
          addAgentMessage("We offer several services to better understand the market and your customers. What type of service interests you?");
          break;
        case 'quantitative':
          addAgentMessage("We conduct surveys and polls to measure consumer attitudes and behavior. What would you like to explore?");
          break;
        case 'qualitative':
          addAgentMessage("We conduct focus groups, in-depth interviews and offer strategic consulting. What would you like to explore?");
          break;
        case 'methodologies_quant':
        case 'methodologies_qual':
          addAgentMessage("Our methods include face-to-face interviews, focus groups, in-depth interviews (IDI), and telephone surveys (CATI).");
          break;
        case 'projects_quant':
        case 'projects_qual':
          addAgentMessage("We have conducted projects in 29 African countries with over 13,500 field teams and 46 analysis experts. What would you like to do?");
          break;
        case 'team':
          addAgentMessage("Our team is composed of professionals passionate about innovation and excellence. Would you like to contact an agent?");
          break;
        case 'contact_request':
          addAgentMessage("Perfect! An agent will contact you. Please provide your name and email address.");
          setIsCollectingInfo(true);
          break;
        case 'welcome':
          addAgentMessage("Hello and welcome to Futuris Group, your partner in market research and strategic consulting! How would you like to begin?");
          break;
      }
    }, 500);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleContactSubmit = () => {
    // Name validation
    if (!userName.trim()) {
      Swal.fire({
        title: 'Name required!',
        text: 'Please enter your name.',
        icon: 'warning',
        position: 'top-end',
        toast: true,
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        customClass: {
          popup: 'rounded-xl shadow-2xl'
        }
      });
      return;
    }

    // Email validation
    if (!userEmail.trim()) {
      Swal.fire({
        title: 'Email required!',
        text: 'Please enter your email address.',
        icon: 'warning',
        position: 'top-end',
        toast: true,
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        customClass: {
          popup: 'rounded-xl shadow-2xl'
        }
      });
      return;
    }

    // Email format validation with regex
    if (!validateEmail(userEmail)) {
      Swal.fire({
        title: 'Invalid email!',
        text: 'Please enter a valid email address (example: name@example.com).',
        icon: 'error',
        position: 'top-end',
        toast: true,
        timer: 4000,
        showConfirmButton: false,
        timerProgressBar: true,
        customClass: {
          popup: 'rounded-xl shadow-2xl'
        }
      });
      return;
    }

    // Si tout est valide
    const name = userName;
    const email = userEmail;
    addUserMessage(`${name} - ${email}`);
    addToConversation('contact_info', `${name} - ${email}`);
    setUserName('');
    setUserEmail('');
    setIsCollectingInfo(false);
    
    setTimeout(async () => {
      // Send notification to Futuris team
      await sendContactNotification(name, email);
      
      // Send summary by email
      const summary = generateConversationSummary();
      addAgentMessage(`Perfect ${name}! An agent will contact you soon at ${email}.\n\n${summary}\n\nThank you for your interest in Futuris Group! 🎉`);
      
      // Afficher notification SweetAlert
      setTimeout(() => {
        Swal.fire({
          title: 'Thank you for your interest!',
          html: `
            <div class="text-left">
              <p class="text-gray-700 mb-3">Your details have been successfully registered.</p>
              <div class="bg-blue-50 p-3 rounded-lg mb-2">
                <p class="text-gray-600 text-sm mb-1">👤 Name:</p>
                <p class="font-semibold text-gray-800">${name}</p>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg">
                <p class="text-gray-600 text-sm mb-1">📧 Email:</p>
                <p class="font-semibold text-blue-600">${email}</p>
              </div>
              <p class="text-gray-600 text-sm mt-3">An agent will contact you shortly.</p>
            </div>
          `,
          icon: 'success',
          confirmButtonText: 'Receive by email',
          showCancelButton: true,
          cancelButtonText: 'Close',
          confirmButtonColor: '#2563eb',
          cancelButtonColor: '#6b7280',
          width: '32rem',
          customClass: {
            popup: 'rounded-2xl',
            confirmButton: 'rounded-lg px-6 py-2',
            cancelButton: 'rounded-lg px-6 py-2'
          }
        }).then(async (result) => {
          if (result.isConfirmed) {
            // Show loader during sending
            Swal.fire({
              title: 'Sending...',
              text: 'Please wait',
              icon: 'info',
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: () => {
                Swal.showLoading();
              }
            });

            // Send email via API
            const success = await sendEmailSummary(email, name);
            
            if (success) {
              Swal.fire({
                title: 'Email sent!',
                text: 'Your conversation summary has been sent successfully.',
                icon: 'success',
                position: 'top-end',
                toast: true,
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
                customClass: {
                  popup: 'rounded-xl shadow-2xl'
                }
              });
            }
          }
        });
      }, 1000);
      
      setCurrentState('welcome');
    }, 500);
  };

  const generateConversationSummary = () => {
    let summary = "📋 Your navigation summary:\n";
    conversation.forEach((step, index) => {
      summary += `${index + 1}. ${step.choice}\n`;
    });
    return summary;
  };

  const sendContactNotification = async (userName: string, userEmail: string) => {
    const contactMessage = `Nouvelle demande de contact via le chatbot Futuris\n\n` +
      `📋 Informations du contact :\n` +
      `- Nom : ${userName}\n` +
      `- Email : ${userEmail}\n` +
      `- Date : ${new Date().toLocaleString('fr-FR')}\n\n` +
      `📊 Parcours de navigation :\n${generateConversationSummary()}\n\n` +
      `Merci de contacter ce prospect dans les meilleurs délais.`;

    try {
      const response = await fetch(EMAIL_API_CONFIG.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${EMAIL_API_CONFIG.token}`
        },
        body: JSON.stringify({
          sender_email: userEmail,
          sender_name: userName,
          organisation: EMAIL_API_CONFIG.organisation,
          sujet: `Nouvelle demande de contact - ${userName}`,
          message: contactMessage,
          noms: ['Équipe Futuris', EMAIL_API_CONFIG.senderEmail]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Erreur API notification:', errorData);
      }
    } catch (error) {
      console.error('Erreur envoi notification:', error);
    }
  };

  const sendEmailSummary = async (recipientEmail: string, recipientName: string) => {
    const fullSummary = `Résumé de la conversation avec Futuris Group\n${"=".repeat(50)}\n\nDate: ${new Date().toLocaleString('fr-FR')}\n\n${generateConversationSummary()}\n${"=".repeat(50)}\n\nMerci de votre intérêt pour Futuris Group!\nSite web: https://futuris-group.com/\nEmail: contact@futuris-group.com`;
    
    try {
      const response = await fetch(EMAIL_API_CONFIG.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${EMAIL_API_CONFIG.token}`
        },
        body: JSON.stringify({
          sender_email: EMAIL_API_CONFIG.senderEmail,
          sender_name: EMAIL_API_CONFIG.senderName,
          organisation: EMAIL_API_CONFIG.organisation,
          sujet: `Résumé de votre conversation - ${new Date().toLocaleDateString('fr-FR')}`,
          message: fullSummary,
          noms: [recipientName, recipientEmail]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Erreur API:', errorData);
        throw new Error('Erreur lors de l\'envoi de l\'email');
      }

      return true;
    } catch (error) {
      console.error('Erreur API:', error);
      
      Swal.fire({
        title: 'Sending error',
        text: 'Unable to send email. Please try again later.',
        icon: 'error',
        position: 'top-end',
        toast: true,
        timer: 4000,
        showConfirmButton: false,
        timerProgressBar: true,
        customClass: {
          popup: 'rounded-xl shadow-2xl'
        }
      });
      
      return false;
    }
  };

  const renderButtons = () => {
    const primaryBtnClass = "w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-md";
    const secondaryBtnClass = "w-full bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border-2 border-gray-300 hover:border-blue-500";

    switch (currentState) {
      case 'welcome':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Discover our services", 'services_choice')} className={primaryBtnClass}>
              📊 Discover our services
            </button>
            <button onClick={() => handleOptionClick("Talk to an agent", 'contact_request')} className={secondaryBtnClass}>
              💬 Talk to an agent
            </button>
          </div>
        );
      
      case 'services_choice':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Quantitative studies and analysis", 'quantitative')} className={primaryBtnClass}>
              📈 Quantitative studies
            </button>
            <button onClick={() => handleOptionClick("Qualitative studies and consulting", 'qualitative')} className={primaryBtnClass}>
              💡 Qualitative studies
            </button>
          </div>
        );
      
      case 'quantitative':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("View our methodologies", 'methodologies_quant')} className={primaryBtnClass}>
              🔬 Our methodologies
            </button>
            <button onClick={() => handleOptionClick("View project examples", 'projects_quant')} className={primaryBtnClass}>
              📁 Project examples
            </button>
          </div>
        );
      
      case 'qualitative':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("View our methodologies", 'methodologies_qual')} className={primaryBtnClass}>
              🔬 Our methodologies
            </button>
            <button onClick={() => handleOptionClick("View project examples", 'projects_qual')} className={primaryBtnClass}>
              📁 Project examples
            </button>
          </div>
        );
      
      case 'methodologies_quant':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Back to services menu", 'services_choice')} className={secondaryBtnClass}>
              ⬅️ Back to services
            </button>
            <button onClick={() => handleOptionClick("Go to our projects", 'projects_quant')} className={primaryBtnClass}>
              ➡️ View our projects
            </button>
          </div>
        );
      
      case 'methodologies_qual':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Back to services menu", 'services_choice')} className={secondaryBtnClass}>
              ⬅️ Back to services
            </button>
            <button onClick={() => handleOptionClick("Go to our projects", 'projects_qual')} className={primaryBtnClass}>
              ➡️ View our projects
            </button>
          </div>
        );
      
      case 'projects_quant':
      case 'projects_qual':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("View our team", 'team')} className={primaryBtnClass}>
              👥 Our team
            </button>
            <button onClick={() => handleOptionClick("Talk to an agent", 'contact_request')} className={secondaryBtnClass}>
              💬 Talk to an agent
            </button>
          </div>
        );
      
      case 'team':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Yes, talk to an agent", 'contact_request')} className={primaryBtnClass}>
              ✅ Yes, contact an agent
            </button>
            <button onClick={() => handleOptionClick("No, return to main menu", 'welcome')} className={secondaryBtnClass}>
              ⬅️ Return to menu
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Futuris Assistant</div>
                <div className="text-xs text-blue-100 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Online now
                </div>
              </div>
            </div>
            <button 
              onClick={handleChatToggle}
              className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-gray-50 to-white">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-sm' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                }`}>
                  <div className="leading-relaxed whitespace-pre-line">{msg.message}</div>
                  <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Action Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            {isCollectingInfo ? (
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-700 ml-1">👤 Your name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ex: John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-700 ml-1">📧 Your email</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleContactSubmit()}
                    placeholder="Ex: john.doe@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  <span>✉️</span>
                  <span>Send my details</span>
                </button>
              </div>
            ) : (
              <>
                {renderButtons()}
                {conversation.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500 text-center">
                      📊 {conversation.length} step{conversation.length > 1 ? 's' : ''} completed
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 group">
          <button
            onClick={handleChatToggle}
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 animate-pulse"
          >
            <MessageCircle className="h-7 w-7" />
          </button>
          
          {/* Chat Tooltip */}
          <div className="absolute bottom-20 right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
              Need help? Chat with us!
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

