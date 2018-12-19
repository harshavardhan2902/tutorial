function test(){
    divContainer = document.createElement("d");
    divHeader = document.createElement("header"); 
    var result1 = divContainer.appendChild(divHeader);
    divText = document.createTextNode("welcome");
    var result2 = result1.appendChild(divText);
    divSection = document.createElement("section");
    va
    console.log(divContainer);
}
test();