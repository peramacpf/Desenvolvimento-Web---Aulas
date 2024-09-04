let prev = document.getElementById('prev');
prev.addEventListener('submit', function(event){
    
    event.preventDefault();

    let cidade = document.getElementById('cidade').value;
    const apiKey = 'd48949b31cb84d08b9a171053243008';
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`;
    
    fetch(apiURL).then(response => response.json()).then(data => {
        if (data.current) {
            document.getElementById('city').textContent = `Cidade: ${data.location.name}`;
            document.getElementById('local').textContent = `Estado: ${data.location.region}, ${data.location.country}`;
            document.getElementById('temp').textContent = `Temperatura: ${data.current.temp_c} ºC`;
            document.getElementById('condicoes').textContent = `Condições: ${data.current.condition.text}`;
            document.getElementById('img').innerHTML = `<img src="${data.current.condition.icon}" alt="Condições">`;
        } else {
            alert("Cidade não encontrada!");
        }
    }).catch(error => {
        alert("Erro de rede:!"+ error);
    })

});
