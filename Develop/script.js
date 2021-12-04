// display date assign return value
var currentDayP = document.querySelector("#currentDay"); 

var currentDate = moment().format("MMMM Do YYYY");
//console.log(currentDate);
currentDayP.textContent = currentDate;
    
//tasks that will be stored in localStorage
var tasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [],
};
/*this adds tasks to localStorage*/
var setTasks = function(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var getTasks = function() {
    var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (loadedTasks) {
        tasks = loadedTasks

        $.each(tasks, function(hour, task) {
            var hourDiv = $("#" + hour);
            createTask(task, hourDiv);
        })
    }
    auditTasks();
}