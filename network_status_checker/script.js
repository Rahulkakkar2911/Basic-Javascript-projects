//selecting all required elements
const container = document.querySelector('.container');
const toast = document.querySelector('.toast');
const wifiIcon = document.querySelector('.icon');
const title = document.querySelector('span');
const subTitle = document.querySelector('p');
const closeIcon = document.querySelector('.close-icon');

const offline = function(){
    container.classList.remove('hide');
    toast.classList.add('offline');
    title.innerText = "You're offline now!";
    subTitle.innerText = "Opps Internet is disconnected!";
    wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`
}

const online = function(){
    toast.classList.remove('offline');
    title.innerText = "You're online now!";
    subTitle.innerText = "Hurray! Internet is connected";
    wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`
    closeIcon.addEventListener('click', () => {
        container.classList.add('hide');
    });
    setTimeout(() => {
        container.classList.add('hide');
    },5000);
}

const getRequest = function (url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = (e) => {
        //Once Loaded
        //online
        if(xhr.status === 200 && xhr.status < 300){
            online();
        }else{ //offline
            offline()
        } 
    }
    xhr.onerror = () => {
        offline();
    }
    xhr.send();
}
setInterval(()=>{
        getRequest(`https://jsonplaceholder.typicode.com/posts`);
},100)