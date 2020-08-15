
//document.body.addEventListener("scroll", getScrollCoordinate);
/*
function getScrollCoordinate() {
    document.getElementsByClassName("university").innerHTML = "asdasd";
    console.log("test");
}
  
let scrolling = false;
 
window.onscroll = function() {
    scrolling = true;
};

 
setInterval( () => {
  if ( scrolling ) {
    scrolling = false;
    // Do your thang!
    getScrollCoordinate();
  }
}, 250 );

*/

window.onscroll = function() {myFunction()};

function myFunction() {
    onsole.log(document.documentElement.scrollTop);
}


console.log(document.documentElement.scrollTop);