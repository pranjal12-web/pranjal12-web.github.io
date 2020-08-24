console.log("connected");
function add(){
    var n1 = document.getElementById("one").value;
    var n2 = document.getElementById("two").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    console.log(n1);
    console.log(n2);
    var result = n1+n2;
    document.getElementById("res").innerHTML= result;
}
function sub(){
    var n1 = document.getElementById("one").value;
    var n2 = document.getElementById("two").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    var result = n1-n2
    document.getElementById("res").innerHTML= result;
}
function mul(){
    var n1 = document.getElementById("one").value;
    var n2 = document.getElementById("two").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    var result = n1*n2
    document.getElementById("res").innerHTML= result;

}
function div(){
    var n1 = document.getElementById("one").value;
var n2 = document.getElementById("two").value;
n1 = parseInt(n1);
n2 = parseInt(n2);
var result = n1/n2
document.getElementById("res").innerHTML= result;


}
function mod(){
    var n1 = document.getElementById("one").value;
    var n2 = document.getElementById("two").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    var result = n1%n2
    document.getElementById("res").innerHTML= result;

}


