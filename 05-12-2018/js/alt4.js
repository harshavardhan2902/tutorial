// // function test(){
// //     var result = document.getElementById("demo").innerWidth;
// //     console.log(result);
// // }
// function test(){
//     var para = document.createElement("p");
//     var paraText = document.createTextNode("this is paragraph");
//     var result = para.appendChild(paraText);

//     console.log(para);
// }
// test();
function test(){
    var divElement = document.createElement("d");
    var paraElement = document.createElement("p");
    var result = divElement.appendChild(paraElement);
    var spanElement = document.createElement("span");
    var result1 = result.appendChild(spanElement);
    var textElement = document.createTextNode("welcome");
    var result2 = result1.appendChild(textElement);
    console.log(divElement);
    alert(result2.span.i);


}
test();