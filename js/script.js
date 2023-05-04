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
            <li class="list__item">
           
            <button class="list__button js-done">
             ✔
            </button>
         
            <span class="list__task">     ${task.contend}  </span>
                 
              
                    
                    <button class="list__button--remove js-remove">
                    🗑
                    </button>
                    </li>
            `;
        }




        document.querySelector(".js-list").innerHTML = htmlString;


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