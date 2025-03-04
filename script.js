document.querySelector("p").textContent = "With Ledger Live, anything is possible"
let headers = document.querySelectorAll("h1")
for (let i = 0; i < headers.length; i++) {
    headers[i].style.color = "grey"
}

let newButton = document.createElement("button")

newButton.textContent = "Feeling lucky?"
newButton.style.padding = "6px 12px 6px 12px"
newButton.style.backgroundColor = "#6c757d"
newButton.style.color = "white"
newButton.style.borderRadius = "0.375rem"
newButton.style.border = "1px solid black"
newButton.style.marginTop = "1rem"

let signDiv = document.querySelector("#signUp")

signDiv.appendChild(newButton)

function luck() {
    alert("You weren't lucky");
}

newButton.addEventListener("click", luck)