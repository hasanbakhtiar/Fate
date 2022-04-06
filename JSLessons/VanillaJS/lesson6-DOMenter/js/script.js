// Selectors
// Select Tags
// document.getElementsByTagName('h1')[0].innerHTML = 'Salam';
// Select ID
// document.getElementById('test').innerHTML = 'Salam1';
// Select Class
// document.getElementsByClassName('test1')[0].innerHTML = 'Salam2';

// Query Selectors
// Single query
// document.querySelector('h4').innerHTML = "Salam3";
// document.querySelector('.test3').innerHTML = "Salam3";
// document.querySelector('#test2').innerHTML = "Salam3";

// All query
// document.querySelectorAll('#test2')[0].innerText = "<i>Salam</i>"


// const firstList = document.querySelector('h4');
// const thanList = document.querySelectorAll('li');


// const newCarList=()=>{
//     firstList.innerHTML = "Mercedes";
//     for(let x = 0; x<=3;x++){
//         thanList[x].innerHTML = "S500";
//         thanList[x].style.color="red";
//         thanList[x].style.background="green";
//         thanList[x].style.width="100px";
//         thanList[x].style.borderWidth ="medium";
        
//     }
// }



const btn = document.querySelector('button');

const openClose=()=>{
    const list = document.querySelector('ul');
    if(list.style.transform === "translateX(-100px)"){
        list.style.transform ="translateX(100px)";
        list.style.transition ="1s";
    }else{
        list.style.transform ="translateX(-100px)";
        list.style.transition ="1s"; 
    }
    
}

// const openOver=()=>{
//     const list = document.querySelector('ul');
//     list.style.transform ="translateX(-100px)";
//     list.style.transition ="1s";
// }


btn.addEventListener('click',openClose);
// btn.addEventListener('mouseleave',openOver);