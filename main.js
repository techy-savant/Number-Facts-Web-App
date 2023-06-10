let boxes = document.querySelector('.boxes');
let numberInput = document.getElementById('numberInput');

let output = document.createElement('p'); //create output element
output.classList.add('box');

numberInput.addEventListener('input', fetchFactAjax);

function fetchFactAjax(e){
    let number = e.target;
    if (isNaN(number.value) || number.value < 0) { //automatically make value 1 if its a negative number
      number.value = 1;
    }
    number = number.value;
   
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://numbersapi.com/${number}`);

    xhr.onload = function(){
        if(this.status == 200 && number != ''){
           
            output.textContent = this.responseText;
            boxes.append(output);

        }
    }
    xhr.send();
}