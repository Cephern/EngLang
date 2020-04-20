const wordMain = document.getElementById("word");
const transcription = document.getElementById("transcription");
const translation = document.getElementById("translation");

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

let currentIndex = -1;

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

// Inits
constructList();

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
