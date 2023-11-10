// Get elements
const taskInput = document.getElementById('taskInput');
const categoryInput = document.getElementById('categoryInput');
const dueDateInput = document.getElementById('dueDateInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Event listener for adding a new task
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const categoryText = categoryInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${categoryText}</strong> - ${taskText} (Due: ${dueDate})`;

        // Create a "Delete" button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        listItem.appendChild(deleteButton);

        // Event listener for deleting a task
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
        categoryInput.value = '';
        dueDateInput.value = '';

        // Event listener for marking a task as completed
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });
    }
});

