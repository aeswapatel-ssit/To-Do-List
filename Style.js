function addTask() {
    let input = document.getElementById("taskInput");
    let val = input.value.trim();
    if (val === "") return;

    let ul = document.getElementById("taskList");
    let li = document.createElement("li");

    li.innerHTML = `<span onclick="toggleTask(this)">${val}</span>
                    <span class="delete-btn" onclick="deleteTask(this)">&times;</span>`;
    
    ul.appendChild(li);
    input.value = "";
}
function toggleTask(element) { element.classList.toggle("completed"); }
function deleteTask(element) { element.parentElement.remove(); }
