// display current time and date
var todayDate = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").html(todayDate);

// hold functions until page DOM is ready to execute
$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get value of the task description
    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time,text);
  })

  function timeTracker() {
    //get current time - hours
    var timeNow = moment().hour();

    // loop over time slots
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // Get item from local storage if any
  $("#hour8 .task").val(localStorage.getItem("hour8"));
  $("#hour9 .task").val(localStorage.getItem("hour9"));
  $("#hour10 .task").val(localStorage.getItem("hour10"));
  $("#hour11 .task").val(localStorage.getItem("hour11"));
  $("#hour12 .task").val(localStorage.getItem("hour12"));
  $("#hour13 .task").val(localStorage.getItem("hour13"));
  $("#hour14 .task").val(localStorage.getItem("hour14"));
  $("#hour15 .task").val(localStorage.getItem("hour15"));
  $("#hour16 .task").val(localStorage.getItem("hour16"));
  $("#hour17 .task").val(localStorage.getItem("hour17"));

  timeTracker();
});