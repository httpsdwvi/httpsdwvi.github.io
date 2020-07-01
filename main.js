function respMenu() {
    var a = document.getElementById("topnav");
    if (a.className === "topnav") {
      a.className += " responsive";
    } else {
      a.className = "topnav";
    }
  }

function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("click", function(){
  const back = event.target.closest('.active');
  if(back !== null) {
    backTop()
}
})

document.addEventListener("click", function(){
const iconShows = event.target.closest('.icon');
if(iconShows !== null) {
    respMenu();
}
}); 


