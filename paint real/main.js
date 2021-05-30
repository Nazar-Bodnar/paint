let canv = document.getElementById('canvas');
document.body.style.cursor = "crosshair";
let ctx = canvas.getContext('2d');
let isMouseDown = false;
let color = 'orange';
let lineWidth = 10;
let cords = [];

canv.width = window.innerWidth;
canv.width = window.innerHeight;


canv.addEventListener('mousedown', function () {
    isMouseDown = true;
})

canv.addEventListener('mouseup', function () {
    isMouseDown = true;
    ctx.beginPath();
    cords.push('mouseup');
})

ctx.lineWidth = lineWidth * 2;
ctx.strokeStyle = color;
ctx.fillStyle = color;

canv.addEventListener('mousedown', function (e) {
    if (isMouseDown) {
        cords.push(e.clientX, e.clientY);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY,
            lineWidth, 0, Math.PI * 2);

        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
})


canv.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        cords.push(e.clientX, e.clientY);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY,
            lineWidth, 0, Math.PI * 2);

        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
})
function clear(){
    
ctx.fillStyle = "white";
ctx.fillRect(0,0,canvas.width,canv.height);
    ctx.beginPath()
    ctx.fillStyle= color
    
}
document.addEventListener("keydown",function(e){
    if(e.keyCode == 67){
        clear();
    }
   if (e.keyCode == 83){
       save();
       console.log(localStorage.getItem("cords"))
   } 
})
function save(){
    localStorage.setItem("cords",JSON.stringify(cords))
}

function replay(){
    let timer = setInterval(function(){
        if(!cords.length){
            clearInterval(timer);
            ctx.beginPath();
            return;
        }
    })
}
