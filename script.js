const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");
const newChat = document.getElementById("newChat");


// Send Message Function
function sendMessage() {

    const message = messageInput.value.trim().toLowerCase();

    if (message === "") return;


    // USER MESSAGE
    const userMessage = `
    
    <div class="flex justify-end animate-fadeIn">

        <div class="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl max-w-xl shadow-xl text-white">
            ${message}
        </div>

    </div>
    
    `;

    chatBox.innerHTML += userMessage;

    messageInput.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;



    // TYPING ANIMATION
    const typing = `
    
    <div id="typing" class="flex items-start gap-3">

        <div class="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
            AI
        </div>

        <div class="bg-[#1e293b] px-5 py-4 rounded-2xl shadow-xl border border-gray-700 typing text-2xl">
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>

    </div>
    
    `;

    chatBox.innerHTML += typing;

    chatBox.scrollTop = chatBox.scrollHeight;



    // SMART AI REPLIES
    setTimeout(() => {

        document.getElementById("typing").remove();

        let reply = "";


        // Greetings
        if (
            message.includes("hello") ||
            message.includes("hi") ||
            message.includes("hey")
        ) {

            reply = "Hello 👋 How can I help you today?";

        }


        // HTML
        else if (message.includes("html")) {

            reply = "HTML is used to create the structure of websites.";

        }


        // CSS
        else if (message.includes("css")) {

            reply = "CSS is used to style webpages and make them beautiful.";

        }


        // JavaScript
        else if (
            message.includes("javascript") ||
            message.includes("js")
        ) {

            reply = "JavaScript adds interactivity and dynamic features to websites.";

        }


        // Tailwind
        else if (message.includes("tailwind")) {

            reply = "Tailwind CSS is a utility-first CSS framework used for modern UI design.";

        }


        // Project
        else if (message.includes("project")) {

            reply = "You can build AI Chat UI, Weather App, Portfolio Website, or E-Commerce Frontend.";

        }


        // Portfolio
        else if (message.includes("portfolio")) {

            reply = "A portfolio website is one of the best projects for frontend developers.";

        }


        // React
        else if (message.includes("react")) {

            reply = "React is a popular JavaScript library used to build modern web applications.";

        }


        // Weather
        else if (message.includes("weather")) {

            reply = "A weather app uses APIs to show live weather information.";

        }


        // Name
        else if (message.includes("your name")) {

            reply = "My name is AI Assistant 🤖";

        }


        // Time
        else if (message.includes("time")) {

            const time = new Date().toLocaleTimeString();

            reply = `Current time is ${time}`;

        }


        // Date
        else if (message.includes("date")) {

            const date = new Date().toDateString();

            reply = `Today's date is ${date}`;

        }


        // Who created you
        else if (message.includes("who created")) {

            reply = "Nishant Gupta created this AI Chat UI project 🚀";

        }


        // Default Reply
        else {

            const randomReplies = [

                "That's interesting 👀",

                "Can you explain more?",

                "I am still learning 😄",

                "Frontend development is awesome 🚀",

                "Try asking about HTML, CSS, JavaScript, or projects.",

                "That sounds cool 🔥"

            ];

            reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];

        }



        // AI MESSAGE
        const aiMessage = `
        
        <div class="flex items-start gap-3 animate-fadeIn">

            <div class="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                AI
            </div>

            <div class="bg-[#1e293b] p-4 rounded-2xl max-w-xl shadow-xl border border-gray-700 text-white">
                ${reply}
            </div>

        </div>
        
        `;

        chatBox.innerHTML += aiMessage;

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1500);

}



// SEND BUTTON
sendBtn.addEventListener("click", sendMessage);



// ENTER KEY
messageInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        sendMessage();

    }

});



// NEW CHAT BUTTON
newChat.addEventListener("click", () => {

    chatBox.innerHTML = `
    
    <div class="flex items-start gap-3">

        <div class="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
            AI
        </div>

        <div class="bg-[#1e293b] p-4 rounded-2xl max-w-xl shadow-xl border border-gray-700">
            Hello Nishant 👋 <br><br>
            I am your AI Assistant. Ask me anything about frontend development.
        </div>

    </div>
    
    `;

});