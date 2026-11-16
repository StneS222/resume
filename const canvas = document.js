const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
let xOrigin = 95, yOrigin = 50;
let intervalId,intervalId2 = null;
//draw nose
// ctx.beginPath();
// ctx.arc(xOrigin, yOrigin, 5, 0, 2 * Math.PI);
// ctx.fillStyle = "black";
// ctx.fill();
// ctx.closePath();

function drawEmoji(xDiff , yDiff ) {

    //draw a circle
    //ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    ctx.arc(xOrigin + xDiff, yOrigin + yDiff, 40, 0, 2 * Math.PI);

    //fill the circle with yellow
    ctx.fillStyle = "yellow";
    ctx.fill();

    //stroke the circle with lightblue
    ctx.lineWidth = 2;
    ctx.strokeStyle = "lightblue";
    ctx.stroke();
    ctx.closePath();

    //draw eyes
    //ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    ctx.beginPath();
    ctx.arc(80 + xDiff, 40 + yDiff, 5, 0, 2 * Math.PI);
    //fill the circle with black
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    //draw the other eye
    ctx.beginPath();
    ctx.arc(110+xDiff, 40+yDiff, 5, 0, 2 * Math.PI);
    //fill the circle with black
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    //draw the mouth
    ctx.beginPath();
    ctx.arc(95 + xDiff, 50 + yDiff, 20, 0, Math.PI);
    //stroke the mouth with black
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

}

main();
function main() {
    let xDiff = 0, yDiff = 0;
    drawEmoji(xDiff, yDiff);
    intervalId = setInterval(function () {
        clearEmoji();
        xDiff += .7;
        yDiff += .7;
        drawEmoji(xDiff, yDiff);
    }, 100);
}
// drawEmoji();
function rotateEmoji() {
    let xDiff = 0, yDiff = 0;
    drawEmoji(xDiff, yDiff);
    intervalId2 = setInterval(function () {
        clearEmoji();
        xDiff += .7;
        yDiff += .7;
        drawEmoji(xDiff, yDiff);
    }, 100);
}
function clearEmoji(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}