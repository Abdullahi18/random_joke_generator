// alert("working")

const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        joke.textContent = `${item.joke}`
    })
}

btn.addEventListener("click", getJoke)

getJoke();