let prev = document.getElementById('prev');
prev.addEventListener('submit', function(event){
    
    event.preventDefault();

    let pais = document.getElementById('pais').value;
    const apiURL = `https://restcountries.com/v3.1/name/${pais}`;
    
    fetch(apiURL).then(response => response.json()).then(data => {
        console.log(data[0]);
        const idioma = Object.values(data[0].languages).join(', ');
        if (data[0]) {
            document.getElementById('nome_pais').textContent = `País: ${data[0].name.common}`;
            document.getElementById('capital').textContent = `Capital: ${data[0].capital}`;
            document.getElementById('moeda').textContent = `Moeda: ${data[0].currencies[Object.keys(data[0].currencies)].name}`;
            document.getElementById('idioma').textContent = `Idioma: ${idioma}`;
            document.getElementById('popu').textContent = `Popualação: ${data[0].population}`;
            document.getElementById('img').innerHTML = `<img src="${data[0].flags.png}" alt="Bandeira do ${pais}">`;
            
        } else {
            alert("Cidade não encontrada!");
        }
    }).catch(error => {
        alert("Erro de rede:!"+ error);
    })

});
