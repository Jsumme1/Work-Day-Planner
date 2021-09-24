// display current time and date
var todaysDate = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").html(todaysDate);


$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get valueof the task description in JQuery
    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  function timeTracker() {
    //get current time - hours
    var timeNow = moment().hour();

    // loop over time slots
    $(".time-slot").each(function () {
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
  $("#hourOne.task").val(localStorage.getItem("hourOne"));
  $("#hourTwo .task").val(localStorage.getItem("hourTwo"));
  $("#hourThree.task").val(localStorage.getItem("hourThree"));
  $("#hourFour .task").val(localStorage.getItem("hourFour"));
  $("#hourFive .task").val(localStorage.getItem("hourFive"));
  $("#hourSix .task").val(localStorage.getItem("hourSix"));
  $("#hourSeven .task").val(localStorage.getItem("hourSeven"));
  $("#hourEight .task").val(localStorage.getItem("hourEight"));
  $("#hourNine .task").val(localStorage.getItem("hourNine"));
  $("#hourTen .task").val(localStorage.getItem("hourTen"));

  timeTracker();
});