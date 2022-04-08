var equation = "";
var ans;
function sign(e) {
    equation = equation + document.getElementsByClassName("sign")[e].value;
    document.getElementById("textbox").value = equation;
}
function answer() {
    ans = eval(document.getElementById("textbox").value)
    document.getElementById("textbox").value = equation + "=" + ans;
}
function AC() {
    document.getElementById("textbox").value = "";
    equation = "";
}
function ANS() {
    document.getElementById("textbox").value = "=" + ans;
}