const form=document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearBtn= document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');
//alert('hi');
//Load all eventlisteners;
loadEventlisteners();


function loadEventlisteners(){

    form.addEventListener('submit',addTask);
    //rempve task event
    taskList.addEventListener('click',removeTask);
    //clear task list
    clearBtn.addEventListener('click',clearTask);
    //filter task 
    filter.addEventListener('keyup',filterTask);
}

function addTask(e){
  if(taskInput.value === ''){
     alert('Add a task');
  }
   //createElement
   const li =document.createElement('li');
   //add class 
   li.className='collection-item';
   //Create text node and append to li
   li.appendChild(document.createTextNode(taskInput.value))
   const link=document.createElement('a');
   link.className='delete-item secondary-content';
   link.innerHTML='<i class="fa fa-remove"></i>'
   li.appendChild(link);
   console.log(li);
   taskList.appendChild(li);
   taskInput.value='';
   e.preventDefault(); 

}

function removeTask(e){
     if(e.target.parentElement.classList.contains('delete-item')){
      e.target.parentElement.parentElement.remove();  
      console.log(e.target);
     }
}


function clearTask(e){
   taskList.innerHTML='';
}

function filterTask(e){
   
   const text=e.target.value.toLowerCase();
   console.log(text);
   document.querySelectorAll('.collection-item').forEach(
      function(task){
         const item=task.firstChild.textContent;
         console.log(item);
         if(item.toLowerCase().indexOf(text) != -1){
            task.style.display='block';
         }else{
            task.style.display='none';
         }
      });
}