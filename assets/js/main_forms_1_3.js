function calc() {
    let age1 = document.querySelector("#age1").value
    let age2 = document.querySelector("#age2").value
    let difference = Math.sqrt(Math.pow((age1 - age2),2))
    let output = document.querySelector("#output")
    output.innerHTML = `<p>${difference}</p>`
}