
const divs= document.querySelectorAll('.div');


function logText(){
    console.log(this);
}


divs.forEach(div=>div.addEventListener('click', logText,{

}));