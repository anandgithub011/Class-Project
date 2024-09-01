async function displayMovieCard(searchName) {
  let url = `https://www.omdbapi.com/?s=${searchName}&apikey=f5445ed7`;
  try {
    let movies = await fetch(`${url}`);
    movies = await movies.json();

    movieCard(movies);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("Always Run Finally");
  }
}

let formInp = document.getElementById("form");
let searchMovieName = document.getElementById("search-movie-name");
let c = 0;
formInp.addEventListener("submit", (e) => {
  e.preventDefault();
  displayMovieCard(searchMovieName.value.trim());
  c++;
//   formInp.reset();
});

let divContainer = document.createElement("div");
divContainer.id = "container";

let divChildContainer = document.createElement("div");
divChildContainer.id = "child-container";

divContainer.append(divChildContainer);
document.body.append(divContainer);

let msgDisplay = document.getElementById("msg-display");
let msgParent = document.getElementById("msg-parent");

let emoji = ["🥲", "🥹", "😢", "😭", "😿","😔","🥺","😓","😞"];

function movieCard(movies) {
  let movieCardS = movies.Search;
//   console.log()

  divChildContainer.innerHTML = "";
//   msgDisplay.innerText = "";

  if (movies.Response !== "True") {
    if (c > emoji.length-1) {
      c = 0;
      msgDisplay.innerText = `${emoji[c]} Sorry..! ${searchMovieName.value.trim()} movie.. not found!!!`;
      msgParent.style.display = "block";
      formInp.reset();
    } else {
      msgDisplay.innerText = `${emoji[c]} Sorry..! ${searchMovieName.value.trim()} movie.. not found!!!`;
      msgParent.style.display = "block";
      formInp.reset();
    }
  } else {
    msgParent.style.display = "none";
    movieCardS.map(({ Title, Year, Poster }) => {
      let movieTitle = document.createElement("h3");

      let movieYear = document.createElement("h4");

      let divCard = document.createElement("div");
      divCard.id = "card";

      let divTitle = document.createElement("div");
      divTitle.id = "divTitle";

      let divImgCard = document.createElement("div");
      divImgCard.id = "img-card";

      let img = document.createElement("img");
      img.src = Poster;

      let divCardDetails = document.createElement("div");
      divCardDetails.id = "card-details";

      movieTitle.innerText = Title;
      movieYear.innerText = `Year of Relaese: ${Year}`;

      divCardDetails.append(movieYear);
      divImgCard.append(img);
      divTitle.append(movieTitle);
      divCard.append(divTitle, divImgCard, divCardDetails);
      divChildContainer.append(divCard);
    });
    formInp.reset();
  }
}
movieCard();
