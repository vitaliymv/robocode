cvs = document.getElementById("canvas")
cvs.height = 600
cvs.width = 600
ctx = cvs.getContext("2d")
let oneColor = document.getElementById("one")
let twoColor = document.getElementById("two")

let firstCol = "black"
let secondCol = "white"

setInterval

function changeColor() {
    ctx.fillStyle = firstCol; // меняем цвет клеток
    ctx.fillRect(0, 0, 760, 690);
    for (i = 0; i < 15; i += 2) {
        for (j = 0; j < 15; j += 2) {
            ctx.fillStyle = secondCol
            ctx.fillRect(0 + i * 40, 0 + j * 40, 40, 40);
            ctx.fillRect(0 + (i + 1) * 40, 0 + (j + 1) * 40, 40, 40);
        }
    }
}

setInterval(changeColor, 10)

oneColor.addEventListener("input", function() {
    firstCol = oneColor.value
})

twoColor.addEventListener("input", function() {
    secondCol = twoColor.value
})