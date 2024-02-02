const name = document.getElementById('nameInput')
const email = document.getElementById('emailInput')
const phone = document.getElementById('phoneInput')
const message = document.getElementById('messageInput')
const form = document.getElementById("contactus")

function submitMessage() {
    alert("Message Successfully Sent!");
}

form.addEventListener("submit", submitMessage);