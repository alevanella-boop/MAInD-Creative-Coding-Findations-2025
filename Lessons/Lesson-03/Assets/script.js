//create a constant in ordter to not have to write all the function everytime

//buttons
const addButton = document.getElementById('add-btn');
const listButton = document.getElementById('list-view-btn');
const cardButton = document.getElementById('card-view-btn');

//elements
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list-container');


//create a constant to actually add a task to the pin board once written into the input field

const inputField = document.getElementById('task-input');

// listener: when the button is clicked, run the function addTask
//add a listener to the "add" button so the action can be executed

listButton.addEventListener("click", () => {
    console.log("list view button pressed!")
});

cardButton.addEventListener("click", () => {
    console.log("card view button pressed!")
});

//event listeners
//List
listButton.addEventListener('click', () => {
    console.log("list button pressed!");

    taskList.classList.remove("card-view");
    taskList.classList.add("list-view");
})

//Cards
cardButton.addEventListener('click', () => {
    console.log("card button pressed!");

    taskList.classList.remove("list-view");
    taskList.classList.add("card-view");
})

//Add
addButton.addEventListener('click', () => {

    //inside the brackets, they are called local variables
    //they only exixt inside this function
    //the way to detect if the button is actually being pressed pressed
    //first javascript interaction with the html
    
    console.log("Add button pressed!!!!");
   
    const inputValue = taskInput.value;

    const listElement = document.createElement("li");

    listElement.innerHTML = inputValue;

    taskList.appendChild(listElement);

    taskInput.value = "";

});

//change view button

