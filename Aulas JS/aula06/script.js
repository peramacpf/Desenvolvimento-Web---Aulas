let cad = document.getElementById("cad");

document.addEventListener('submit', function(event) {

    event.preventDefault();

    let palavra = document.getElementById("palavra").value.trim();
    document.getElementById("palavra").value = "";

    let div = document.createElement("div");
    div.classList.add("word");
    div.textContent = palavra;
    document.getElementById("palavras").appendChild(div);
});

let buscar = document.getElementById("buscar");
buscar.onkeyup = function() {
    
    let result = buscar.value.toLowerCase();
    let words = document.querySelectorAll(".word");

    words.forEach(word => {
        if (word.textContent.toLowerCase().includes(result)) {
            word.style.display = "block";
        } else {
            word.style.display = "none";
        }
    })

}