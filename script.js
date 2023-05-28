function add(n1,n2) {
    return parseFloat(n1)+parseFloat(n2);
}
function subtract(n1,n2) {
    return parseFloat(n1)-parseFloat(n2);
}
function multiply(n1,n2) {
    return parseFloat(n1)*parseFloat(n2);
}
function divide(n1,n2) {
    if (n2 == 0){
        return "ERR"
    }
    return parseFloat(n1)/parseFloat(n2);
}

function operate(op,n1,n2) {
    if (op == "+"){
        return add(n1,n2);
    }
    else if(op == "-"){
        return subtract(n1,n2);
    }
    else if(op == "×"){
        return multiply(n1,n2);
    }
    else if(op == "÷"){
        return divide(n1,n2);
    }
    else {
        return "ERR";
    }
}

let n1;
let operator;
let n2;

const display = document.querySelector('#display')
let operating = false;
let set = false;
let buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    if (button.textContent == 'C'){
        button.addEventListener('click', ()=> {
            display.textContent = '0';
            set = false;
            operating = false;
            n1 = undefined;
            operator = undefined;
        })
    }
    else if (button.textContent == '←'){
        button.addEventListener('click', ()=> {
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
            if (display.textContent.length < 1){
                display.textContent = '0';
            }
        })
    }
    else if (button.textContent == '+/-'){
        button.addEventListener('click', ()=> {
            if (parseFloat(display.textContent) > 0) {
                display.textContent = `-${display.textContent}`;
            }
            else if (parseFloat(display.textContent) < 0){
                display.textContent = display.textContent.substring(1);
            }
        })
    }
    else if (button.textContent == '.'){
        button.addEventListener('click', ()=> {
            if (!display.textContent.includes('.')){
                display.textContent += '.';
            }
        })
    }
    else if (button.classList.contains('number')){
        button.addEventListener('click', ()=> {
            if (!operating) {
                if (display.textContent === '0') {
                    display.textContent = '';
                }
                display.textContent += button.textContent;
            }
            else {
                if (!set){
                    n1 = display.textContent;
                    display.textContent = '';
                    set = true;
                }
                if (display.textContent === '0') {
                    display.textContent = '';
                }
                display.textContent += button.textContent;
                console.log(n1, operator)
            }
        })
    }
    else if (button.classList.contains('op')){
        if (button.textContent == '='){
            button.addEventListener('click', ()=> {
                if (operating) {
                    display.textContent = operate(operator,n1,display.textContent)
                    operating = false;
                    set = false;
                }
            })
        }
        else {
            button.addEventListener('click', ()=> {
                if (set) {
                    display.textContent = operate(operator,n1,display.textContent)
                    set = false;
                }
                operating = true;
                operator = button.textContent;
            })
        }
    }
});
//IT WORKS!!!