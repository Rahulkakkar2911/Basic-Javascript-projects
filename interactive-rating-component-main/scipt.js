//selecting the number buttons
//handle if no rating;
let rating = 0;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(element => {
    element.addEventListener('click', function(e){
        numberButtons.forEach(element => element.classList.remove('number--active'));
        element.classList.add('number--active');
        rating = Number(element.textContent);    
        console.log(rating);
    })
});

const submitBtn = document.querySelector('.btn');
submitBtn.addEventListener('click', function(e){
    const ratans = document.getElementsByClassName('rating-ans');
    const initial = document.getElementsByClassName('start-init');
    const result = document.getElementsByClassName('result');

    if(rating === 0){
        //handle no rating given
        e.preventDefault();

    }
    else{
        //submitted
        console.log(rating);
        ratans[0].textContent = rating;
        initial[0].classList.add('hide');
        result[0].classList.remove('hide');
        

        
    }
})

