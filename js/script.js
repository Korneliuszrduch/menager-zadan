{

    const tasks = [];

    const addTask = () => {
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        tasks.push({
            content: newTaskContent,
            done: false,
        });
    }

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
        <li class="list__item">
          <button class="list__button js-done">${task.done ? "✔" : ""}</button>
          <span class="list__task ${task.done ? "list__task--done" : ""}">${task.content}</span>
          <button class="list__button--remove js-remove">🗑</button>
        </li>
      `;
        }

        document.querySelector(".js-list").innerHTML = htmlString;
        toggleDoneButtons();
        removeTask();

    };

    const removeTask = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
        });

    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
      
    };

    const toggleDoneButtons = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const resetForm = () => {
        const form = document.querySelector(".js-form");
        form.reset();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        addTask();
        render();
        resetForm();
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
}