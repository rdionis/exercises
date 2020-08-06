// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

let alert = document.getElementById("myModal")
let close = document.querySelector(".close")

// let createPromise = () => {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, 60);
//     })
//     return promise;
// }

// createPromise().then(result => {
//     alert.style.display = "block"
// })

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(alert)
    }, 60 * 1000);
})

promise.then(result => {
    result.style.display = "block"
})

// after promise, when using .then method it doesn't need to be the same variable passed. it already knows

close.addEventListener("click", () => {
    alert.style.display = "none"
})