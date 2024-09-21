function generateOutput(event) {
  event.preventDefault();

  let outputElement = document.querySelector("#output");
  new Typewriter("#output", {
    strings: "Answer",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
let inputFormElement = document.querySelector("#input-form");
inputFormElement.addEventListener("submit", generateOutput);
