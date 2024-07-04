const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const responseContainer = document.querySelector('.response-container');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak("Good Morning Payal");
    } else if (hr >= 12 && hr <= 17) {
        speak(" Good Afternoon Payal");
    } else {
        speak("Good Evening Payal");
    }
}

window.addEventListener('load', () => {
    speak("Activating Talk-Mania");
    speak("Going Online");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    addResponse(transcript, 'user-response');
    speakThis(transcript.toLowerCase());
}

function addResponse(text, className = 'response') {
    const responseDiv = document.createElement('div');
    responseDiv.className = className;
    responseDiv.textContent = text;
    responseContainer.appendChild(responseDiv);
}

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I didn't understand what you want to say please try again";

    if (message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Payal";
        speech.text = finalText;
    } else if (message.includes('Talkmania how are you')) {
        const finalText = "I am doing great. How can I help you Payal";
        speech.text = finalText;
    } else if (message.includes('What is your name')) {
        const finalText = "My name is TALK_MANIA";
        speech.text = finalText;
    } else if (message.includes('open google')) {
        window.open('https://www.google.com', "_blank");
        const finalText = 'Opening Google';
        speech.text = finalText;
    } else if (message.includes('what is') || message.includes('Who is') || message.includes('What are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on internet regarding " + message;
        speech.text = finalText;
    } else if (message.includes('wikipedia')) {
        window.open(`https://www.wikipedia.org/wiki/${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speech.text = finalText;
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = time;
        speech.text = finalText;
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = date;
        speech.text = finalText;
    } else if (message.includes('open calculator')) {
        window.open('Calculator:///');
        const finalText = "opening Calculator";
        speech.text = finalText;
    } else if (message.includes('youtube')) {
        const query = message.replace('youtube', '').trim();
        window.open(`https://www.youtube.com/results?search_query=${query.replace(" ", "+")}`, "_blank");
        const finalText = 'Searching for ' + query + ' on YouTube';
        speech.text = finalText;
    }else if (message.includes('navigate')) {
        const places = message.replace('navigate', '').trim().split(' to ');
        if (places.length === 2) {
            const origin = encodeURIComponent(places[0].trim());
            const destination = encodeURIComponent(places[1].trim());
            const mapUrl = `https://www.google.com/maps/dir/${origin}/${destination}`;
            window.open(mapUrl, "_blank");
            const finalText = `Opening Google Maps for navigation from ${places[0].trim()} to ${places[1].trim()}`;
            speech.text = finalText;
        } else {
            const finalText = "Please specify both origin and destination for navigation.";
            speech.text = finalText;
        }
    }
    
     else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = 'I found some information for "' + message + '" on google';
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    addResponse(speech.text);

    window.speechSynthesis.speak(speech);
}

btn.addEventListener('click', () => {
    recognition.start();
});

const toggleSwitch = document.querySelector('.theme-switch__toggle');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    } else {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    }
});