///////////////////// Slide Show ///////////////////////////////////////////
import navbar from "./navbar.js";
// console.log(navbar);
import { append, slideShow } from "./append.js";
let nav = document.querySelector(".navbar");

nav.innerHTML = navbar();

slideShow();

///// promise and appending movies data ///////////////////////////
//let Movies;
window.movieData = async () => {
  try {
    let res = await fetch(
      `https://imdb-api.com/en/API/MostPopularMovies/k_zm2cbvkk`
    );
    let data = await res.json();
    let Movies = data.items;
    //console.log(data.items);
    let getmeData = new Promise(function (resolve, reject) {
      setTimeout(() => {
        let datas = Movies;
        // console.log(datas);
        if (datas != null) {
          resolve(datas);
        } else {
          reject("ERR not having data");
        }
      }, 1000);
    });

    async function Main() {
      try {
        let response = await getmeData;
        append(response);
      } catch (error) {
        console.log(error);
      }
    }
    Main();
  } catch (error) {
    console.log(error);
  }
};

movieData();

//////////////// Search Movies ////////////////////////////////////////

window.search = async () => {
  try {
    let query = document.getElementById("query").value;
    console.log(query);
    let res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=e06dca83&s=${query}`
    );
    let data = await res.json();
    append(data.Search);
    console.log(data.Search);
  } catch (error) {
    console.log(error);
  }
};

///////////////////////// Sorting Movies ///////////////////////////

window.HL = () => {
  // let data = JSON.parse(localStorage.getItem("Movie"));
  Movies.sort((a, b) => b.imDbRating - a.imDbRating);
  append(Movies);
};

window.LH = () => {
  Movies.sort((a, b) => a.imDbRating - b.imDbRating);
  append(Movies);
};

window.rank = () => {
  Movies.sort((a, b) => a.rank - b.rank);
  append(Movies);
};

let id;
window.debounce = (func, delay) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
};
