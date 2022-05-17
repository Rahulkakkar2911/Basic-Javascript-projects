const SAbtn = document.querySelector('button');
const closebtn = document.querySelector('.close-btn');
const alertdiv = document.querySelector('.alert');
SAbtn.addEventListener('click', ()=>{
    alertdiv.classList.remove('hide');
    alertdiv.classList.add('show');
    alertdiv.classList.add('showAlert');
    setTimeout(()=>{
        alertdiv.classList.remove('show');
        alertdiv.classList.add('hide');
    },5000)

});
closebtn.addEventListener('click', ()=>{
    alertdiv.classList.remove('show');
    alertdiv.classList.add('hide');
})
