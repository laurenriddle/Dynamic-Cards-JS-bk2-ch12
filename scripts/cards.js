// console.log("TEST!")
const container = document.querySelector("#container")
let cardNumber = 1

let cardObject = {
    cardCreator: function () {
        const text = document.querySelector("#text").value
        let createCard = container.innerHTML +=
            `<article class="card" id="card--${cardNumber++}"> <div>${text}</div><div><button id="delete--${cardNumber - 1}">Delete This Card</button></div></article>`
        return createCard
    },
    deleteButton: document.querySelector(`#delete--${cardNumber}`),
    card: document.querySelector(`#card--${cardNumber}`),
    cardRemover: function () {
        container.removeChild(this.card)

    }
}


document.querySelector("#create").addEventListener("click", cardObject.cardCreator)


let cardName = document.querySelector(".card")

document.querySelector("#delete--6").addEventListener("click", function test() {
    container.removeChild(cardName)
    console.log("test")
})

cardObject.deleteButton.addEventListener("click", cardObject.cardRemover)