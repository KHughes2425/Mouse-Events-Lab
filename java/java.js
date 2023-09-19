

const click  = document.querySelector('.demo');
const point = document.querySelector('#point');


demo.addEventListener('mousedown', (e) => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    //open the JS console to see the output
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
});