function encodeVowel(word) {
    return word.toLowerCase() + "-yay";
}

// Function to encode words that begin with a consonant from English to Pig Latin
function encodeConsonant(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lowerWord = word.toLowerCase();
    if (!vowels.includes(lowerWord[0])) {
        let firstVowelIndex = 0;
        for (let i = 0; i < lowerWord.length; i++) {
            if (vowels.includes(lowerWord[i])) {
                firstVowelIndex = i;
                break;
            }
        }
        return lowerWord.slice(firstVowelIndex) + '-' + lowerWord.slice(0, firstVowelIndex) + 'ay';
    } else {
        return lowerWord + '-way';
    }
}

// Function to decide whether a word starts with a vowel or consonant and encode it accordingly
function encodeWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lowerWord = word.toLowerCase();
    if (vowels.includes(lowerWord[0])) {
        return lowerWord + "-yay";
    } else {
        let firstVowelIndex = lowerWord.split('').findIndex(char => vowels.includes(char));
        return lowerWord.slice(firstVowelIndex) + '-' + lowerWord.slice(0, firstVowelIndex) + "ay";
    }
}

function encodeSentence(sentence) {
    const words = sentence.split(" ");
    const encodedWords = words.map(word => encodeWord(word));
    return encodedWords.join(" ");
}

function encodeParagraph(paragraph) {
    const sentences = paragraph.split(".");
    const encodedSentences = sentences.map(sentence => encodeSentence(sentence.trim()));
    return encodedSentences.join(". ");
}

function updateTranslationDisplay() {
    const paragraph = document.getElementById('inputTextArea').value;
    const encodedText = encodeParagraph(paragraph);
    document.getElementById('translationDisplay').innerText = encodedText;
}
function updateTranslationDisplay() {
    const inputText = document.getElementById('inputTextArea').value;
    const translatedText = encodeSentence(inputText);
    document.getElementById('translationDisplay').innerText = translatedText;
}


// Function to decode a full Pig Latin sentence or paragraph into English
function decodeWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lowerWord = word.toLowerCase();
    if (lowerWord.endsWith('-yay')) {
        return lowerWord.slice(0, -4);
    } else {
        let dashIndex = lowerWord.lastIndexOf('-');
        let consonants = lowerWord.slice(0, dashIndex);
        let restOfWord = lowerWord.slice(dashIndex + 1, lowerWord.length - 2);
        return restOfWord + consonants;
    }
}
function decodeSentence(sentence) {
    const words = sentence.split(' ');
    const decodedWords = words.map(word => decodeWord(word));
    return decodedWords.join(' ');
}

function decodeParagraph(paragraph) {
    const sentences = paragraph.split('.');
    const decodedSentences = sentences.map(sentence => decodeSentence(sentence.trim()));
    return decodedSentences.join('. ');
}

function updateTranslationDisplay() {
    const inputText = document.getElementById('inputTextArea').value;
    const translatedText = encodeSentence(inputText);
    document.getElementById('translationDisplay').innerText = translatedText;
}

function updateDecodingDisplay() {
    const inputText = document.getElementById('inputTextArea').value;
    const decodedText = decodeParagraph(inputText);
    document.getElementById('translationDisplay').innerText = decodedText;
}


// Event listener for input change (real-time encoding)
document.getElementById('inputTextArea').addEventListener('input', updateTranslationDisplay);
// Event listener for input change (real-time decoding)
document.getElementById('inputTextArea').addEventListener('input', updateDecodingDisplay);

// Event listener for Clear button
document.getElementById("noHatDuckBtn").addEventListener("click", function () {
  clearInputAndDisplay();
});

function clearInputAndDisplay() {
    document.getElementById("pigLatinInput").value = "";
    document.getElementById("translationDisplay").innerText = "";
  }
  // Event listener for Clear button
  document.getElementById("noHatDuckBtn").addEventListener("click", function () {
    clearInputAndDisplay();
  });

// Event listener for Submit button
document
  .getElementById("blueHatDuckBtn")
  .addEventListener("click", function () {
    const textInput = document.getElementById("pigLatinInput").value; // Get input value
    const encodedText = document.getElementById("translationDisplay");
    const translatedWord = encodeWord(textInput);
    encodedText.textContent = translatedWord;
  });
// Event listener for Translate to English button
document
  .getElementById("translationBtn")
  .addEventListener("click", function () {
    const textInput = document.getElementById("pigLatinInput").value; // Get input value
    const decodedText = document.getElementById("translationDisplay");
    const translatedWord = decodeParagraph(textInput);
    decodedText.textContent = translatedWord;
  });
