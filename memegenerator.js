// script.js
document.getElementById('generateMeme').addEventListener('click', () => generateContent('meme'));
document.getElementById('generateJoke').addEventListener('click', () => generateContent('joke'));
document.getElementById('generateQuote').addEventListener('click', () => generateContent('quote'));
document.getElementById('generateRiddle').addEventListener('click', () => generateContent('riddle'));
document.getElementById('checkRiddleAnswer').addEventListener('click', checkRiddleAnswer);

const contentArea = document.getElementById('contentArea');
const contentType = document.getElementById('contentType');
const contentText = document.getElementById('contentText');
const userAnswer = document.getElementById('userAnswer');
const riddleAnswer = document.getElementById('riddleAnswer');
const checkRiddleAnswerButton = document.getElementById('checkRiddleAnswer');

const content = {
    meme: ["Why don't scientists trust atoms? Because they make up everything!", "I told my wife she was drawing her eyebrows too high. She looked surprised.", "Parallel lines have so much in common. It’s a shame they’ll never meet."],
    joke: ["I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.", "Why don't programmers like nature? It has too many bugs.", "Why do Java developers wear glasses? Because they don’t C#."],
    quote: ["The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt", "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats", "Whether you think you can or you think you can’t, you’re right. - Henry Ford"],
    riddle: [
        { question: "What has keys but can't open locks?", answer: "A piano." },
        { question: "What has a head, a tail, is brown, and has no legs?", answer: "A penny." },
        { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter 'M'." }
    ]
};

let currentRiddle = null;

function generateContent(type) {
    contentType.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    if (type === 'riddle') {
        const randomRiddle = content.riddle[Math.floor(Math.random() * content.riddle.length)];
        contentText.textContent = randomRiddle.question;
        riddleAnswer.textContent = randomRiddle.answer;
        riddleAnswer.style.display = 'none';
        userAnswer.style.display = 'block';
        checkRiddleAnswerButton.style.display = 'block';
        currentRiddle = randomRiddle;
    } else {
        const randomContent = content[type][Math.floor(Math.random() * content[type].length)];
        contentText.textContent = randomContent;
        riddleAnswer.style.display = 'none';
        userAnswer.style.display = 'none';
        checkRiddleAnswerButton.style.display = 'none';
        currentRiddle = null;
    }
}

function checkRiddleAnswer() {
    if (currentRiddle) {
        const userAnswerText = userAnswer.value.trim();
        if (userAnswerText.toLowerCase() === currentRiddle.answer.toLowerCase()) {
            alert("Correct answer!");
            riddleAnswer.style.display = 'block';
        } else {
            alert("Incorrect answer. The correct answer is revealed.");
            riddleAnswer.style.display = 'block';
        }
    } else {
        alert("You need to generate a riddle first.");
    }
}
