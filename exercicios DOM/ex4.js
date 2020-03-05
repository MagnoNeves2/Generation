let resul = document.querySelector('a');

getAttributes = () => {
    resul.type;
    resul.href;
    resul.hreflang;
    resul.rel;
    resul.target;
    let resultado = [resul.type, resul.href, resul.hreflang, resul.rel, resul.target];
    document.write(`O resultado é: ${resultado}`);
};

