import navbar from "./navbar.js";
// console.log(navbar);
let nav = document.querySelector(".navbar");

nav.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("details")) || [];
//console.log(data);
function append(data) {
  let container = document.querySelector("#container");
  container.innerHTML = null;
  data.forEach(function (ele) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.image || ele.Poster;
    let name = document.createElement("h1");
    name.innerHTML = ele.fullTitle || ele.Title;
    let rank = document.createElement("h2");
    rank.innerHTML = `Rank - ${ele.rank}`;
    rank.style.color = "orange";
    let rating = document.createElement("h3");
    rating.innerHTML = `Rating - ${ele.imDbRating}`;
    let year = document.createElement("h1");
    year.innerHTML = `Year - ${ele.year}`;
    let crew = document.createElement("h3");
    crew.innerHTML = `Crew - ${ele.crew}`;
    div.append(img, name, year, rank, rating, crew);

    div.style.cursor = "pointer";
    container.append(div);
  });
}
append(data);
