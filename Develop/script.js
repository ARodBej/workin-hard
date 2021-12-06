// display date 
var currentDayP = document.querySelector("#currentDay"); 

var currentDate = moment().format("MMMM Do, YYYY");
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
// getting the tasks from the local storage
var getTasks = function() {
    var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (loadedTasks) {
        tasks = loadedTasks
        //with EACH key/value pair in tasks, creates a task
        $.each(tasks, function(hour, task) {
            var hourDiv = $("#" + hour);
            createTask(task, hourDiv);
        })
    }
    //auditTasks();
}
//creating the tasks
var createTask = function(taskText, hourDiv) {
    //were finding the .task in the HTML 
    var taskDiv = hourDiv.find(".task");
    //adding a <p> and adding text
    var taskP = $("<p>").addClass().text(taskText)
    taskDiv.html(taskP);
}


//so you can type in the boxes
var replaceTextArea = function(textAreaElement) {

    var taskInfo = textAreaElement.closest(".task-info");
    var textArea = taskInfo.find("textArea");

    var time = taskInfo.attr("id");
    var text = textArea.val().trim();

    tasks[time] = [text];
    setTasks();

    createTask(text, taskInfo);
}
//this was supposed to change the background
function trackTime() {
    
    var timeNow = moment().hour();
    //finding each .task-info
    $(".task").each(function() {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        //if the time for the block is less than the current time, its supposed to get the color for the pasr
        if (blockTime < timeNow) {
            $(".task").addClass("past");
        // if both times are equal to eachother, then the color was supposed to change to the color for the present 
        } else if (blockTime === timeNow) {
            $(".task").addClass("present");
        //else, it gets the color for the future
        } else {
            $(".task").addClass("future");
        }
    })
}
//the tasks
$(".task").click(function(){
    $("textArea").each(function(){
        replaceTextArea($(this));
    })

    var time = $(this).closest(".task-info").attr("id");
    if (parseInt(time) >= moment().hour()) {

        var text = $(this).text();
        var textInput = $("<textArea>").addClass("form-control").val(text);

        $(this).html(textInput);
        textInput.trigger("focus");

    }
})

// the save button
$(".saveBtn").click(function() {
    replaceTextArea($(this));
})

getTasks();