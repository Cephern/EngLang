const peekBtn = document.getElementById("peek");
const word = document.getElementById("word");
const example = document.getElementById("example");
const input = document.getElementById("input");
const score = document.getElementById("score");
const progress = document.querySelector("progress");

// options
const onlyHardBtn = document.getElementById("only-hard");
const randomBtn = document.getElementById("random");
const lastTenBtn = document.getElementById("last-ten");

const wordsList = [
  {
    id: 0,
    eng: "area",
    trans: "[ эриа ]",
    rus: "область",
    difficulty: "easy",
  },
  {
    id: 1,
    eng: "common",
    trans: "[ коммон ]",
    rus: "обычный",
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

let words = [...wordsList];
let wordIndex = 0;
let task = { ...words[wordIndex] };
let peeked = false;
let splittedValue;
let total = words.length;
let current = 0;

function setProgress() {
  progress.max = total;
  progress.value = current;
  score.innerText = `${current}/${total}`;
}

function wordToSpan(word) {
  let splitted = word
    .split("")
    .map((letter) => `<span data-letter="${letter}"></span>`)
    .join("");

  return splitted;
}

function spanToWord(word) {
  let splitted = word
    .split("")
    .map((letter) => `<span data-letter="${letter}">${letter}</span>`)
    .join("");

  return splitted;
}

function fillWord(splittedValue) {
  const children = Array.from(word.children);
  children.forEach((child, index) => {
    if (splittedValue[index]) {
      child.innerText = splittedValue[index];
    } else {
      child.innerText = "";
    }
  });
}

function checkWord() {
  const children = Array.from(word.children);
  children.forEach((child) => {
    const letter = child.getAttribute("data-letter");
    if (child.innerText === letter) {
      child.classList = "right";
    } else {
      child.classList = "wrong";
    }
  });
}

function setFrame(eng, rus) {
  example.innerHTML = `
        <p>${rus}</p>
    `;

  word.innerHTML = `
        ${wordToSpan(eng)}
    `;
}

// inits
setFrame(task.eng, task.rus);
setProgress();

// Listeners
peekBtn.addEventListener("click", () => {
  if (peeked) {
    peekBtn.innerHTML = '<i class="fas fa-eye"></i>';
    peeked = false;
    word.innerHTML = wordToSpan(task.eng);
    fillWord(splittedValue);
    checkWord();
  } else {
    peekBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    peeked = true;
    word.innerHTML = spanToWord(task.eng);
  }
});

input.addEventListener("input", (e) => {
  if (!peeked) {
    let value = e.target.value.toLowerCase();
    splittedValue = value.split("");
    fillWord(splittedValue);
    checkWord();

    if (value == task.eng) {
      e.target.value = "";
      current++;
      setProgress();
      if (current == total) {
        task = { ...words[0] };
      } else {
        wordIndex += 1;
        task = { ...words[wordIndex] };
        splittedValue = "";
        setFrame(task.eng, task.rus);
      }
    }
  }
});
