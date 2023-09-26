//> Selecting the  items
function $(x) {
    return document.getElementById(x);
}
const input = $("input");
const btn = $("btn");
const numTasks = $("numTasks");
const tasks = $("tasks");

//> data for lists
let items = [];

//> functionality

//*add data to the array from the input value

function addTaskToData() {
    items.push({
        id: items.length,
        text: input.value,
        done: true,
    });
}

//* reder the list after items added
function renderTask() {
    if (items.length > 0) {
        tasks.innerHTML = "";
        for (let i = 0; i < items.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = `<input type = 'checkbox' class = 'listItem'
        unchecked
        /> ${items[i].text} <button type='button' data-id = '${items[i].id}' class = 'cancel'>X</button></ `;
            items[i].id = i;
            tasks.appendChild(li);
        }
        deleteItem();
        numTasks.textContent = items.length;
    } else {
        tasks.innerHTML = "";
    }
}

//* delete a task from the list
function deleteTask(id) {
    items.splice(id, 1);
    renderTask();
    numTasks.textContent = items.length;
}

function deleteItem() {
    if (items.length > 0) {
        let target = document.querySelectorAll(".cancel");
        // console.log(target);
        for (let x of target) {
            x.addEventListener("click", (e) => {
                deleteTask(parseInt(x.dataset.id));
            });
        }
    }
}

//> implement the functionality

btn.addEventListener("click", () => {
    addTaskToData();
    renderTask();
    input.value = "";
    input.focus();
});
