function calc() {
    let date = document.querySelector("#year").value
    const d = new Date
    let year = d.getFullYear()
    let age = year - date
    let output = document.querySelector("#output")
    output.innerHTML = `<p>${age}</p>`
}