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
      addAgentMessage("Bonjour et bienvenue chez Futuris Group, votre partenaire en recherche marketing et consulting stratégique ! Comment souhaitez-vous commencer ?");
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
          addAgentMessage("Nous proposons plusieurs services pour mieux comprendre le marché et vos clients. Quel type de service vous intéresse ?");
          break;
        case 'quantitative':
          addAgentMessage("Nous réalisons des enquêtes et sondages pour mesurer l'attitude et le comportement des consommateurs. Que souhaitez-vous explorer ?");
          break;
        case 'qualitative':
          addAgentMessage("Nous réalisons focus groups, interviews approfondies et offrons du conseil stratégique. Que souhaitez-vous explorer ?");
          break;
        case 'methodologies_quant':
        case 'methodologies_qual':
          addAgentMessage("Nos méthodes incluent entretiens face à face, focus groups, interviews approfondies (IDI), et enquêtes téléphoniques (CATI).");
          break;
        case 'projects_quant':
        case 'projects_qual':
          addAgentMessage("Nous avons mené des projets dans 32 pays africains avec plus de 13 500 équipes sur le terrain et 46 experts en analyse. Que voulez-vous faire ?");
          break;
        case 'team':
          addAgentMessage("Notre équipe est composée de professionnels passionnés par l'innovation et l'excellence. Voulez-vous contacter un agent ?");
          break;
        case 'contact_request':
          addAgentMessage("Parfait ! Un agent prendra contact avec vous. Veuillez fournir votre nom et votre adresse email.");
          setIsCollectingInfo(true);
          break;
        case 'welcome':
          addAgentMessage("Bonjour et bienvenue chez Futuris Group, votre partenaire en recherche marketing et consulting stratégique ! Comment souhaitez-vous commencer ?");
          break;
      }
    }, 500);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleContactSubmit = () => {
    // Validation du nom
    if (!userName.trim()) {
      Swal.fire({
        title: 'Nom requis !',
        text: 'Veuillez entrer votre nom.',
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

    // Validation de l'email
    if (!userEmail.trim()) {
      Swal.fire({
        title: 'Email requis !',
        text: 'Veuillez entrer votre adresse email.',
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

    // Validation du format email avec regex
    if (!validateEmail(userEmail)) {
      Swal.fire({
        title: 'Email invalide !',
        text: 'Veuillez entrer une adresse email valide (exemple: nom@example.com).',
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
      // Envoyer notification à l'équipe Futuris
      await sendContactNotification(name, email);
      
      // Envoyer directement le résumé par email
      const summary = generateConversationSummary();
      addAgentMessage(`Parfait ${name} ! Un agent vous contactera prochainement à l'adresse ${email}.\n\n${summary}\n\nMerci de votre intérêt pour Futuris Group ! 🎉`);
      
      // Afficher notification SweetAlert
      setTimeout(() => {
        Swal.fire({
          title: 'Merci pour votre intérêt !',
          html: `
            <div class="text-left">
              <p class="text-gray-700 mb-3">Vos coordonnées ont été enregistrées avec succès.</p>
              <div class="bg-blue-50 p-3 rounded-lg mb-2">
                <p class="text-gray-600 text-sm mb-1">👤 Nom :</p>
                <p class="font-semibold text-gray-800">${name}</p>
              </div>
              <div class="bg-blue-50 p-3 rounded-lg">
                <p class="text-gray-600 text-sm mb-1">📧 Email :</p>
                <p class="font-semibold text-blue-600">${email}</p>
              </div>
              <p class="text-gray-600 text-sm mt-3">Un agent vous contactera prochainement.</p>
            </div>
          `,
          icon: 'success',
          confirmButtonText: 'Recevoir le résumé par email',
          showCancelButton: true,
          cancelButtonText: 'Fermer',
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
            // Afficher un loader pendant l'envoi
            Swal.fire({
              title: 'Envoi en cours...',
              text: 'Veuillez patienter',
              icon: 'info',
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: () => {
                Swal.showLoading();
              }
            });

            // Envoyer l'email via API
            const success = await sendEmailSummary(email, name);
            
            if (success) {
              Swal.fire({
                title: 'Email envoyé !',
                text: 'Le résumé de votre conversation a été envoyé avec succès.',
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
    let summary = "📋 Récapitulatif de votre parcours :\n";
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
        title: 'Erreur d\'envoi',
        text: 'Impossible d\'envoyer l\'email. Veuillez réessayer plus tard.',
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
            <button onClick={() => handleOptionClick("Découvrir nos services", 'services_choice')} className={primaryBtnClass}>
              📊 Découvrir nos services
            </button>
            <button onClick={() => handleOptionClick("Parler à un agent", 'contact_request')} className={secondaryBtnClass}>
              💬 Parler à un agent
            </button>
          </div>
        );
      
      case 'services_choice':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Études et analyses quantitatives", 'quantitative')} className={primaryBtnClass}>
              📈 Études quantitatives
            </button>
            <button onClick={() => handleOptionClick("Études qualitatives et consulting", 'qualitative')} className={primaryBtnClass}>
              💡 Études qualitatives
            </button>
          </div>
        );
      
      case 'quantitative':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Voir nos méthodologies", 'methodologies_quant')} className={primaryBtnClass}>
              🔬 Nos méthodologies
            </button>
            <button onClick={() => handleOptionClick("Voir des exemples de projets", 'projects_quant')} className={primaryBtnClass}>
              📁 Exemples de projets
            </button>
          </div>
        );
      
      case 'qualitative':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Voir nos méthodologies", 'methodologies_qual')} className={primaryBtnClass}>
              🔬 Nos méthodologies
            </button>
            <button onClick={() => handleOptionClick("Voir des exemples de projets", 'projects_qual')} className={primaryBtnClass}>
              📁 Exemples de projets
            </button>
          </div>
        );
      
      case 'methodologies_quant':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Retour au menu services", 'services_choice')} className={secondaryBtnClass}>
              ⬅️ Retour aux services
            </button>
            <button onClick={() => handleOptionClick("Passer à nos projets", 'projects_quant')} className={primaryBtnClass}>
              ➡️ Voir nos projets
            </button>
          </div>
        );
      
      case 'methodologies_qual':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Retour au menu services", 'services_choice')} className={secondaryBtnClass}>
              ⬅️ Retour aux services
            </button>
            <button onClick={() => handleOptionClick("Passer à nos projets", 'projects_qual')} className={primaryBtnClass}>
              ➡️ Voir nos projets
            </button>
          </div>
        );
      
      case 'projects_quant':
      case 'projects_qual':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Voir notre équipe", 'team')} className={primaryBtnClass}>
              👥 Notre équipe
            </button>
            <button onClick={() => handleOptionClick("Parler à un agent", 'contact_request')} className={secondaryBtnClass}>
              💬 Parler à un agent
            </button>
          </div>
        );
      
      case 'team':
        return (
          <div className="space-y-3">
            <button onClick={() => handleOptionClick("Oui, parler à un agent", 'contact_request')} className={primaryBtnClass}>
              ✅ Oui, contacter un agent
            </button>
            <button onClick={() => handleOptionClick("Non, revenir au menu principal", 'welcome')} className={secondaryBtnClass}>
              ⬅️ Revenir au menu
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
                <div className="font-semibold text-white">Assistant Futuris</div>
                <div className="text-xs text-blue-100 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  En ligne maintenant
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
                  <label className="text-xs font-medium text-gray-700 ml-1">👤 Votre nom</label>
              <input
                type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ex: Jean Dupont"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-700 ml-1">📧 Votre email</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleContactSubmit()}
                    placeholder="Ex: jean.dupont@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              <button
                  onClick={handleContactSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-md flex items-center justify-center gap-2"
              >
                  <span>✉️</span>
                  <span>Envoyer mes coordonnées</span>
              </button>
            </div>
            ) : (
              <>
                {renderButtons()}
                {conversation.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500 text-center">
                      📊 {conversation.length} étape{conversation.length > 1 ? 's' : ''} parcourue{conversation.length > 1 ? 's' : ''}
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
              Besoin d'aide ? Discutez avec nous !
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

