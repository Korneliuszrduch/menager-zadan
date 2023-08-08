{

    const tasks = [
        {
            content: "nagrac lekcję",
            done: false,

        },

        {
            content: "zjeść pierogi",
            done: true,

        },
        {
            content: "odebrac z przedszkola",
            done: false,

        },
    ];

   


    const render = () => {

        let htmlString = "";

        for (const task of tasks) {

            htmlString += `
         
            <button class="list__button">✓</button>
            <p class="paragraf"> ${task.content}</p>
            <button class="list__button list__button--remove">🗑</button>
        `;

        }
        document.querySelector(".js-list").innerHTML = htmlString;

    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

    };
    
    const addNewTask = (newTaskContent) => {

        tasks.push({ content: newTaskContent, });

        render();
    };


    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);


    };



    init();

    const addTask = () => {




    };









}