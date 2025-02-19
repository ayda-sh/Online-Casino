function menu() {
    const resNav = document.getElementById("navbar");
    if (resNav.className === "navbar") {
        resNav.className += " responsive";
    } else {
        resNav.className = "navbar";
    }
  }