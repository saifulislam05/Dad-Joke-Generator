const url = "https://api.api-ninjas.com/v1/jokes?limit=1";
const jokeOutput = document.getElementById("joke-output");
const loading = document.getElementById("loading");
const jokeBtn = document.getElementById("jokeBtn");
const shareBtn = document.getElementById("shareBtn");
const themeBtn = document.getElementsByClassName("theme-controller")[0];

const fetchJoke = async () => {
  loading.classList.remove("hidden");
  jokeOutput.classList.add("hidden")
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      }
    });
    const data = await response.json();

    // Display the fetched joke in a creative way
    jokeOutput.innerHTML = `<p class="text-success text-xl">"${data[0].joke}"</p>`;
  } catch (error) {
    // Handle errors, display an error message
    jokeOutput.innerHTML = `<p class="text-xl font-semibold text-warning">Oops! Something went wrong.</p>`;
  }
  finally {
    loading.classList.add("hidden");
  jokeOutput.classList.remove("hidden");

  }
};
fetchJoke();

jokeBtn.addEventListener("click", fetchJoke);


shareBtn.addEventListener("click", () => {
  alert("Sharing the joke!"); // 
});

