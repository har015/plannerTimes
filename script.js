
//show date
var date = moment().format('dddd, MMMM Do');
$("#currentDay").html(date);
//change color on blocks
function currentTime() {

    var current = moment().hour();
    console.log(current);
    
    $(".time-block").each(function () {
        var block = parseInt($(this).attr("id").split("hour")[1]); 
        if (block < current) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (block == current) {
            
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
          
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        
    })
}
//save button funtions
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
//use saved input
$("#hour9  .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
    currentTime();
})

