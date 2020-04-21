const wordMain = document.getElementById("word");
const transcription = document.getElementById("transcription");
const translation = document.getElementById("translation");
const voicesSelect = document.getElementById("voices");

const pronounceBtn = document.getElementById("pronounce");
const nextBtn = document.getElementById("next");

const hardBtn = document.querySelector(".hard");
const normalBtn = document.querySelector(".normal");
const easyBtn = document.querySelector(".easy");

const list = document.querySelector(".list ul");

const words = [
  {
    id: 0,
    eng: "area",
    trans: "[ эриа ]",
    rus: "участок, область",
    difficulty: "easy",
  },
  {
    id: 1,
    eng: "common",
    trans: "[ коммон ]",
    rus: "обычный, общий",
    difficulty: "normal",
  },
  {
    id: 2,
    eng: "field",
    trans: "[ фиилд ]",
    rus: "поле",
    difficulty: "hard",
  },
  {
    id: 3,
    eng: "diet",
    trans: "[ дает ]",
    rus: "диета",
    difficulty: "easy",
  },
  {
    id: 4,
    eng: "valley",
    trans: "[ воллеу ]",
    rus: "долина",
    difficulty: "normal",
  },
  {
    id: 5,
    eng: "shepherd",
    trans: "[ шеперд ]",
    rus: "пастух",
    difficulty: "hard",
  },
  {
    id: 6,
    eng: "hurry",
    trans: "[ харри ]",
    rus: "спешка",
    difficulty: "normal",
  },
];

let currentIndex = 0;

function setCurrent(i) {
  if (i == words.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = i + 1;
  }

  constructMain(currentIndex);
}

function constructMain(id) {
  word = { ...words[id] };

  wordMain.innerText = word.eng;
  transcription.innerText = word.trans;
  translation.innerText = word.rus;
}

function constructList() {
  list.innerHTML = "";

  words.forEach((word) => {
    let li = document.createElement("li");
    li.classList.add(word.difficulty);
    li.innerHTML = word.eng;
    li.dataset.id = word.id;
    list.appendChild(li);
  });
}

// Speech Synthesis
const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

//  Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Inits
constructMain(currentIndex);
constructList();
getVoices();

// Listeners
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    index = Number(e.target.dataset.id);
    constructMain(index);
    currentIndex = index;
  }
});

nextBtn.addEventListener("click", (e) => setCurrent(currentIndex));

hardBtn.addEventListener("click", (e) => {
  words[currentIndex].difficulty = "hard";
  constructList();
});

normalBtn.addEventListener("click", (e) => {
  words[currentIndex].difficulty = "normal";
  constructList();
});

easyBtn.addEventListener("click", (e) => {
  words[currentIndex].difficulty = "easy";
  constructList();
});

pronounceBtn.addEventListener("click", () => {
  setTextMessage(words[currentIndex].eng);
  speakText();
});

speechSynthesis.addEventListener("voiceschanged", getVoices);

voicesSelect.addEventListener("change", setVoice);
