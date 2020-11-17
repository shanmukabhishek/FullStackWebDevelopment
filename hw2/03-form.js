// Enter your code here
function handleSubmit(){
var name= document.getElementById("name").value;
var email= document.getElementById("email").value;
var comments= document.getElementById("comments").value;
var newsletter= document.getElementById("check").checked;

console.log("name : "+name);
console.log("email :"+email);
console.log("comments: "+comments);
console.log("newsletter :"+newsletter);
}
handleSubmit();


