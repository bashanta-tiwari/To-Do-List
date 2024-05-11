const inputBox = document.getElementById("input-box");
const listedItems = document.getElementById("list-container");

function Addtask(){
    if(inputBox.value === ""){
        alert("Dont left the task empty")
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listedItems.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        

    }
    inputBox.value="";
    saveData();
}

listedItems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listedItems.innerHTML);
}
function showData(){
    listedItems.innerHTML = localStorage.getItem("data")
}
showData();