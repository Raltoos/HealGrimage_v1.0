import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { format } from "date-fns";

const ChatBot = () => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const healGrimagePrompt = `
You are MediTravel Guide, an AI assistant for HealGrimage, a medical tourism app specializing in healthcare experiences in India. Your primary function is to help users explore and plan their medical travel experiences in India. Always maintain this persona in your interactions.
Your Background and Purpose

You are an expert in Indian healthcare systems, AYUSH holistic treatments (Ayurveda, Yoga, Unani, Siddha, and Homeopathy), medical procedures, and travel logistics within India.
Your goal is to assist users in finding appropriate medical treatments in India, understanding costs, and planning their comprehensive medical journeys.

Your Personality and Communication Style

Be professional, knowledgeable, and confident in your responses.
Show empathy and understanding towards users' health concerns.
Communicate clearly and concisely, balancing medical terminology with layman's terms.
Be culturally sensitive and adaptable in your language and recommendations.
Maintain a warm and supportive tone throughout all interactions.

Your Key Responsibilities

Provide information on medical procedures and AYUSH treatments available in India.
Offer cost comparisons for treatments across different locations in India.
Assist with comprehensive travel planning and logistics related to medical tourism, including flights to India, domestic travel (flights/trains), accommodations, and local transportation.
Answer questions about healthcare quality and accreditation in different cities in India.
Provide general health and safety advice for medical travelers.
Generate detailed itineraries that include medical treatments, travel arrangements, accommodations, and tourism opportunities.
Offer information about top hotels and tourist attractions in relevant Indian cities.
Guide users through the HealGrimage app, including its AYUSH section and features for filtering treatments based on type, city, and budget.

Important Guidelines

Never provide medical advice or diagnoses. Always encourage users to consult with their primary healthcare providers.
Maintain user privacy and confidentiality at all times.
Provide unbiased information about healthcare facilities and destinations.
If you're unsure about any information, acknowledge your limitations and suggest reliable sources for further research.
Always prioritize user safety and ethical considerations in your recommendations.

Travel and Logistics Information

Provide real-world travel options for getting to India, including major airlines and typical routes from key international cities.
Offer information on domestic travel within India, including flights, trains, and other transportation options between major cities.
When discussing travel options, mention approximate travel times and general price ranges.
Include information about visa requirements for medical tourists coming to India.

City-Specific Information
When discussing a specific Indian city, always include:

Top 3-5 hotels suitable for medical tourists, with a brief description and price range.
3-5 major tourist attractions or activities, with a brief description of each.
Any specific health or safety considerations for that city.

Itinerary Generation
When asked to create an itinerary:

Include travel arrangements to and within India.
Schedule medical consultations and treatments.
Suggest accommodations near medical facilities.
Incorporate rest days and recovery time as appropriate.
Suggest local attractions and activities suitable for the patient's condition.
Include estimated costs for major expenses (treatments, travel, accommodations).

Remember to tailor all advice and recommendations to the user's specific medical needs, budget, and preferences. Guide users through the HealGrimage app features as needed, explaining how to use filters for treatments, cities, and budgets to find the most suitable options.
Now, please respond to the following user query:
`;

  function formatBotResponse(text) {
    const lines = text.split("\n");

    const formattedLines = lines.map((line) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return `<h3 class="font-bold text-lg my-2">${line.slice(2, -2)}</h3>`;
      } else if (line.trim().startsWith("*")) {
        return `<li>${line.trim().slice(1).trim()}</li>`;
      } else {
        return `<p>${line}</p>`;
      }
    });

    let formattedText = "";
    let inList = false;

    formattedLines.forEach((line) => {
      if (line.startsWith("<li>") && !inList) {
        formattedText += '<ul class="list-disc pl-5 my-2">';
        inList = true;
      } else if (!line.startsWith("<li>") && inList) {
        formattedText += "</ul>";
        inList = false;
      }
      formattedText += line;
    });

    if (inList) {
      formattedText += "</ul>";
    }

    return formattedText;
  }

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return; // Prevent empty submissions
    setGeneratingAnswer(true);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: `${healGrimagePrompt}${question}` }] }],
        },
      });

      const botResponse = response.data.candidates[0].content.parts[0].text;
      const formattedResponse = formatBotResponse(botResponse);

      const newMessage = {
        text: formattedResponse,
        timestamp: new Date().toISOString(),
        isUser: false,
      };

      setChatHistory([
        ...chatHistory,
        { text: question, timestamp: new Date().toISOString(), isUser: true },
        newMessage,
      ]);
      setQuestion("");
    } catch (error) {
      console.error(error);
      setChatHistory([
        ...chatHistory,
        {
          text: "Sorry, something went wrong. Please try again!",
          timestamp: new Date().toISOString(),
          isUser: false,
        },
      ]);
    } finally {
      setGeneratingAnswer(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateAnswer(e);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none z-50"
      >
        💬 Chat
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 bg-white border shadow-lg w-[50rem] h-[35rem] rounded-lg z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              onClick={toggleChatbot}
              className="text-gray-500 hover:text-red-500"
            >
              ✖️
            </button>
          </div>
          <div
            className="flex-grow overflow-y-auto p-4 space-y-4"
            ref={chatContainerRef}
          >
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`max-w-[75ch] flex flex-col p-3 rounded-lg ${
                  message.isUser
                    ? "bg-blue-500 text-white self-start"
                    : "bg-gray-200 self-end"
                }`}
              >
                {message.isUser ? (
                  <p className="text-sm">{message.text}</p>
                ) : (
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: message.text }}
                  />
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {format(new Date(message.timestamp), "h:mm a")}
                </p>
              </div>
            ))}
          </div>
          <form
            onSubmit={generateAnswer}
            onKeyDown={handleKeyDown}
            className="flex-shrink-0 p-4 flex items-center space-x-2 border-t"
          >
            <textarea
              required
              className="border border-gray-300 rounded w-full p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about medical tourism in India..."
            ></textarea>
            <button
              type="submit"
              className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 flex items-center justify-center ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={generatingAnswer}
            >
              {generatingAnswer ? (
                <>
                  <Spinner className="mr-2" /> Generating...
                </>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
