let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");


// EXEMPLO1
btn.addEventListener("click", () => {
    alert("Patrick, trouxe comida?")
})
// btn.addEventListener("click", () => {
//     alert("Patrick, trouxe comida?")
// })


// EXEMPLO2
// btn.addEventListener("click", () => {
//     window.location.href = ("https://www.magoosimports.com.br")
// });

// EXEMPLO3
btn.addEventListener("click", () => {
    window.open("https://www.magoosimports.com.br", "_blank");
});

// EXEMPLO que atribui uma cor
// btn1.addEventListener("click", () => {
//     document.body.style.backgroundColor = "red";
// })

// btn1.addEventListener("mouseout", () => {
//     document.body.style.backgroundColor = "white";
// })
btn1.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
})

btn1.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "white";
})

// Arrow Function
const ShowMessage = () => {

    alert("Message 1");
}

// const lambda = anonymous function

const showMessage2 = function () {
    alert("Message 2");
}

// tradicional

function ShowMessage3() {
    alert("Message 3");
}


let n1 = 10;
let n2 = 15;

const soma = (n1, n2) => {

}




// () => {} significa uma Arrow Function, é a mesma coisa da função entretanto sem atribuir um nome para ela e simplifica o código.
// no caso de AddEventListener, ele exige dois parâmetros a serem informados, no caso, o evento e o que acontecerá após a o evento, ou seja, a ação. -> AddEventListener ("Evento", "Ação")