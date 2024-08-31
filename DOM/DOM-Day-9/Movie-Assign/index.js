async function movieData() {
  try {
    let movies = await fetch(
      "https://www.omdbapi.com/?s=avengers&apikey=f5445ed7"
    );
    movies = await movies.json();

    getMovieData(movies);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Always Run Finaaly");
  }
}

movieData();

function getMovieData(movieCard) {
  let movieCardData = movieCard.Search;

  let divContainer = document.createElement("div");
  divContainer.id = "container";

  let divChildContainer = document.createElement("div");
  divChildContainer.id = "child-container";

  //   console.log(movieCardData);

  movieCardData.map(({ Title, Poster, Year }) => {
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
    divContainer.append(divChildContainer);
    document.body.prepend(divContainer);
  });
}
