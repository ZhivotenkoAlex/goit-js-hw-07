const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output")

const greeting = (event) => {
    output.textContent = event.currentTarget !== "" ? event.currentTarget.value : "Незнакомец";


    // output.textContent = event.currentTarget.value;
}

input.addEventListener("input", greeting);