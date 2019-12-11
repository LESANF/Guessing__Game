// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const scale = document.querySelector("#js-scale"),
  form = document.querySelector("#js-form"),
  range = form.querySelector("#js-range"),
  text = document.querySelector("#js-text"),
  scoring = document.querySelector("#js-scoring"),
  result = document.querySelector("#js-result"),
  button = document.querySelector("#js-playBtn"),
  span = document.querySelector("#js-spanScale");

const WIN = "win";

let number = "";
let ranNumScale = "";
span.innerHTML = `<span style="font-size:120px;">${range.value}</span>`;

range.addEventListener("input", e => {
  const rangeValue = e.target.value;
  ranNumScale = rangeValue;
  span.innerHTML = `<span style="font-size:120px;">${rangeValue}</span>`;
});

button.addEventListener("click", () => {
  let ranNum = Math.floor(Math.random() * ranNumScale);
  scoring.innerText = `You chose: ${number}, Machine chose: ${ranNum}`;

  if (ranNum !== parseInt(number)) {
    result.classList.remove(WIN);
    result.innerText = `You lost!`;
  } else {
    result.classList.add(WIN);
    result.innerText = `You Win`;
  }
});

text.addEventListener("input", e => {
  const guessNum = e.target.value;
  number = guessNum;
});
