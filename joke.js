const jokeButton = document.querySelector('.newJoke');

// A Dad joke fetch
async function fetchDadJoke() {
  let joke = "";
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  joke = await res.text();
  console.log(joke);
  document.getElementById('jokeOutput').innerHTML = joke;
  return joke;
}

// hook up event listeners
jokeButton.addEventListener('click', fetchDadJoke);

//fetchDadJoke();
