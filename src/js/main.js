const border = document.querySelector('.border');
const  table = document.querySelector('.table');
const  col1 = document.querySelector('.col1');
const  col2 = document.querySelector('.col2');
const  col3 = document.querySelector('.col3');
const  col4= document.querySelector('.col4');


col1.addEventListener('click',() =>{
    let color = '#';
    color+= Math.random().toString(16).slice(2,8);
    table.style.backgroundColor = color;
    col1.innerHTML = color;
})
col2.addEventListener('click',() =>{
    let color = '#';
    color+= Math.random().toString(16).slice(2,8);
    table.style.backgroundColor = color;
    col2.innerHTML = color;
})
col3.addEventListener('click',() =>{
    let color = '#';
    color+= Math.random().toString(16).slice(2,8);
    table.style.backgroundColor = color;
    col3.innerHTML = color;
})
col4.addEventListener('click',() =>{
    let color = '#';
    color+= Math.random().toString(16).slice(2,8);
    table.style.backgroundColor = color;
    col4.innerHTML = color;
})