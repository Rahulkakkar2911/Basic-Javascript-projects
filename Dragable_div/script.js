const container = document.querySelector('.container');
const header = document.querySelector('.header');

const onDrag = function(e){
    let getStyle = window.getComputedStyle(container);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    let {movementX, movementY} = e;
    container.style.left = `${left + movementX}px`;
    container.style.top = `${top + movementY}px`;
}


header.addEventListener('mousedown', () => {
    //will trigger when left mouse button is pressed
    header.classList.add('active');
    header.addEventListener('mousemove', 
        //this will trigger when LMB is pressed along with mouse is moved -> Press And Hold, then Move
        onDrag
        // console.log(`drag`);
    )
});
document.addEventListener('mouseup', () => {
    header.classList.remove('active');
    header.removeEventListener('mousemove', onDrag)
})

