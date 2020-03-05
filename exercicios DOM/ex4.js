let resul = document.querySelector('a');

getAttributes = () => {
    resul.type;
    resul.href;
    resul.hreflang;
    resul.rel;
    resul.target;
    let resultado = [resul.type, '&nbsp;' + resul.href, '&nbsp;' + resul.hreflang, '&nbsp;' + resul.rel, '&nbsp;' + resul.target];
    document.write(`O resultado será: ${resultado}`);
};

