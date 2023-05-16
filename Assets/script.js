// Set the beginning hour to be 9AM
var hourBeginning = moment().startOf('day').add(7, 'h');
var currentHour = moment().format('H');


// this function is to set up curent date and time to be displaid on the application's header
function displayToday() {
  // today display
  var today = moment().format("dddd, MMMM Do, HH:mm a");
  $('#currentDay').text(today);
}

// Function calls
displayToday();

// this function compares each time table segment to current time and based on what time block it is  - sets the color of the row

$(".time-section").each(function () {
  var timeSection = $(this).attr("id").split("-")[1];
  if (currentHour === timeSection) {
    $(this).addClass("present");
    
  } else if (currentHour > timeSection) {
    $(this).addClass("past");
    $(this).removeClass("present");
  } else if (currentHour < timeSection) {
    $(this).addClass("future");
    $(this).removeClass("past");
  }
})

// this function enables Save buttons for each row and stores data in the localStorage
$(".save-btn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});

//retrieves items from local storage and sets them in proper places
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));


// this function is for delete buttons located on each row accordingly, ot also clears local Storage

$(".delete-btn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val('');
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.clear();

});


// updating date and time every 1 minute
setInterval(function () {
  displayToday();
}, 60000);

// this function enables "clear all input fields" button in header to delete all in the planner instead of one by one 
$('#clearFieldsBtn').click(function (event) {
  event.preventDefault();
  $('textarea').val('');
  localStorage.clear();

})
