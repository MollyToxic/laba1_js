document.addEventListener('DOMContentLoaded', init, false);
const SQUARE_SIDE = 10;
const CIRCLE_RADIUS = 5;
const PADDING = 10;
let context;

function init(){

    const canvas = document.getElementById('canvas');
    canvas.width = 600;
    canvas.height = 600;

    const button = document.getElementById('rect');
    const button_clear = document.getElementById('clear');
    context = canvas.getContext('2d');
    var img = new Image();
    var img2 = new Image();
    img.src = "C:/Users/user/Desktop/laba/img/manul.jpg";
    img2.src ="C:/Users/user/Desktop/laba/img/sun.jpg";
    let i=0;
    canvas.oncontextmenu = e => {
        drawSquare(e.offsetX, e.offsetY, SQUARE_SIDE);

    };
    canvas.ondblclick = e => {
        if( i%2==0){
            img.onload = context.drawImage( img, e.offsetX, e.offsetY, 50, 26);
            context.stroke();
        } 
        else{
            img2.onload = context.drawImage ( img2, e.offsetX, e.offsetY, 50, 26);
            context.stroke();
        }
        i++;
    };   
    canvas.onclick = e => {
        drawCircle(e.offsetX, e.offsetY, CIRCLE_RADIUS);
    };
    button.onclick = () => {
        drawBorder(canvas.width, canvas.height);
    };
    button_clear.onclick = () => {
    context.clearRect (0,0,canvas.width, canvas.height);
    };
                
}

function drawCircle(x, y, radius){
    context.strokeStyle = 'red';

    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke();
}

function drawSquare(x, y, side){
    context.strokeStyle = 'green';

    context.beginPath();
    context.lineTo(x, y);
    context.lineTo(x=x+side, y);
    context.lineTo(x, y=y-side);
    context.lineTo(x-side, y);
    context.closePath();
    context.stroke();
}

function drawBorder(width, height){
    context.strokeStyle = 'bisque';
    context.strokeRect(PADDING, PADDING, width - PADDING*2, height - PADDING*2);
}