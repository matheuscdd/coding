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
window.document.addEventListener("mouseover", () => {
    window.document.addEventListener("blur", () => {
        if (document.hasFocus() === false) {
            document.body.classList.add("blur");
        } 
    })
    window.document.addEventListener("focus", () => {
        if (document.body.classList.contains('blur')) {
            document.body.classList.remove('blur');
        }
    })
})