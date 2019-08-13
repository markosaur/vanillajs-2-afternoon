const mousePosition = {x: 0, y: 0}; 

// variable is set to an object and we provided the object with 2 properties (x and y) both initalized as 0

let drawID  

//then we created a drawID with no initial value

const getRandomNumber = function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  };
window.addEventListener('mousemove', function(mouseMoveEvent) {//telling the computer to listen to what is going on in the window, listen specifically to the mouse move, and run this function.
    // console.log(mousePosition)
    mousePosition.x = mouseMoveEvent.pageX;
    mousePosition.y = mouseMoveEvent.pageY;
});
function draw() {
    return setInterval(function() {
    const container = document.getElementById('wrap');
    const color = `background:rgb(${getRandomNumber(0,255)},${getRandomNumber(
        0, 
        255
        )}, ${getRandomNumber(0, 255)});`;
          const ballSize = getRandomNumber(10, 30);
          const size = `height:${ballSize}px; width:${ballSize}px;`;
          const left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
          )}px;`;
          const top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
          )}px; `;
          const style = `${left}${top}${color}${size}`;

          const ball = document.createElement('div') //document.createElement() adds an element to the html
          //we now need to add a class to style the above div
          ball.classList.add('ball')//we have now added the class so it can be styled   
          ball.style = style  //this will add style

          ball.addEventListener("animationend", function(e){
              e.target.remove();
          });
          container.appendChild(ball);

    }, 50);
}
window.addEventListener('mouseover',function(){
    drawID = draw();
});
window.addEventListener('mouseout', function(){
    this.clearInterval(drawId);
});

//we are going to add a setInterval. This method calls a function at specified intervals in milliseconds.  1 sec = 1000 ms
//use setTimeout() to stop calling the function after a specified amount of time
//setInterval(function,milliseconds, param 1, param 2, etc)