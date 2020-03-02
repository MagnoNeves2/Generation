if(localStorage.texto){
    document.getElementById('frase').value.localStorage = texto;
};



let sla = () => {
    let fraseInserida = document.getElementById('frase').value;
    localStorage.setItem('texto', fraseInserida);
}

onchange = sla;
 


