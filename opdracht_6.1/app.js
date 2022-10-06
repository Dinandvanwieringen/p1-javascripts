function kleur_aanpassen() {
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").innerText = "Inhoud Aangepast!"
}
window.setTimeout(kleur_aanpassen, 3000);
