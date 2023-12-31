let boxes = document.querySelector('.boxes');
let numberInput = document.getElementById('numberInput');
let form = document.querySelector('.form');
let btn = document.querySelector(".btn");

let output = document.createElement('p'); //create output element
output.classList.add('box');

btn.addEventListener('click', getFactFetch) || form.addEventListener('submit', getFactFetch);

// function fetchFactAjax(e){
//     e.preventDefault();
//     let number = numberInput.value;
//     if (isNaN(number) || number < 0) { //automatically make value 1 if it's a negative number
//       number = 1;
//     }
   
//     let xhr = new XMLHttpRequest(); //create xhr request
//     xhr.open('GET', `http://numbersapi.com/${number}`); //specify fetch method and source site

//     //most of the main stuff is done here
//     xhr.onload = function(){
//         if(this.status == 200 && number != ''){ //if server is running legitimately and entry is not blank, then perform action
//             output.textContent = this.responseText;
//             boxes.appendChild(output);
//         }
//     };
//     xhr.send();
// }

function getFactFetch(e){
    e.preventDefault();
    let number = numberInput.value;
    if (isNaN(number) || number < 0) { //automatically make value 1 if it's a negative number
        number = 1;
    }

    fetch('https://numbersapi.com/'+number)
    .then(res => res.text())
    .then(data => {
        if(number != ''){ //if entry is not blank, then perform action
         output.textContent = data;
        boxes.appendChild(output);
        }
    })
    .catch(err => console.log(err));
}