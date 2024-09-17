import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { format } from "date-fns";
import { VscThreeBars } from "react-icons/vsc";


function ChatBot() {
  const [question, setQuestion] = useState("");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [packageMode, setPackageMode] = useState(false);
  const [tourGuideMode, setTourGuideMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [packageResponses, setPackageResponses] = useState({});
  const [tourGuideResponses, setTourGuideResponses] = useState({});
  const [predefinedOptions, setPredefinedOptions] = useState([]);
  const chatContainerRef = useRef(null);


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);


  const packageQuestions = [
    "What is the treatment that you are looking for?",
    "What is your budget in rupees?",
    "Which city in India would you prefer for your treatment?",
    "How long do you plan to stay in India?",
    "Do you have any specific dietary requirements or preferences?",
  ];


  const tourGuideQuestions = [
    "Which city in India are you interested in exploring?",
    "What are your main interests? (e.g., history, culture, food, nature)",
    "How many days do you have for sightseeing?",
    "Do you have any mobility constraints or specific accessibility needs?",
    "Are you interested in any particular local experiences or workshops?",
  ];


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
    // Split the text into lines
    const lines = text.split("\n");


    // Process each line
    const formattedLines = lines.map((line) => {
      // Bold lines starting and ending with **
      if (line.startsWith("**") && line.endsWith("**")) {
        return `<h3 class="font-bold text-lg my-2">${line.slice(2, -2)}</h3>`;
      }
      // Create list items for lines starting with *
      else if (line.trim().startsWith("*")) {
        return `<li>${line.trim().slice(1).trim()}</li>`;
      }
      // Handle other lines
      else {
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


  async function generateAnswer() {
    setGeneratingAnswer(true);


    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: healGrimagePrompt + question }] }],
        },
      });


      const botResponse = response.data.candidates[0].content.parts[0].text;


      setChatHistory((prevHistory) => [
        ...prevHistory,
        { text: question, timestamp: new Date().toISOString(), isUser: true },
        {
          text: formatBotResponse(botResponse),
          timestamp: new Date().toISOString(),
          isUser: false,
        },
      ]);
    } catch (error) {
      console.error(error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
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


  function handleSpecialModeResponse(response) {
    const currentQuestions = packageMode
      ? packageQuestions
      : tourGuideQuestions;
    const setResponses = packageMode
      ? setPackageResponses
      : setTourGuideResponses;


    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: response, timestamp: new Date().toISOString(), isUser: true },
    ]);


    setResponses((prev) => ({
      ...prev,
      [currentQuestions[currentQuestionIndex]]: response,
    }));


    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      askNextQuestion(currentQuestions[currentQuestionIndex + 1]);
    } else {
      packageMode ? generatePackage() : generateTourGuide();
    }
  }


  function askNextQuestion(question) {
    let options = [];
    if (packageMode) {
      switch (question) {
        case packageQuestions[1]:
          options = ["50,000 - 1,00,000", "1,00,000 - 5,00,000", "5,00,000+"];
          break;
        case packageQuestions[2]:
          options = ["Mumbai", "Delhi", "Bangalore", "Chennai"];
          break;
        case packageQuestions[3]:
          options = ["1 week", "2 weeks", "1 month", "3 months"];
          break;
        default:
          options = [];
      }
    } else if (tourGuideMode) {
      switch (question) {
        case tourGuideQuestions[0]:
          options = ["Mumbai", "Delhi", "Bangalore", "Chennai"];
          break;
        case tourGuideQuestions[2]:
          options = ["3 days", "5 days", "1 week", "2 weeks"];
          break;
        default:
          options = [];
      }
    }


    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: question, timestamp: new Date().toISOString(), isUser: false },
    ]);


    setPredefinedOptions(options);
  }


  function handleOptionSelect(option) {
    handleSpecialModeResponse(option);
    setPredefinedOptions([]); // Clear predefined options after selection
  }


  function generatePackage() {
    const city = packageResponses[packageQuestions[2]];
    const packageSummary = `
  **Your Personalized Medical Tourism Package**
 
  **Treatment:** ${packageResponses[packageQuestions[0]]}
  **Estimated Cost:** ${packageResponses[packageQuestions[1]]} rupees
 
  **Location:** ${city}
  **Duration:** ${packageResponses[packageQuestions[3]]}
 
  **Hospital:** ${getRandomHospital(city)}
  **Doctor:** Dr. ${getRandomName()}
 
  **Accommodation:** ${getRandomHotel(city)}
  **Room Type:** Deluxe Room with Medical Care Amenities
 
  **Travel:**
  * Arrival: ${city} International Airport
  * Local Transfer: Private air-conditioned car
 
  **Dietary Requirements:** ${packageResponses[packageQuestions[4]]}
  **Special Meal Plan:** Customized to your dietary needs
 
  **Additional Services:**
  * 24/7 Medical Concierge
  * Language Interpreter (if required)
  * Post-treatment follow-up calls
 
  **Wellness Add-ons:**
  * Daily Yoga and Meditation Sessions
  * Ayurvedic Spa Treatment (once per week)
 
  **Tourist Activities:**
  * Guided City Tour (half-day)
  * Cultural Experience: ${getRandomCulturalActivity(city)}
 
  **Emergency Contact:** +91 ${Math.floor(
    1000000000 + Math.random() * 9000000000
  )} (Available 24/7)
 
  Your package has been designed to provide a comfortable and stress-free medical tourism experience. All necessary arrangements have been made according to your preferences. You'll receive a detailed itinerary and pre-travel checklist via email shortly.
 
  If you need any modifications or have any questions, please don't hesitate to ask. We're here to ensure your medical journey in India is smooth and successful.
 
  We look forward to welcoming you to ${city} for your treatment. Wishing you a speedy recovery and a pleasant stay!
    `;


    setChatHistory((prevHistory) => [
      ...prevHistory,
      {
        text: formatBotResponse(packageSummary),
        timestamp: new Date().toISOString(),
        isUser: false,
      },
    ]);


    setPackageMode(false);
    setCurrentQuestionIndex(0);
    setPackageResponses({});
  }
  function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }


  function getRandomLandmark(city) {
    const landmarks = {
      Mumbai: ["Gateway of India", "Marine Drive", "Siddhivinayak Temple"],
      Delhi: ["India Gate", "Qutub Minar", "Red Fort"],
      Bangalore: [
        "Lalbagh Botanical Garden",
        "Bangalore Palace",
        "Cubbon Park",
      ],
      Chennai: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
    };


    return getRandomFromArray(landmarks[city] || ["A popular landmark"]);
  }


  // Random markets based on city
  function getRandomMarket(city) {
    const markets = {
      Mumbai: ["Colaba Causeway", "Crawford Market", "Linking Road"],
      Delhi: ["Chandni Chowk", "Sarojini Nagar", "Dilli Haat"],
      Bangalore: ["Commercial Street", "Brigade Road", "M.G. Road"],
      Chennai: ["T. Nagar", "George Town", "Pondy Bazaar"],
    };


    return getRandomFromArray(markets[city] || ["A popular market"]);
  }


  function generateTourGuide() {
    const city = tourGuideResponses[tourGuideQuestions[0]];
    const duration = tourGuideResponses[tourGuideQuestions[2]];
    const interests = tourGuideResponses[tourGuideQuestions[1]];
    const tourGuideSummary = `
    **Your Personalized Virtual Tour Guide for ${city}**
   
    **Destination:** ${city}
    **Duration:** ${duration}
   
    **Interests:** ${interests}
    **Accessibility Needs:** ${tourGuideResponses[tourGuideQuestions[3]]}
    **Special Experiences:** ${tourGuideResponses[tourGuideQuestions[4]]}
   
    **Suggested Itinerary:**
    1. **Day 1:** Visit ${getRandomLandmark(
      city
    )}, enjoy a lunch at ${getRandomRestaurant(
      city
    )}, and spend the evening at ${getRandomNearbyDestination(city)}.
    2. **Day 2:** Explore the ${getRandomCulturalActivity(
      city
    )}, followed by a scenic drive to ${getRandomNearbyDestination(city)}.
    3. **Day 3:** Experience local street food and shopping at ${getRandomMarket(
      city
    )}.
   
    **Local Guide Services:**
    * Guide Name: ${getRandomName()}
    * Language: English/Hindi
   
    **Accommodation Recommendation:** Stay at ${getRandomHotel(
      city
    )} for easy access to key sites.
   
    **Additional Services:**
    * 24/7 Helpline: +91 ${Math.floor(1000000000 + Math.random() * 9000000000)}
    * Exclusive Discounts on Local Experiences
   
    Enjoy your tour and explore the rich cultural heritage of ${city}. Whether it's historical landmarks, delicious cuisine, or vibrant local experiences, we hope this guide helps you make the most of your visit.
   
    If you need any modifications or have any questions, feel free to ask! We're here to help.
    `;


    setChatHistory((prevHistory) => [
      ...prevHistory,
      {
        text: formatBotResponse(tourGuideSummary),
        timestamp: new Date().toISOString(),
        isUser: false,
      },
    ]);


    // Reset state after tour guide generation
    setTourGuideMode(false);
    setCurrentQuestionIndex(0);
    setTourGuideResponses({});
  }


  function handleOptions() {
    setOpen((prev) => !prev);
  }


  function handlePackageGeneration() {
    setPackageMode(true);
    setCurrentQuestionIndex(0);
    setPackageResponses({});
    setChatHistory((prevHistory) => [
      ...prevHistory,
      {
        text: "Great! Let's create a personalized medical tourism package for you. I'll ask you a series of questions to understand your needs better.",
        timestamp: new Date().toISOString(),
        isUser: false,
      },
      {
        text: packageQuestions[0],
        timestamp: new Date().toISOString(),
        isUser: false,
      },
    ]);
    setOpen(false);
  }


  function handleVirtualTourGuide() {
    setTourGuideMode(true);
    setCurrentQuestionIndex(0);
    setTourGuideResponses({});
    setChatHistory((prevHistory) => [
      ...prevHistory,
      {
        text: "Excellent! Let's create a personalized virtual tour guide for you. I'll ask you a few questions to customize your tour experience.",
        timestamp: new Date().toISOString(),
        isUser: false,
      },
      {
        text: tourGuideQuestions[0],
        timestamp: new Date().toISOString(),
        isUser: false,
      },
    ]);
    setOpen(false);
  }


  // Helper functions to generate random data
  function getRandomHospital(city) {
    const hospitals = {
      Mumbai: [
        "Lilavati Hospital",
        "Kokilaben Dhirubhai Ambani Hospital",
        "Hinduja Hospital",
      ],
      Delhi: [
        "Apollo Hospital",
        "Max Super Speciality Hospital",
        "Fortis Escorts Heart Institute",
      ],
      Bangalore: [
        "Manipal Hospital",
        "Narayana Health City",
        "Columbia Asia Hospital",
      ],
      Chennai: [
        "Apollo Hospitals",
        "Fortis Malar Hospital",
        "MIOT International",
      ],
    };
    return hospitals[city]
      ? hospitals[city][Math.floor(Math.random() * hospitals[city].length)]
      : "Premier Medical Center";
  }


  function getRandomName() {
    const names = [
      "Patel",
      "Sharma",
      "Singh",
      "Gupta",
      "Kumar",
      "Reddy",
      "Mukherjee",
      "Chatterjee",
      "Nair",
      "Menon",
    ];
    return names[Math.floor(Math.random() * names.length)];
  }


  function getRandomHotel(city) {
    const hotels = {
      Mumbai: ["The Taj Mahal Palace", "The Oberoi", "Trident Nariman Point"],
      Delhi: ["The Leela Palace", "The Imperial", "Taj Palace"],
      Bangalore: ["The Leela Palace", "Taj West End", "ITC Gardenia"],
      Chennai: ["The Leela Palace", "ITC Grand Chola", "Taj Coromandel"],
    };
    return hotels[city]
      ? hotels[city][Math.floor(Math.random() * hotels[city].length)]
      : "Luxury Wellness Resort";
  }


  function getRandomCulturalActivity(city) {
    const activities = {
      Mumbai: [
        "Bollywood Studio Tour",
        "Dharavi Slum Tour",
        "Elephanta Caves Excursion",
      ],
      Delhi: [
        "Old Delhi Food Walk",
        "Qutub Minar Sound and Light Show",
        "Akshardham Temple Visit",
      ],
      Bangalore: [
        "Nrityagram Dance Village Tour",
        "Bangalore Palace Visit",
        "Lalbagh Botanical Garden Walk",
      ],
      Chennai: [
        "Bharatanatyam Dance Performance",
        "Mylapore Heritage Walk",
        "Cooking Class: South Indian Cuisine",
      ],
    };
    return activities[city]
      ? activities[city][Math.floor(Math.random() * activities[city].length)]
      : "Local Cultural Experience";
  }


  function getRandomRestaurant(city) {
    const restaurants = {
      Mumbai: ["Trishna", "Britannia & Co.", "Swati Snacks"],
      Delhi: ["Indian Accent", "Bukhara", "Karim's"],
      Bangalore: ["Vidyarthi Bhavan", "Mavalli Tiffin Rooms", "The Only Place"],
      Chennai: ["Saravana Bhavan", "Peshawri", "Dakshin"],
    };
    return restaurants[city]
      ? restaurants[city][Math.floor(Math.random() * restaurants[city].length)]
      : "Authentic Local Eatery";
  }


  function getRandomActivity(interests) {
    const activities = {
      history: [
        "Guided Museum Tour",
        "Historical Walking Tour",
        "Archaeological Site Visit",
      ],
      culture: [
        "Traditional Dance Workshop",
        "Local Craft Market Visit",
        "Religious Festival Experience",
      ],
      food: ["Street Food Tour", "Cooking Class", "Spice Market Exploration"],
      nature: [
        "National Park Safari",
        "Birdwatching Expedition",
        "Botanical Garden Tour",
      ],
    };
    const interestList = interests.toLowerCase().split(", ");
    const validInterests = interestList.filter(
      (interest) => activities[interest]
    );
    if (validInterests.length > 0) {
      const randomInterest =
        validInterests[Math.floor(Math.random() * validInterests.length)];
      return activities[randomInterest][
        Math.floor(Math.random() * activities[randomInterest].length)
      ];
    }
    return "Customized Local Experience";
  }


  function getRandomNearbyDestination(city) {
    const destinations = {
      Mumbai: ["Lonavala", "Alibaug", "Matheran"],
      Delhi: ["Agra", "Jaipur", "Rishikesh"],
      Bangalore: ["Mysore", "Coorg", "Hampi"],
      Chennai: ["Mahabalipuram", "Pondicherry", "Yelagiri"],
    };
    return destinations[city]
      ? destinations[city][
          Math.floor(Math.random() * destinations[city].length)
        ]
      : "Scenic Nearby Location";
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (packageMode || tourGuideMode) {
      handleSpecialModeResponse(question);
    } else {
      generateAnswer();
    }
    setQuestion("");
  }

  function toggleChatbot(){
    setIsOpen((prev)=>!prev)
  }

  return (
    <div>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-5 right-5 bg-[#003B6C] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none z-40"
      >
        💬 Chat
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-5 h-[35rem] flex flex-col bg-gray-100 z-50 shadow-2xl w-[30rem]">
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            HealGrimage Chatbot
          </h1>
          <button
            onClick={handleOptions}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <VscThreeBars size={24} />
          </button>
        </div>
  
  
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
            <button
              onClick={handlePackageGeneration}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Generate Package
            </button>
            <button
              onClick={handleVirtualTourGuide}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Virtual Tour Guide
            </button>
          </div>
        )}
  
  
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
          onClick={()=>setOpen(false)}
        >
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                  message.isUser
                    ? "bg-blue-500 text-white rounded-l-lg rounded-br-lg"
                    : "bg-gray-200 text-gray-800 rounded-r-lg rounded-bl-lg"
                } p-3 shadow-md`}
              >
                {message.isUser ? (
                  <p className="text-sm">{message.text}</p>
                ) : (
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: message.text }}
                  />
                )}
                <p className="text-xs text-right mt-1 opacity-50">
                  {format(new Date(message.timestamp), "HH:mm")}
                </p>
              </div>
            </div>
          ))}
          {predefinedOptions.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {predefinedOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          {generatingAnswer && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 rounded-r-lg rounded-bl-lg p-3 shadow-md">
                <Spinner />
              </div>
            </div>
          )}
        </div>
  
  
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md">
          <div className="flex space-x-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
}

export default ChatBot;
