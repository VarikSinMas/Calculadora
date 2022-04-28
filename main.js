const hijo = document.querySelector('.hijo');
const body = document.body;
const container2 = document.querySelector('.container2');
let display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn22');
const del = document.querySelector('#Del');
const reset = document.querySelector('#Reset');
const equal = document.querySelector('#equal');
const padre = document.querySelector('.padre');
const ispan = document.querySelector('.span');
const calc = document.querySelector('.calc');
const tema = document.querySelector('.tema');
const cor = document.querySelector('.cor');
const bt1 = document.querySelector('.btn1');
const bt2 = document.querySelector('.btn2');
const bt3 = document.querySelector('.btn3');
let btnnum;

bt1.addEventListener('click', function () {
    hijo.style.marginLeft = '10px'
    body.style.backgroundColor = 'yellow'
    container2.style.backgroundColor = '#252d44';
    display.style.backgroundColor = '#181f32'
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = '#eae3db';
    }
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.color = '#444d5e';
    }
    del.style.color = 'white';
    reset.style.color = 'white';
    equal.style.color = 'white';
    del.style.backgroundColor = '#647299';
    reset.style.backgroundColor = '#647299';
    equal.style.backgroundColor = '#d13f30';
    display.style.color = 'white';
    hijo.style.backgroundColor = 'red';
    padre.style.backgroundColor = '#252c46';
    calc.style.color = 'black';
    tema.style.color = 'black';
    ispan.style.color = 'black';
});

bt2.addEventListener('click', function () {
    hijo.style.marginLeft = '40px';
    body.style.backgroundColor = '#e6e6e6',
    container2.style.backgroundColor = '#d3cdcd';
    display.style.backgroundColor = '#eeeeee';
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = '#e5e4e0';
    }
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.color = '#35342f';
    }

    del.style.color = 'white';
    reset.style.color = 'white';
    equal.style.color = 'white';
    reset.style.backgroundColor = '#388187';
    del.style.backgroundColor = '#388187';
    display.style.color = 'black';
    equal.style.backgroundColor = '#c85401';
    hijo.style.backgroundColor = '#c05602';
    padre.style.backgroundColor = '#d3cdcd';
    calc.style.color = 'black';
    tema.style.color = 'black';
    ispan.style.color = 'black';
});

bt3.addEventListener('click', function () {
    hijo.style.marginLeft = '75px';
    body.style.backgroundColor = '#17062a';
    container2.style.backgroundColor = '#1e0836';
    display.style.backgroundColor = '#1e0836';
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = '#331b4d';
    }
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.color = '#ffe542';
    }
    del.style.color = 'white';
    reset.style.color = 'white';
    equal.style.backgroundColor = '#00decf';
    del.style.backgroundColor = '#56077c';
    reset.style.backgroundColor = '#56077c';
    display.style.color = '#ffe33a';
    hijo.style.backgroundColor = '#06d7d1';
    padre.style.backgroundColor = '#1e0836';
    calc.style.color = '#ffe442';
    tema.style.color = '#ffe442';
    ispan.style.color = 'white';
    equal.style.color = '#black';
    spanbutton.style.color = 'white';
});

btnnum = document.querySelectorAll(".btn-num");
const btnsoma = document.querySelector('.btn-soma');
const btndiv = document.querySelector('.btn-div');
const btnsub = document.querySelector('.btn-sub');
const btnmulti = document.querySelector('.btn-multi');
display.focus()
for (let i = 0; i < btnnum.length; i++) {
    btnnum[i].addEventListener("click", function (e) {
        console.log(e.target);
        display.value += e.target.innerHTML;
    })
}
del.addEventListener('click', function () {
    display.value = display.value.slice(0, -1);
})
btnsub.addEventListener('click', function (e) {
    display.value += btnsub.innerHTML.slice(0, 0);
})
btndiv.addEventListener('click', function (e) {
    display.value += btndiv.innerHTML.slice(0, 0);
})
btnmulti.addEventListener('click', function (e) {
    display.value += '*';
})
btnsoma.addEventListener('click', function (e) {
    display.value += btnsoma.innerHTML.slice(0, 0);
})
reset.addEventListener('click', function () {
    display.value = '';
})
equal.addEventListener('click', function () {
    try {
        let conta = eval(display.value)
        display.value = conta.toFixed(0)
    } catch (e) {
        alert('Syntax Error (IOTA MOON)!')
        display.value = '';
    }
});
