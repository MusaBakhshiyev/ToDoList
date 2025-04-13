let card = document.querySelector(".card");
let deleteBtn = document.querySelector(".delete");
let addBtn = document.querySelector("button");
let plusBtn = document.querySelector(".plus");
let list = document.querySelector(".list");
let inputList = document.querySelector(".input-list");
let arrow = document.querySelector(".arrow");

document.addEventListener('DOMContentLoaded', () => {

    plusBtn.click();

});

plusBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    inputList.style.display = "block";
    let input = document.createElement("textarea");
    let inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    input.rows = "1";
    input.required = true;
    input.placeholder = "Enter your task...";
    input.value = "";
    input.style.height = '';
    inputContainer.append(input);
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "./images/delete.svg";
    deleteBtn.classList.add("delete");
    deleteBtn.alt = "delete";
    deleteBtn.addEventListener("click", () => {
        inputList.removeChild(inputContainer);
        if (inputList.childElementCount === 0) {
            inputList.style.display = "none";
        }
    });
    inputContainer.append(deleteBtn);
    inputContainer.style.display = "flex";
    inputList.append(inputContainer);

});

addBtn.addEventListener("click", (event) => {

    let inputs = document.querySelectorAll(".input-container textarea");

    inputs.forEach((input) => {
        if (input.value.trim() == "") {
            return;
        }

        let listDiv = document.createElement("div");
        listDiv.className = "list-div";
        let listText = document.createElement("textarea");
        listText.rows = "1";
        let listImg = document.createElement("img");
        listImg.src = "./images/delete.svg";
        listImg.classList.add("delete");
        listImg.addEventListener("click", () => {
            list.removeChild(listDiv);
            if (list.childElementCount == 0) {
                list.style.display = "none";
            }
        });
        listText.value = input.value;
        listDiv.append(listText);
        listDiv.append(listImg);
        list.append(listDiv);
        inputList.removeChild(input.parentElement);

    });

    if (getComputedStyle(list).display == "none" && list.childElementCount != 0) {
        list.style.display = "block";

    }

});



arrow.addEventListener("click", () => {
    if (arrow.classList.contains("arrow-down")) {
        arrow.src = "./images/arrow-up.svg";
        arrow.classList.remove("arrow-down");
        arrow.classList.add("arrow-up");

        let texts = document.querySelectorAll(".list-div textarea");
        let textValues = Array.from(texts).map(text => text.value);
        textValues.sort().reverse();

        texts.forEach((text, index) => {
            text.value = textValues[index];
        });

    }
    else {
        arrow.src = "./images/arrow-down.svg";
        arrow.classList.remove("arrow-up");
        arrow.classList.add("arrow-down");
        let texts = document.querySelectorAll(".list-div textarea");
        let textValues = Array.from(texts).map(text => text.value);
        textValues.sort();

        texts.forEach((text, index) => {
            text.value = textValues[index];
        });
    }
});

