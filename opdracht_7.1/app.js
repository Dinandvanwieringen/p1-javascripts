let budget = 100
let product = 60
let person = prompt("Wat is je budget?")

function Budget() {
if (person > product) {
    document.getElementById("text").innerText = "U heeft genoeg geld!";
    document.getElementById("text").style.color = "green";
} else {
    document.getElementById("text").innerText = "Helaas, te weinig geldt";
    document.getElementById("text").style.color = "red";
}
}
