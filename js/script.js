{
    const tasks = [
        {
            contend: "nagrać lekcje",
            done: false,
        },
        {
            contend: "zjeść pierogi",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li ${task.done ? " style=\"text-decoration: line-through\"" : ""} >
                    <button class="js-remove"> usuń</button>
                    ${task.contend}
                </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        console.log(removeButtons);
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
        });
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            contend: newTaskContent,
        });
        render();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            console.log(newTaskContent);
            if (newTaskContent === "") {
                return;
            }
            tasks.push({
                contend: newTaskContent,
            });
            render();
        });
    };

    init();
}