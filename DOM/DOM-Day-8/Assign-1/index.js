async function getUserDetails() {
  try {
    let users = await fetch("https://api.github.com/users");
    users = await users.json();
    // console.log(users);

    userDataDisplay(users);

  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Always runs Finally");
  }
}
getUserDetails();


function userDataDisplay(users){

  let table = document.createElement("table");

    let thead = document.createElement("thead");

    let headtr = document.createElement("tr");
    let serialth = document.createElement("th");
    serialth.innerText = "Sl.No.";

    let nameth = document.createElement("th");
    nameth.innerText = "Name";

    let imgth = document.createElement("th");
    imgth.innerText = "IMAGE";

    let typeth = document.createElement("th");
    typeth.innerText = "Type";

    let tbody = document.createElement("tbody");

    document.body.prepend(table);

    headtr.append(serialth, nameth, imgth, typeth);
    thead.append(headtr);

    table.append(thead, tbody);

    users.map(({ id, avatar_url, login, type }) => {

      let bodytr = document.createElement("tr");

      let sltd = document.createElement("td");
      sltd.innerText = id+".";

      let nametd = document.createElement("td");
      nametd.innerText = login.toUpperCase();

      let imgtd = document.createElement("td");

      let img = document.createElement("img");
      img.src = avatar_url;
      img.id = "tdImg";
      imgtd.append(img);

      let typetd = document.createElement("td");
      typetd.innerText = type;
      
      bodytr.append(sltd, nametd, imgtd,typetd);
      tbody.append(bodytr);
    });

}

