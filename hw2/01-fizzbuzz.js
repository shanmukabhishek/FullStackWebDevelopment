// Enter your code here
function fizzbuzz(){
var str = document.getElementById("results");
for (var i=1; i<=100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      str.innerHTML += "<div>fizzbuzz</div>";
    } else if (i % 3 == 0) {
      str.innerHTML += "<div>fizz</div>";
    } else if (i % 5 == 0) {
      str.innerHTML += "<div>buzz</div>";
    } else {
      str.innerHTML += "<div>" + i + "</div>";
    }
}
}
fizzbuzz();
