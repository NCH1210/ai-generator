function displayAnswer(response) {
  new Typewriter("#output", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateOutput(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "to16932f9ae9f62c0a0504f6d6954afb";
  let prompt = `Generate a travel plan for ${instructionsInput.value}`;
  let context =
    "You are an experienced traveller and know the latest trends and what sights to visit. Recommend the user plans and itineraries based on the preferred destination, required duration and interests.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);
}
let inputFormElement = document.querySelector("#input-form");
inputFormElement.addEventListener("submit", generateOutput);
