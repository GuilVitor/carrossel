





const url = "https://api.api-futebol.com.br/v1/ao-vivo"

// let headers = new Headers();

// headers.append('Athorization', 'Bearer test_7d3235ddea58b531a4a414a266cc16')
// console.log(headers);

const options = {
  headers: {'Authorization' : 'Bearer test_7d3235ddea58b531a4a414a266cc16'},
}

function buscarPartidas() {
  fetch(url, options)
  .then(resposta => {
    resposta.json()
    .then(obj => {
    console.log(obj)
    mostrarPartidas(obj);
  })
})
.catch()
}


function mostrarPartidas(partidas) {
  console.log(partidas, "Isso é partidas")

  for (i=0; i<partidas.length; i++){
    var placar = document.createElement('h3');
    placar.innerText = partidas[i].placar;
    var escudoMandante = document.createElement('img');
    escudoMandante.setAttribute('src', partidas[i].time_mandante.escudo)
    var escudovisitante = document.createElement('img');
    escudovisitante.setAttribute('src',partidas[i].time_visitante.escudo)
    var horas = document.createElement('h3');
    horas.innerText = partidas[i].hora_realizacao
    document.getElementById('partidasAoVivo').append(placar, escudoMandante,escudovisitante,horas);
  }
}

buscarPartidas();






const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel (){
  idx++

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 350}px)`;
}

setInterval(carrossel, 5000);

