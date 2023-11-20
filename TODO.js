document.querySelector('#addTask').onclick = function () {
        var taskInput = document.querySelector('#taskInput');
        
        if (taskInput.value.trim() === "") {
            alert("Please enter task name !");
        } else {
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span class="taskname">${taskInput.value}</span>
                    <button class="delete">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            `;

            taskInput.value = ''; // Clear input field

            var currentTasks = document.querySelectorAll(".delete");
            for (var i = 0; i < currentTasks.length; i++) {
                currentTasks[i].onclick = function () {
                    this.parentNode.remove();
                };
            }
        }
    };

    document.querySelector('#clearTasks').onclick = function () {
        document.querySelector('#tasks').innerHTML = '';
    };
