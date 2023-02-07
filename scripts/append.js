const append = (data) => {
  let container = document.querySelector("#movieData");
  container.innerHTML = null;
  data.forEach(function (ele, i) {
    if (i < 30) {
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.src = ele.image || ele.Poster;
      let name = document.createElement("h3");
      name.innerHTML = ele.fullTitle || ele.Title;
      let rating = document.createElement("p");
      rating.innerHTML = ele.imDbRating || ele.Year;
      rating.style.color = "orange";
      div.append(img, name, rating);
      div.addEventListener("click", function () {
        let details = [];
        details.push(ele);
        localStorage.setItem("details", JSON.stringify(details));
        window.location.href = "details.html";
      });
      div.style.cursor = "pointer";
      container.append(div);
    }
  });
};

/////////////////// slider  ////////////////////////////
const slideShow = () => {
  let slides = [
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9410/1329410-h-5dfdad21713e`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4886/1334886-h-1f45136cfdbe`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/905/840905-h`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9475/1339475-h-990c355522f1`,
  ];
  let i = 0;
  let div = document.getElementById("corosoul");
  div.innerHTML = null;
  let img = document.createElement("img");
  img.src = slides[0];
  div.append(img);
  i++;

  setInterval((ele) => {
    if (i == slides.length) {
      i = 0;
    }
    img.src = slides[i];
    div.append(img);
    i++;
  }, 3000);
};

export { append, slideShow };
