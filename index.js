let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      '" The best way to find yourself is to lose yourself in the service of others"',
    person: "Mahatma Gandhi",
  },
  {
    quote:
      '"If you want to live a happy life, tie it to a goal, not to people or things"',
    person: "Albert Einstein",
  },
  {
    quote:
      '"All his best, man is the noblest of all animals; seperated from law and justice he is the worst"',
    person: "Aristotle",
  },
  {
    quote:
      '"Your time is limited, so dont waste it living someone elses life "',
    person: '"Steve Jobs',
  },
  {
    quote:
      '"Tell me and I forget, Teach me and i will remember. Involve me and I learn"',
    person: "Benjamin Franklin",
  },
  {
    quote:
      '"If you look at what you have in life, you will always have more. If you look at what you dont have in life, youll never have enough"',
    person: "Oprah Winfrey",
  },
  {
    quote:
      '"It does not matter how slowly you go, as long as you do not stop."',
    person: "Coonfucius",
  },
  {
    quote:
      '"Our lives begins to end the day we become silent about things that matter."',
    person: "Martin Luther King Jr",
  },
  {
    quote:
      '"Remember that not getting what you want is sometimes a wonderful stroke of luck"',
    person: "Dalai Lama",
  },
  {
    quote: '"The journey of a thousand miles begins with one step"',
    person: "Lao Tzu",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
  console.log("e gou");
});

//

let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

///

const accordion = document.getElementsByClassName("content-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    this.classList.toogle("active");
    console.log("hey");
  });
}
