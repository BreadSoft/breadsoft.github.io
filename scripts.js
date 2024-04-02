//Binding fucntions
function fireTheGrill() {
  console.log("burger the burger 2");
  var topBar = document.getElementById("bsft-top-bar");
  if (topBar.classList.contains("expand")) {
    topBar.classList.remove("expand");
  } else {
    topBar.classList.add("expand");
  }
}

//On DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  // var hamburger = document.getElementById("bsft-hamburger");
  // hamburger.onclick = () => {
  //   console.log("burger the burger");
  // };
  var jumpItems = document.getElementsByClassName("bsft-jump-item");
  for (let index = 0; index < jumpItems.length; index++) {
    const element = jumpItems[index];
    element.onclick = fireTheGrill;
  }
});
