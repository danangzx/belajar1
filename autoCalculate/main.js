$('.input').on('input',function(){

    var x = document.getElementById('num1').value;
    x = parseFloat(x);

    var y = document.getElementById('num2').value;
    y = parseFloat(y);

    var operator = document.getElementById('operator').value;

    if(Number.isNaN(x))
        x=0;
    else if(Number.isNaN(y))
        y=0;
    switch(operator){
        case '+':
            document.getElementById('result').value=x+y;
            break;
        case '-':
            document.getElementById('result').value=x-y;
            break;
        case '*':
            document.getElementById('result').value=x*y;
            break;
        case '/':
            document.getElementById('result').value=x/y;
            break;
    }
});