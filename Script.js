function addTask() {
    let input = document.getElementById("taskInput");
    let val = input.value.trim();
    if (val === "") return;

    let ul = document.getElementById("taskList");
    let li = document.createElement("li");

    // Dynamic structure containing custom tick checkbox and text field
    li.innerHTML = `
        <div class="task-left" onclick="toggleTask(this)">
            <div class="tick-box"></div>
            <span class="task-text">${val}</span>
        </div>
        <span class="delete-btn" onclick="deleteTask(this)">&times;</span>
    `;
    
    ul.appendChild(li);
    input.value = ""; // Reset input field
}

function toggleTask(element) {
    // Finds the main list item and triggers completion style
    let listItem = element.closest("li");
    listItem.classList.toggle("completed");
}

function deleteTask(element) {
    // Smooth fade out before removing from view
    let listItem = element.parentElement;
    listItem.style.opacity = '0';
    listItem.style.transform = 'translateY(10px)';
    setTimeout(() => {
        listItem.remove();
    }, 200);
}
