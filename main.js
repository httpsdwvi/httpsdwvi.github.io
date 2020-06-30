function respMenu() {
    var a = document.getElementById("topnav");
    if (a.className === "topnav") {
      a.className += " responsive";
    } else {
      a.className = "topnav";
    }
  }

document.addEventListener("click", function(rs){
const iconShows = event.target.closest('.icon');
if(iconShows !== null) {
    respMenu();
}
}); 


