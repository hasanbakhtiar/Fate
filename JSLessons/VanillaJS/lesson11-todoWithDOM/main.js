let addToDobutton = document.querySelector('#addToDo');
let inputField = document.querySelector('#inputField');
let toDoContainer = document.querySelector('#toDoContainer');

const addelemnt = ()=>{
    let text = document.createElement('p');
    text.innerText = inputField.value;
    console.log(text);
    toDoContainer.appendChild(text);
    text.addEventListener('click',()=>{
        text.style.textDecoration= 'line-through'
    })
    text.addEventListener('dblclick',()=>{
        toDoContainer.removeChild(text);
    })
}
addToDobutton.addEventListener('click',addelemnt);