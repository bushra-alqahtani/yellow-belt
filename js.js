
   var element = document.querySelector("#text");
function alertmessage(element){
  
    alert(" you are searching for!"+ element.value);
}

function hide( e){
    var element = document.querySelector("#remove") 
    element.remove();
}

var count1=68;
var countElement1 = document.querySelector("#count1");
console.log(countElement1);

function add1() {
    count1++;
    countElement1.innerHTML = count1;
    console.log(count1);
}
var count2=212;
var countElement2 = document.querySelector("#count2");
console.log(countElement2);

function add2() {
    count2++;
    countElement2.innerHTML = count2;
    console.log(count2);
}




var count3=32;
var countElement3 = document.querySelector("#count3");
console.log(countElement3);

function add3() {
    count3++;
    countElement3.innerHTML = count3;
    console.log(count3);
}