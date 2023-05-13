
// Set the beginning hour to be 9AM
var hourBeginning = moment().startOf('day').add(7, 'h');
// totalHours = 9AM to 5PM 
// var totalHours = 24;
// Get current hour
var currentHour = moment().format('H');
// initializes timeTableElement and currentState of present, future, and past;
var timeTableElement;
var currentState;
var checkboxes = Array.from(document.querySelectorAll('checkbox'));
var checkbox= $('#checkboxId');


    $('#checkbox').click(function(){
      if (this.checked===true) {
        alert("did you comlete it?")

        // $('textarea').css( "text-decoration", "line-through");
      }

  })



function displayToday() {
  // today display
  var today = moment().format("dddd, MMMM Do, HH:mm a");
  $('#currentDay').text(today);
}


$(".time-section").each(function (){
  var timeSection=$(this).attr("id").split("-")[1];
  if (currentHour===timeSection){
    $(this).addClass("present");
    $(this).children(".desctiption").addClass("white-text");
  }else if(currentHour>timeSection){
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).children("description").addClass("line-through-text");
  }else if (currentHour<timeSection){
    $(this).addClass("past");
    $(this).removeClass("future");
  }
})


$(".saveBtn").click(function (event) {
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


// Function calls
displayToday();



// updating date and time every 1 minute
setInterval(function () {
  displayToday();
}, 60000);


$('#clearFieldsBtn').click(function(event){
event.preventDefault();
$('textarea').val('');
localStorage.clear();

})
