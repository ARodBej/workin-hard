// display date assign return value
var currentDayP = document.querySelector("#currentDay"); 

var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
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
/*this ass tasks to localStorage*/
var setTasks = function(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var auditTaks = function() {
    var currentHour = moment().hour();
}