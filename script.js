var task_array = [];
var taskIncompleted = "";
var completedTask = "";

function add_task() {
  var new_task = document.getElementById("new-task").value;
  if (new_task != "") {
    var obj = {
      task: new_task,
      completed: "0",
    };
    task_array.push(obj);
  }
  display();
  uncompleted_task();
  document.getElementById("new-task").value = "";
}
function display() {
  var c = 0;
  for (let i of task_array) {
    if ((i.completed == "0")) {
      taskIncompleted +=
        '<li><input onchange="move_to_completed()" unchecked type="checkbox"/><label>' +
        i.task +
        '</label><input type="text" /><button id="' +
        c +
        '"class="edit" onclick="edit_a_task(id)">Edit</button><button id="' +
        c +
        '"class="delete" onclick="delete_a_task(id)">Delete</button></li>';
    } else {
      completedTask +=
        '<li><input onchange="move_to_uncompleted()" checked type="checkbox"/><label>' +
        i.task +
        '</label><button id="' +
        c +
        '"class="edit" onclick="edit_a_task(id)">Edit</button><button id="' +
        c +
        '"class="delete" onclick="delete_a_task(id)">Delete</button></li>';
    }
    c++;
  }
}

function uncompleted_task() {
  document.getElementById("incomplete-tasks").innerHTML = taskIncompleted;
  taskIncompleted = "";
}

function delete_a_task(id) {
  if (id > -1) {
    task_array.splice(id, 1);
  }
  display();
  uncompleted_task();
  completed_task();
}

var update;
function edit_a_task(id) {
  document.getElementById("new-task").value = task_array[id].task;
  document.getElementById("update_btn").style.display = "inline";
  document.getElementById("add_btn").style.display = "none";
  update = id;
}

function update_a_task() {
  var updated_value = document.getElementById("new-task").value;
  if (updated_value != "") {
    task_array[update].task = updated_value;
    document.getElementById("update_btn").style.display = "none";
    document.getElementById("add_btn").style.display = "inline";
    display();
    uncompleted_task();
    completed_task();
    document.getElementById("new-task").value = "";
  } else {
    alert("please enter task");
  }
}
function completed_task() {
  document.getElementById("completed-tasks").innerHTML = completedTask;
  completedTask = "";
}
function move_to_completed() {
    document.querySelectorAll("#incomplete-tasks input:checked").forEach((e)=>{
        console.log("Task Checked");
    var id = e.nextSibling.nextSibling.nextSibling.id;
     
    task_array[id].completed = "1";
    console.log(task_array[id].completed);
    display();
    uncompleted_task();
    completed_task();
    });
 
}
function move_to_uncompleted() {
  document
    .querySelectorAll("#completed-tasks input:not(:checked)")
    .forEach((e) => {
      var id = e.nextSibling.nextSibling.nextSibling.id;
      task_array[id].completed = "0";
      display();
      uncompleted_task();
      completed_task();
    });
}
