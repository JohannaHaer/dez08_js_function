

function double() {
    let eingabe = document.querySelector(".number").value
    let ausgabe = eingabe*2
    let output = document.querySelector(".output")
    output.innerHTML += `<p>${ausgabe}</p>`
}