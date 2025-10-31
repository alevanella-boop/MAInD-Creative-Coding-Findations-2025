//buttons
const addButton = document.getElementById('add-btn');
const listButton = document.getElementById('list-view-btn');
const cardButton = document.getElementById('card-view-btn');
const removeButton = document.getElementById('btn-remove');


//elements
const tofuInput = document.getElementById('tofu-input');
const tofuList = document.getElementById('tofu-list-container');
const colorInput = document.getElementById('color-input');


//constant to actually add an idea to the pin board once written into the input field

const inputField = document.getElementById('tofu-input');


//EVENT LISTENERS
//added a listener so the action can be executed

listButton.addEventListener("click", () => {
    console.log("list view button pressed!")
});

cardButton.addEventListener("click", () => {
    console.log("card view button pressed!")
});



colorInput.addEventListener("input", (event) => {
    console.log("color input changed!", event.target.value);

    tofuList.style.backgroundColor = event.target.value;
})


//List
listButton.addEventListener('click', () => {
    console.log("list button pressed!");

    tofuList.classList.remove("card-view");
    tofuList.classList.add("list-view");
})

//Cards
cardButton.addEventListener('click', () => {
    console.log("card button pressed!");

    tofuList.classList.remove("list-view");
    tofuList.classList.add("card-view");
})

//Add
addButton.addEventListener('click', () => {

    //local variables, only exist inside this function
    //first javascript interaction with the html
    
    console.log("Add button pressed!!!!");
   
    const inputValue = tofuInput.value;

    const listElement = document.createElement("li");

    listElement.innerHTML = inputValue;

    tofuList.appendChild(listElement);

    tofuInput.value = "";

});

//Remove
removeButton.addEventListener("click", () => {
    console.log("remove button pressed!");

    
})