let heading = document.querySelector(".heading-container h2")
let button = document.querySelector("button")
let input = document.querySelector("input")



function buttonHandler() {
    let name = input.value
    heading.innerHTML = `Hello ${name}. Today is Wednesday. Only 2 days left until the weekend!`
}

button.addEventListener("click", buttonHandler)