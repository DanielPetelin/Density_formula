document.getElementById('del').onclick = function() {
    var num1 = document.getElementById('m').value;
    var num2 = document.getElementById('V').value;
    var result = num1 / num2;

    document.getElementById('out').innerHTML = 'плотность = ' + result + 'кг/м в кубе';
};

document.getElementById('res2').onclick = function() {
    var num1 = document.getElementById('m').value;
    var num2 = document.getElementById('V').value;
    var result = num1 / num2;
    var result2 = result.toFixed();

    document.getElementById('out2').innerHTML = result2;
};