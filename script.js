
const btnCreate=document.querySelector("[data-btn-create]");

const createTask= (evento)=>{

    evento.preventDefault();
    const input=document.querySelector("[data-form-input]");
    const cardList=document.querySelector("[data-list]");
    const task= document.createElement("li");
    task.classList.add("card");

    const content= `
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${input.value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;

    task.innerHTML=content;

    cardList.appendChild(task);


    console.log(input.value);



    //backtip ``
}

btnCreate.addEventListener("click",createTask);