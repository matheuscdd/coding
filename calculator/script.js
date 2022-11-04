function convert() {
    let pxRaw = document.querySelector('#inputPx').value;
    if (pxRaw === undefined) {return}
    let px = Number(pxRaw);
    let calc = (px)/16;

    document.querySelector("#inputRem").value = calc;
    return calc
}

function copy() {
    let calc = convert();
    navigator.clipboard.writeText(calc+`rem;`)
    document.querySelector("#inputRem");
    document.body.classList.add('clicked');
    setTimeout(() => document.body.classList.remove('clicked'), 100);
}

document.addEventListener("keydown", (event) => {
    let pxRaw = document.querySelector('#inputPx')
    if (event.key === "Backspace" && document.activeElement === pxRaw) {
        console.log(event)
        convert(); 
        
    }
})

function change() {
    document.body.classList = "blur";
}

function back() {
    document.body.classList = "";
}
