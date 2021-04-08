const wordMain = document.getElementById("word");
const transcription = document.getElementById("transcription");
const translation = document.getElementById("translation");
const voicesSelect = document.getElementById("voices");
const addWord = document.getElementById("add-word");
const addTranscription = document.getElementById("add-transcription");
const addTranslation = document.getElementById("add-translation");

const pronounceBtn = document.getElementById("pronounce");
const nextBtn = document.getElementById("next");

const hardBtn = document.querySelector(".hard");
const normalBtn = document.querySelector(".normal");
const easyBtn = document.querySelector(".easy");
const sumbitBtn = document.getElementById("submit");

const list = document.querySelector(".list ul");

// {
//   id: ,
//   eng: "",
//   trans: "[  ]",
//   rus: "",
//   difficulty: "normal"
// }

const words = [
  {
    id: 0,
    eng: "area",
    trans: "[ эриа ]",
    rus: "участок, область",
    difficulty: "normal",
  },
  {
    id: 1,
    eng: "staff",
    trans: "[ стаф ]",
    rus: "персонал, сотрудник",
    difficulty: "normal",
  },
  {
    id: 2,
    eng: "solve",
    trans: "[ солв ]",
    rus: "решить",
    difficulty: "normal",
  },
  {
    id: 3,
    eng: "complain",
    trans: "[ комплэин ]",
    rus: "жаловаться",
    difficulty: "normal",
  },
  {
    id: 4,
    eng: "chain",
    trans: "[ чеин ]",
    rus: "цепь, сеть магазинов",
    difficulty: "normal",
  },
  {
    id: 5,
    eng: "including",
    trans: "[ инклудин ]",
    rus: "включая, в том числе",
    difficulty: "normal",
  },
  {
    id: 6,
    eng: "conversation",
    trans: "[ конверсэйшн ]",
    rus: "диалог, разговор",
    difficulty: "normal",
  },
  {
    id: 7,
    eng: "jar",
    trans: "[ джар ]",
    rus: "банка",
    difficulty: "normal",
  },
  {
    id: 8,
    eng: "prepare",
    trans: "[ препээр ]",
    rus: "приготовить",
    difficulty: "normal",
  },
  {
    id: 9,
    eng: "arrive",
    trans: "[ эррайв ]",
    rus: "прибыть, приехать",
    difficulty: "normal",
  },
  {
    id: 10,
    eng: "shout",
    trans: "[ шаут ]",
    rus: "кричать",
    difficulty: "normal",
  },
  {
    id: 11,
    eng: "priest",
    trans: "[ прист ]",
    rus: "священник",
    difficulty: "normal",
  },
  {
    id: 12,
    eng: "owner",
    trans: "[ овнэр ]",
    rus: "владелец, хозяин",
    difficulty: "normal",
  },
  {
    id: 13,
    eng: "appear",
    trans: "[ аппиэр ]",
    rus: "появляться",
    difficulty: "normal",
  },
  {
    id: 14,
    eng: "disappear",
    trans: "[ дисаппиэр ]",
    rus: "исчезнуть",
    difficulty: "normal",
  },
  {
    id: 15,
    eng: "shelf",
    trans: "[ шелф ]",
    rus: "полка",
    difficulty: "normal",
  },
  {
    id: 16,
    eng: "empty",
    trans: "[ эмпти ]",
    rus: "пустой",
    difficulty: "normal",
  },
  {
    id: 17,
    eng: "enemy",
    trans: "[ энеми ]",
    rus: "враг",
    difficulty: "normal",
  },
  {
    id: 18,
    eng: "survive",
    trans: "[ сюрвайв ]",
    rus: "выжить",
    difficulty: "normal",
  },
  {
    id: 19,
    eng: "inspiration",
    trans: "[ инспирэйшн ]",
    rus: "вдохновление",
    difficulty: "normal",
  },
  {
    id: 20,
    eng: "ancient",
    trans: "[ эншнт ]",
    rus: "древний",
    difficulty: "normal",
  },
  {
    id: 21,
    eng: "bridge",
    trans: "[ бридж ]",
    rus: "мост",
    difficulty: "normal",
  },
  {
    id: 22,
    eng: "wide",
    trans: "[ вайд ]",
    rus: "широкий",
    difficulty: "normal",
  },
  {
    id: 23,
    eng: "narrow",
    trans: "[ нарроу ]",
    rus: "узкий",
    difficulty: "normal",
  },
  {
    id: 24,
    eng: "exeption",
    trans: "[ эксепшэн ]",
    rus: "исключение",
    difficulty: "normal",
  },
  {
    id: 25,
    eng: "value",
    trans: "[ валью ]",
    rus: "ценность, стоимость",
    difficulty: "normal",
  },
  {
    id: 26,
    eng: "offer",
    trans: "[ оффэр ]",
    rus: "предложение",
    difficulty: "normal",
  },
  {
    id: 27,
    eng: "refuse",
    trans: "[ рэфьюз ]",
    rus: "отказаться",
    difficulty: "normal",
  },
  {
    id: 28,
    eng: "church",
    trans: "[ чёрчь ]",
    rus: "церковь",
    difficulty: "normal",
  },
  {
    id: 29,
    eng: "approximately",
    trans: "[ аппроксимэйтли ]",
    rus: "примерно, приблизительно",
    difficulty: "normal",
  },
  {
    id: 30,
    eng: "earn",
    trans: "[ йорн ]",
    rus: "зарабатывать",
    difficulty: "normal",
  },
  {
    id: 31,
    eng: "spend",
    trans: "[ спэнд ]",
    rus: "тратить",
    difficulty: "normal",
  },
  {
    id: 32,
    eng: "judge",
    trans: "[ джадж ]",
    rus: "судья",
    difficulty: "normal",
  },
  {
    id: 33,
    eng: "rise",
    trans: "[ райз ]",
    rus: "подниматься, восходить",
    difficulty: "normal",
  },
  {
    id: 34,
    eng: "quiz",
    trans: "[ квиз ]",
    rus: "викторина",
    difficulty: "normal",
  },
  {
    id: 35,
    eng: "audience",
    trans: "[ одиенс ]",
    rus: "аудитория",
    difficulty: "normal",
  },
  {
    id: 36,
    eng: "reduce",
    trans: "[ рэдьюс ]",
    rus: "уменьшить",
    difficulty: "normal",
  },
  {
    id: 37,
    eng: "subject",
    trans: "[ сабджект ]",
    rus: "тема",
    difficulty: "normal",
  },
  {
    id: 38,
    eng: "several",
    trans: "[ сэверал ]",
    rus: "несколько",
    difficulty: "normal",
  },
  {
    id: 39,
    eng: "during",
    trans: "[ дьюрин ]",
    rus: "в течение",
    difficulty: "normal",
  },
  {
    id: 40,
    eng: "host",
    trans: "[ хост ]",
    rus: "ведущий, хозяин",
    difficulty: "normal",
  },
  {
    id: 41,
    eng: "create",
    trans: "[ криэйт ]",
    rus: "создать",
    difficulty: "normal",
  },
  {
    id: 42,
    eng: "ham",
    trans: "[ хэм ]",
    rus: "ветчина",
    difficulty: "normal",
  },
  {
    id: 43,
    eng: "incredibly",
    trans: "[ инкрэдибли ]",
    rus: "невероятно",
    difficulty: "normal",
  },
  {
    id: 44,
    eng: "temple",
    trans: "[ тэмпл ]",
    rus: "храм",
    difficulty: "normal",
  },
  {
    id: 45,
    eng: "common",
    trans: "[ коммон ]",
    rus: "общий, обычный",
    difficulty: "normal",
  },
  {
    id: 46,
    eng: "field",
    trans: "[ фиилд ]",
    rus: "поле",
    difficulty: "normal",
  },
  {
    id: 47,
    eng: "valley",
    trans: "[ валлэи ]",
    rus: "долина",
    difficulty: "normal",
  },
  {
    id: 48,
    eng: "shepherd",
    trans: "[ шэперд ]",
    rus: "пастух",
    difficulty: "normal",
  },
  {
    id: 49,
    eng: "hurry",
    trans: "[ харри ]",
    rus: "спешка",
    difficulty: "normal",
  },
  {
    id: 50,
    eng: "grave",
    trans: "[ грэйв ]",
    rus: "могила",
    difficulty: "normal",
  },
  {
    id: 51,
    eng: "unfortunately",
    trans: "[ анфорчунатли ]",
    rus: "к сожалению",
    difficulty: "normal",
  },
  {
    id: 52,
    eng: "entrance",
    trans: "[ энтренс ]",
    rus: "вход",
    difficulty: "normal",
  },
  {
    id: 53,
    eng: "argue",
    trans: "[ аргью ]",
    rus: "спорить",
    difficulty: "normal",
  },
  {
    id: 54,
    eng: "saint",
    trans: "[ сэинт ]",
    rus: "святой",
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

const message = new SpeechSynthesisUtterance();

// Speech Synthesis

function setTextMessage(text) {
  message.text = text;
  message.lang = "en-US";
}

function speakText() {
  speechSynthesis.speak(message);
}

// Inits
constructMain(currentIndex);
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

pronounceBtn.addEventListener("click", () => {
  setTextMessage(words[currentIndex].eng);
  speakText();
});

// sumbitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let word = {
//     id: words.length,
//     eng: addWord.value.toLowerCase(),
//     trans: addTranscription.value.toLowerCase(),
//     rus: addTranslation.value.toLowerCase(),
//     difficulty: "hard",
//   };

//   words.push(word);
//   constructList();
// });
