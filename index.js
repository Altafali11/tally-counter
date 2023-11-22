
let countEl= document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment(){
    count = count+1;
    countEl.innerText = count;
}

function drecement(){
    if(count>0){ 
    count = count-1;
    countEl.innerText = count;
}
}
function save(){
    if(count!=0){
    let entry = count + " - ";
    saveEl.textContent += entry;  // innerText
    countEl.textContent = 0;
    count = 0;
    }
}

function reset(){
    saveEl.innerText="Previous entries:";
    countEl.innerText = 0;
    count = 0;
}
