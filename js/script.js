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

    ];




    const render = () => {

        let htmlString = "";

        for (const task of tasks) {

            htmlString += `
         
            <button class="list__button js-done">${task.done ? "✓" : ""} </button>
            <p class="paragraf"> ${task.content}</p>
            <button class="list__button list__button--remove js-remove">🗑</button>
        `;

        }
        document.querySelector(".js-list").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {

            removeButton.addEventListener("click", () => {

                removeTask(index);
            });

        });

        const toogleButtons = document.querySelectorAll(".js-done");
        toogleButtons.forEach((toogleButton, index) => {

            toogleButton.addEventListener("click", () => {

                toogleTaskDone(index);
            });
        });



    };


    const toogleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    
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

const removeTask = (index) => {
    tasks.splice(index, 1);
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