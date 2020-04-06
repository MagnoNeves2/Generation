// O automóvel faz 12km por 1L.
let tg = parseInt(prompt('Informe o tempo a ser gasto na viagem em horas(h).'));
let vm = parseInt(prompt('Informe a velocidade média (km/h) durante a viagem.'));
let distancia = tg * vm;
let lu = distancia / 12;

console.log(`Os valores são: ${vm}(Velocidade Média), ${tg}h(Tempo gasto na viagem), ${distancia}(Distância percorrida) e ${lu}(Quantidade de litros utilizados na viagem).`);
