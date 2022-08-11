const btn = document.getElementById('btn');
const navUl = document.querySelector('.nav--ul');
const faIconX = document.querySelectorAll('.fa-plus');
const column = document.querySelectorAll('.directory--column');

let windowSize = window.matchMedia('(max-width: 734px)');

if (windowSize.matches){
    onlyFunctionInScript()
}

function onlyFunctionInScript(){
    column.forEach((element) =>{
        element.addEventListener('click', ()=>{
            let ulElement = element.children[1];
            let faIcon = element.children[0].children[0]
            // console.log(faIcon) // ispisuje Fa
            ulElement.classList.toggle('footer--ul--mini--block');
            faIcon.classList.toggle('fa-minus');
            
        })
    })
}

btn.addEventListener('click', () =>{
    btn.classList.toggle('ex');
    navUl.classList.toggle('miniNav');
});

