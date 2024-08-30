async function getProductDetails() {
  try {
    let products = await fetch("https://fakestoreapi.com/products");

    products = await products.json();

    console.log(products);
    displayCards(products);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("Always Runs Finally");
  }
}

getProductDetails();

function displayCards(card) {
  let divContainer = document.createElement("div");
  divContainer.id = "container";

  let divChildContainer = document.createElement("div");
  divChildContainer.id = "child-container";

  card.map(({ title, rating: { rate, count }, price, image, description }) => {
    // console.log(rating);

    let productTitle = document.createElement("h4");


    let productPrice = document.createElement("h3");

    let productRating = document.createElement("p");
    productRating.id = "productRating"

    let desc = document.createElement("p");
    desc.id = "desc";

    let divCard = document.createElement("div");
    divCard.id = "card";

    let divImgCard = document.createElement("div");
    divImgCard.id = "img-card";

    let img = document.createElement("img");
    img.src = image;

    let divCardDetails = document.createElement("div");
    divCardDetails.id = "card-details";

    let buyBtn = document.createElement("button")
    buyBtn.id = "buybtn"
    buyBtn.innerText = "Add To Cart"

    productTitle.innerText = `${title}`;
    desc.innerText = description;
    productRating.innerText = `Rating: ${rate}⭐`;
    productPrice.innerText = `$ ${price}`;

    divCardDetails.append(productTitle, productPrice, productRating, desc,buyBtn);
    divImgCard.append(img);
    divCard.append(divImgCard, divCardDetails);
    divChildContainer.append(divCard);
    divContainer.append(divChildContainer);
    document.body.append(divContainer);
  });
}



{/* <div id="container">
    <div id="child-container">
        <div class="card">
            <div id="img-card">
                <img src="" alt="">
            </div>
            <div id="card-details">
                <h2>Title</h2>
                <p>Price</p>
                <p>pRating</p>
                <p>Description</p>
            </div>
        </div>
    </div>
</div>  */}
