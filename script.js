var quotes = ['You are Growing when you can be alone without feeling lonely',
    'Remember God on your bad days too!',
    'Its only a mistake when you fail to learn from it.',
    'You will find peace when you stop caring so much',
    'More courage is found in being vulnerable than defensive',
    'Sucess has never been linked to complaning',
    'Let your past guide you. Not limit you',
    'You are either choosing it or changing it. There is no in-between.',
    'You separate yourself from the pack by being consitent.',
    'Be brace enough to walk with you. Many who started with you, wont finish with you',
    'Run TO god God with you questions, dont run From him with your doubts']

var quotestam = ['எல்லோரும் பயணிக்கிறார்கள் என்று நீயும் பின்தொடராதே உனக்கான பாதையை நீயே தேர்ந்தெடு',
    'இருளான வாழ்க்கை என்ற கவலை கொள்ளாதே கனவுகள் முளைப்பது இருளில் தான்',
    'வாழ்க்கை சொர்கமாவதும் நரகமாவதும் நம் எண்ணங்களை பொறுத்தே',
    'தேடலின் மதிப்பு கிடைக்கும்வரைக்கும் தான்...',
    'எதையாவது நீங்கள் கடினமாக உழைக்கிறீர்கள், அதை அடையும்போது நீங்கள் அதிகமாக உணருவீர்கள்.',
    'இது கடினமாக இருக்கும், ஆனால் கடினமானது என்பது சாத்தியமற்றது என்று அர்த்தமல்ல.',
    'சில நேரங்களில் நாங்கள் சோதிக்கப்படுவது எங்கள் பலவீனங்களைக் காட்ட அல்ல, மாறாக நம் பலங்களைக் கண்டறிய.',
    'எப்போதும் உங்கள் புன்னகையை வைத்திருங்கள். எனது நீண்ட வாழ்க்கையை நான் அப்படித்தான் விளக்குகிறேன்.',
    'பாதுகாப்பு என்பது ஒரு மாயை. வாழ்க்கை ஒரு துணிச்சலான சாகசம் அல்லது அது ஒன்றும் இல்லை.',
    'வெற்றிக்கான திறவுகோல் தடைகளில் அல்ல, இலக்குகளில் கவனம் செலுத்துவதாகும்.',
    'நீங்களே கட்டியெழுப்பும் சுவர்களால் மட்டுமே நீங்கள் அடைக்கப்பட்டுள்ளீர்கள்.']

var hi = ['I wish you are doing too good', 'I love you', 'This Uuniverse loves you', 'You deserve to be loved',
    'Yor are Awesome', 'Welcome my dear', 'You are one of those beautiful human being I ever met']


window.onload = function greeting() {
    var randomNumber = Math.floor(Math.random() * (hi.length));
    document.getElementById('greetings').innerHTML = hi[randomNumber];
}

var obj = document.getElementById("clr");
obj.setAttribute("style", "height: 40px; width: 100%; margin-top: 2rem");

// english

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var obj = document.getElementById("quoteDisplay");
obj.setAttribute("style", "padding-top: 80px; font-weight: 800; letter-spacing: 2px; font-size: 30px; height: 25rem; width: 100%; margin-left: 7px; margin-right: 7px");


document.getElementById("clr").style.backgroundColor = "rgba(216, 191, 216, 0.904)";

document.getElementById("quote1").style.fontFamily = "Cairo, sans-serif";
document.getElementById("quote1").style.fontSize = "20px";

// tamil

function newQuote1() {
    var randomNumber = Math.floor(Math.random() * (quotestam.length));
    document.getElementById('quoteDisplay').innerHTML = quotestam[randomNumber];
}

var obj = document.getElementById("quoteDisplay");
obj.setAttribute("style", "padding-top: 80px; font-weight: 800; letter-spacing: 2px; font-size: 30px; height: 25rem; width: 100%; margin-left: 7px; margin-right: 7px");

document.getElementById("quoteDisplay").style.fontFamily = "Arima Madurai, cursive";

var obj = document.getElementsByClassName("tam");
obj.setAttribute("style", "padding-top: 80px; font-family: Arima Madurai, cursive; font-weight: 800; letter-spacing: 2px; font-size: 30px; height: 25rem; width: 100%; margin-left: 10px; margin-right: 10px");
