const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("please Enter some text!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ''; // Clear the input box after adding the task
    saveData();
}

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // on clicking check ,next click uncheck i.e toggling
        saveData();  
    }
   else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();   //parent elem will be the li of that span
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);  //that ul content will remain stored as data name in local storage even after refresg
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");  //all data showed after refreshing
}

// Call showTask on page load to display saved tasks
showTask();