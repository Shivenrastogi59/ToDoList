document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', function() {
            li.remove(); 
        });

        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);

        taskInput.value = ''; 
    }
});