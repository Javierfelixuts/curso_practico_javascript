const h1 = document.querySelector('h1');
const input1 = document.getElementsByTagName('input')[0];
const input2 = document.getElementsByTagName('input')[1];

const btnCalcular = document.getElementById('btnCalcular');

function btnClick(){
    const total = +input1.value + +input2.value
    console.log("Total: ", total);
}
console.log({
    input1,
    input2,
    btnCalcular,
})