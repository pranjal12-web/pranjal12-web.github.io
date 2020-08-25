function quiz(){
    console.log("start quiz");
    alert("Hey!!lets start the quiz");
    var a1 = prompt("How many bones are there in the human body?");
    var score = 0;
    if(a1=="206"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a2 = prompt("Capital of India");
    a2 = a2.toLowerCase();
    a2 = a2.replace(/\s+/g, " ");
    console.log(a2);
    if(a2=="new delhi"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a3 = prompt("Capital of Australia");
    a3 = a3.toLowerCase();
    if(a3=="canberra"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a4 = prompt("Capital of Maharashtra");
    a4 = a4.toLowerCase();
    if(a4=="mumbai"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a5 = prompt("Capital of Assam");
    a5 = a5.toLowerCase();
    if(a5=="dispur"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a6 = prompt("When is independence day of India celebrated in august ?");
    a6 = a6.toLowerCase();
    a2 = a2.replace(/\s+/g, " ");
    if(a6=="15"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a7 = prompt("When is republic day of India celebrated in january?");
    a7 = a7.toLowerCase();
    a2 = a2.replace(/\s+/g, " ");
    if(a5=="26"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a8 = prompt("Capital of Karnataka");
    a8 = a8.toLowerCase();
    if(a5=="bangalore"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a9 = prompt("Capital of Germany");
    a9 = a9.toLowerCase();
    if(a5=="berlin"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    var a10 = prompt("Capital of U.S ");
    a10 = a10.toLowerCase();
    if(a5=="washington"){
        alert("correct answer");
        score++;
    }
    else{
        alert("wrong answer");
    }
    alert("YOUR SCORE IS "+score+" out of 10");
}