//  Event listener for input change (real-time encoding)
document.getElementById('inputTextArea').addEventListener('input', updateTranslationDisplay);
//   / Event listener for input change (real-time encoding)
  document.getElementById('inputTextArea').addEventListener('input', updateTranslationDisplay);
  // Event listener for input change (real-time decoding)
  document.getElementById('inputTextArea').addEventListener('input', updateDecodingDisplay);
  document.getElementById("inputTextArea").addEventListener("input", function () {
});

document.getElementById("inputTextArea").addEventListener("input", function () {
});

// For words starting with consonants
const pigLatin = encodeWord("sandman");
const get$ = encodeSentence("make me money");
const get$$ = encodeWord("boy");
// const testVowelWords = {
//     eat: "eat-yay",
//     omelet: "omelet-yay",
//     are: "are-yay",
//     egg: "egg-yay",
//     explain: "explain-yay",
//     always: "always-yay",
//     ends: "ends-yay",
//     every: "every-yay",
//     another: "another-yay",
//     under: "under-yay",
//     island: "island-yay",
//     elegant: "elegant-yay",
//   }
//   const testSimpleConsonantWords = {
//     latin: "atin-lay",
//     banana: "anana-bay",
//     trash: "ash-tray",
//     happy: "appy-hay",
//     duck: "uck-day",
//     dopest: "opest-day",
//     me: "e-may",
//     too: "oo-tay",
//     will: "ill-way",
//     moist: "oist-may",
//     wet: "et-way",
//     real: "eal-ray",
//     simple: "imple-say",
//     say: "ay-say",
//     bagel: "agel-bay",
//     you: "ou-yay",
//   }
//   const decode =  updateDecodedText = {
//     cheers: "eers-chay",
//     shesh: "esh-shay",
//     smile: "ile-smay",
//     string: "ing-stray",
//     thanks: "anks-thay",
//     stupid: "upid-stay",
//     glove: "ove-glay",
//   }
console.log(pigLatin); // PigLatin
console.log(get$); // PigLatin sentence
console.log(get$$); // consonant from English to Pig Latin
// Decoded PigLatin words sentence and paragraphs Test

const decode$word = decodeWord("andman-say");
const decodedSentence = decodeSentence("ake-may e-may oney-may");
const decoded1sentence = encodeSentence("make me money");
const chipotleMessage = decodeParagraph(
  "ince-say e-thay irst-fay ipotle-chay opened-yay in-yay 1993, e-way ave-hay earned-lay a-yay ot-lay about-yay igs-pay. e-way ow-knay its-yay important-yay or-fay em-thay o-tay oot-ray, oam-ray, and-yay express-yay eir-thay atural-nay endencies-tay, o-say e-way ork-way ith-way armers-fay o-whay aise-ray igs-pay at-thay ang-hay out-yay outdoors-yay or-yay in-yay eeply-day edded-bay arns-bay. ey're-thay also-yay ever-nay iven-gay aily-day oses-day of-yay antibiotics-yay o-tay ake-may em-thay ow-gray aster-fay. ut-bay, eaking-spay of-yay all-yay ings-thay ig-pay, at-whay on-yay earth-yay is-yay ig-pay atin-lay? eally-ray, o-whay invented-yay it-yay? en-whay o-day ou-yay use-yay it-yay? is-yay it-yay only-yay or-fay eens-tway? oes-day it-yay ake-may ou-yay ound-say art-smay? is-yay it-yay only-yay used-yay y-bay armers-fay? is-yay is-thay ust-jay a-yay ong-lay etup-say or-fay a-yay ogwash-hay oke-jay? are-yay ou-yay ill-stay eading-ray? o-say any-may uestions-qay, o-say ittle-lay ime-tay. en-thay again-yay, if-yay ou're-yay itting-say ere-thay ith-way a-yay ag-bay ull-fay of-yay urritos-bay, aybe-may ou-yay ave-hay e-thay ime-tay o-tay onder-pay and-yay ecode-day all-yay is-thay. and-yay if-yay at's-thay e-thay ase-cay, en-thay its-yay ack-bay, unwrap-yay, and-yay onder-pay away-yay."
);
console.log(decode$word);
console.log(decodedSentence);
console.log(decoded1sentence);
console.log(chipotleMessage); //  Pig Latin to English sentence
