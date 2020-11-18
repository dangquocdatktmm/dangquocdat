var colors = ["orange","red","green",]
var i = 0;
function click1(){
    var box = document.getElementById("box");
    i++;
    box.style.background = colors[i%6];
}
function hover1(){
    var box = document.getElementById("box");
    box.style.background = "red";
}
function key1(e) {
    var v = e.value;
    //console.log(v);
}
function key2(e) {
    var v = e.value;
    //console.log(v);
    var k = event.keyCode;
    console.log(k);
}
function key3(e){
    var v = e.value;
    console.log(v);
}
function change1(e) {
    var v = e.value;
    console.log(v)
}