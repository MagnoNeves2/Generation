let nomeInformado = document.getElementById('form34');
let eamilInformado = document.getElementById('form29');
let telefoneInformado = document.getElementById('form32');
let mensagemInformada = document.getElementById('form8');


document.getElementById('btnEnviar').addEventListener('click', () => {
    let nome = nomeInformado.value;
    let email = eamilInformado.value;
    let telefone = telefoneInformado.value;
    let mensagem = mensagemInformada.value;
    let comprimentoNome = nome.length;
    let comprimentoEmail = email.length;
    let comprimentoMensagem = mensagem.length;

    function mostra(frase) {
        console.log("Nome: " + nome + " " + "Email: " + email + "Telefone: " + telefone + " " + "Mensagem: " + mensagem);
    }

    validarNome();
    validarMensagem();

    function validarNome () {
        if (!(comprimentoNome > 1)) {
            document.getElementById('alert-name').innerHTML = "Campo vazio, por favor preencha-o!";
            document.getElementById("alert-name").style.visibility = "visible";
        }
    
        else{
            document.getElementById('alert-name').style.visibility = 'hidden';
        }
    }

    function validarMensagem () {
        if (!(comprimentoMensagem > 1)) {
            document.getElementById('alert-message').innerHTML = "Campo vazio, por favor preencha-o!";
            document.getElementById("alert-message").style.visibility = "visible";
        }
    
        else{
            document.getElementById("alert-message").style.visibility = "hidden";
        }
    }
    
    if (comprimentoNome < 1) {
        document.getElementById('alert-name').innerHTML = "Campo vazio, por favor preencha-o!";
        document.getElementById("alert-name").style.visibility = "visible";
    }

    if (!(comprimentoEmail > 1)) {
        document.getElementById('alert-email').innerHTML = "Campo vazio, por favor preencha-o!";
        document.getElementById("alert-email").style.visibility = "visible";
    }

    if (!(comprimentoMensagem > 1)) {
        document.getElementById('alert-message').innerHTML = "Campo vazio, por favor preencha-o!";
        document.getElementById("alert-message").style.visibility = "visible";
    }

    else if (!email.includes('@')) {
        document.getElementById("alert-email").innerHTML = "Está faltando o @ - Preencha-o!";
        document.getElementById("alert-email").style.visibility = "visible";
    }

    else if (!email.endsWith('.com') && !email.endsWith('.br') && !email.endsWith('.co') && !email.endsWith('.org') && !email.endsWith('.net')) {
        document.getElementById("alert-email").innerHTML = "Está faltando o final do email (.com), (.br), (.co), (.org), (.net) - Preencha-o!";
        document.getElementById("alert-email").style.visibility = "visible";
    }

    else {
        document.getElementById("alert-email").style.visibility = "hidden";
        document.getElementById('alert-name').style.visibility = 'hidden';
        document.getElementById("alert-email").style.visibility = "hidden";
        document.getElementById("alert-message").style.visibility = "hidden";
        return mostra();
    }

});





