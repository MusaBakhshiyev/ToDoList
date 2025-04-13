let deleteBtn = document.querySelector(".delete");
let addBtn = document.querySelector("button");
let plusBtn = document.querySelector(".plus");
let list = document.querySelector(".list");
let input = document.querySelector("textarea");
let inputContainer = document.querySelector(".input-container");
let arrow = document.querySelector(".arrow");

plusBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (getComputedStyle(inputContainer).display == "none") {
        inputContainer.style.display = "flex";
        input.value = "";
        input.style.height = ''; 
    }
});

addBtn.addEventListener("click", (event) => {

    event.preventDefault(); 
       if(input.value.trim() == "" ) {
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
        listText.innerHTML = input.value;
        listDiv.append(listText);
        listDiv.append(listImg);
        list.append(listDiv);
        input.value = "";
        inputContainer.style.display = "none";
    
    if (getComputedStyle(list).display == "none" && list.childElementCount != 0) {
        list.style.display = "block";
    }

});

deleteBtn.addEventListener("click", () => {
    input.value = "";
    inputContainer.style.display = "none";
    input.style.height = '';
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

