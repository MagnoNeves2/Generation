// Relógio só que nesse estilo é necessáio ficar atualizando a tela
/* let currentTime = document.getElementById('currtime');

function updateTime() {
let timeNow = new Date(),
    hh = timeNow.getHours(),
    mm = timeNow.getMinutes(),
    ss = timeNow.getSeconds()

    currentTime.innerHTML = hh + '<span>:</span>' + mm + '<span>:</span>' + ss + '<span>:</span>'
    setTimeout(() => {
    }, (updateTime, 1000));
};

function setZero(value){

    let _value = '0' + value;
    let _newValue = '';

    for(let i = _value.length - 1; i > _value.length - 3; i --) {
        _newValue = _value[i] + _newValue;
    }
    return _newValue;
}

// updateTime(); */




// Relógio que atualiza sozinho
let currentTime = document.getElementById('currtime');
function updateTime() {
    let timeNow = new Date(),
        hh = timeNow.getHours(),
        mm = timeNow.getMinutes(),
        ss = timeNow.getSeconds()


    // condition ? expre1 : expre2
    currentTime.innerHTML = setZero(hh) + "<span>:</span>" + setZero(mm) + "<span>:</span>" + (String(ss).length == 1 ? "0" : "") + ss;

    setTimeout(updateTime, 1000);
}

function setZero(value) {
    'use strict';
    let _value = '0' + value;
    let _newValue = '';

    for (let i = _value.length - 1; i > _value.length - 3; i--) {
        _newValue = _value[i] + _newValue;
    }

    try {
        let calculo = 10 / 0;
        console.log(calculo);
    }
    catch (e) {
        console.log('deu erro');
    }
    finally {
        console.log('passou aqui');
    }
    return _newValue;
}

updateTime();

