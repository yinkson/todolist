window.addEventListener("load", () => {
  const form = document.querySelector("#tast-list-form");
  const input = document.querySelector("#form-inputBox");
  const listItems_el = document.querySelector("#task");


  form.addEventListener("submit", (e) => {
    e.preventDefault();


    const task = input.value;
   
    if (!task) {
      alert("Sorry!your task input is empty.Kindly fill out");
      return;
    }
   
    const listItems=document.createElement("div");
    listItems.classList.add("task");

    const task_content = document.createElement("div");
     task_content.classList.add("content");
    //  task_content.innerText= task;

     listItems.appendChild(task_content);

// i think the edit is of no Need in a todo list app if YES?COMMENT IT OUT FROM HERE... THEN UNCOMMENT THE ABOVE COMMENT
     const task_input_el= document.createElement("input");
     task_input_el.classList.add("text");
     task_input_el.type="text";
     task_input_el.value=task;
     task_input_el.setAttribute("readonly", "true");
     task_content.appendChild(task_input_el);
  // END THE COMMENT HERE SIR
      const taskActions_el = document.createElement("div");
      taskActions_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML ="edit";

      const task_remove_el = document.createElement("button");
      task_remove_el.classList.add("remove");
      task_remove_el.innerHTML ="remove";

      taskActions_el.appendChild(task_edit_el);
      taskActions_el.appendChild(task_remove_el);

      listItems.appendChild(taskActions_el);

     listItems_el.appendChild(listItems);
  
   input.value= "";

   task_edit_el.addEventListener('click', ()=>{
      if(task_edit_el.innerText.toLowerCase()=="edit"){
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
        task_edit_el.innerText="Save";}
        else{
          task_input_el.setAttribute('readonly',"readonly");
          task_edit_el.innerText="Edit";
        }
   });

   task_remove_el.addEventListener("click",()=>{
    listItems_el.removeChild(listItems);

   })



  });


});