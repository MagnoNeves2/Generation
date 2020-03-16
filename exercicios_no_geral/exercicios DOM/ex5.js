function fCelulas(valor1) {
    this.Celula1 = valor1;
};

let celulas = new fCelulas("Magão");

addItem = (texto) => {
    let tabela = document.getElementById('sampleTable').insertRow(0);
    let espaco = document.createElement('tr');
    let celula = document.createElement('td');
    let celula2 = tabela.insertCell()

    celula.appendChild(document.createTextNode(texto));
    espaco.appendChild(celula, celula2);
    tabela.appendChild(espaco);
};


function insert_Row() {
    addItem(celulas.Celula1);
};


// function insert_Row()
// {
// var x=document.getElementById('sampleTable').insertRow(0);
// var y = x.insertCell(0);
// var z = x.insertCell(1);
// y.innerHTML="New Cell1";
// z.innerHTML="New Cell2";
// }
