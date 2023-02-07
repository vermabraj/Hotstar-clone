const navbar = () => {
  return `<div id="menu">
    <img
      
      src="https://cdn-icons-png.flaticon.com/512/7711/7711100.png"
      alt=""
    />
  </div>
  <div id="logo">
    <img
      src="https://cdn.sanity.io/images/fajmtaq4/production/c536373939a20d68e95d21cb3b6e1c5dfa4897d0-1280x1280.png"
      alt=""
    />
  </div>
  <div id="nav1">
    <div class="nav">TV</div>
    <div class="nav">Movies</div>
    <div class="nav">Sports</div>
    <div class="nav">Disney+</div>
    <div class="nav" id="kids">KIDS</div>
  </div>
  <div class="nav2">
    <input
      type="text"
      placeholder="SEARCH"
      oninput="debounce(search,1000)"
      id="query"
    />
    <button id="subscribe">SUBSCRIBE</button>
    <button id="login"><a href="login-api.html"> LOGIN</a></button>
  </div>`;
};

export default navbar;
