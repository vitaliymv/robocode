cvs = document.getElementById("canvas")
cvs.height = 600
cvs.width = 600
ctx = cvs.getContext("2d")
let oneColor = document.getElementById("one")
let twoColor = document.getElementById("two")
let h1Color1 = document.getElementById("firstColor")
let h1Color2 = document.getElementById("secondColor")
let firstCol = "#000000"
let secondCol = "#756C6C"

function changeColor() {
    result1 = convertColor(firstCol)
    result2 = convertColor(secondCol)
    h1Color1.innerText = `(${result1.r}, ${result1.g}, ${result1.b})`
    h1Color2.innerText = `(${result2.r}, ${result2.g}, ${result2.b})`
    h1Color1.style = `color: ${firstCol}`
    h1Color2.style = `color: ${secondCol}`
    ctx.fillStyle = firstCol;
    ctx.fillRect(0, 0, 760, 690);
    for (i = 0; i < 15; i += 2) {
        for (j = 0; j < 15; j += 2) {
            ctx.fillStyle = secondCol
            ctx.fillRect(0 + i * 40, 0 + j * 40, 40, 40);
            ctx.fillRect(0 + (i + 1) * 40, 0 + (j + 1) * 40, 40, 40);
        }
    }
}

setInterval(changeColor, 50)

oneColor.addEventListener("input", function () {
    firstCol = oneColor.value
})

twoColor.addEventListener("input", function () {
    secondCol = twoColor.value
})

function convertColor(color) {
    if (color.substring(0, 1) == '#') {
        color = color.substring(1);
    }

    let rgbColor = {};

    rgbColor.r = parseInt(color.substring(0, 2), 16);
    rgbColor.g = parseInt(color.substring(2, 4), 16);
    rgbColor.b = parseInt(color.substring(4), 16);

    return rgbColor;
}

function copyText1() {
    const str = document.getElementById('firstColor').innerText;
    console.log(str);
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alertify.success("Text copied")
}

function copyText2() {
    const str = document.getElementById('secondColor').innerText;
    console.log(str);
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alertify.success("Text copied")
}