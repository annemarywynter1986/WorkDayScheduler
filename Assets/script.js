// declare global variables

// Set the beginning hour to be 8AM
var hourBeginning = moment().startOf('day').add(7, 'h');
// totalHours = 8AM to 6PM = 11 hours
var totalHours = 24;
// Get current hour
var currentHour = moment().format('H');
// initializes timeTableElement and currentState of present, future, and past;
var timeTableElement;
var currentState;
const checkboxes = Array.from(document.querySelectorAll('checkbox'));

function chekboxFunction() {
  var checkbox = $('#checkboxId')
  var text = localStorage.keyValue;

  checkboxes.forEach(checkboxes => {
    const number = checkboxes.dataset['number']
    checkbox.checked = currentHour['checkbox' + number]
})

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', e => {
        
    if (checkbox.checked !== true) {
     
    $("textarea").css("text-decoration", "line-through");
    alert("you completed your task")
    
    }
       
    })
})
  chekboxFunction();
}

function displayToday() {
  // today display
  var today = moment().format("dddd, MMMM Do, HH:mm a");
  $('#currentDay').text(today);
}

function fillTimeTable() {

  for (var hour = 0; hour < totalHours; hour++) {
    var realHour = hour + 8;
    // add one hour while iterating for loop
    timeTableElement = hourBeginning.add(1, 'h').format('HH:mm A');

    // determine the currentState based on the conditions
    if (currentHour === realHour) {
      currentState = 'present';
    } else if (currentHour < realHour) {
      currentState = 'past';
    } else {
      currentState = 'future';
    }

    var appendBlock =
      `<div id="hour-${realHour}" class="row time-block ${currentState}">
                <div class="col-md-1 hour">${timeTableElement}</div>
                <textarea class="col-md-8 description ${realHour}"></textarea>
                <input type="checkbox" id="checkboxId" class="myCheck col-md-2" onclick="chekboxFunction()">
                <button class="btn saveBtn col-md-1">
                    <i class="fas fa-save"></i>
                </button>
                
            </div>`;

    $(".container").append(appendBlock);





    loadSchedule();
  }

}



// function for save schedule in the local storage
function saveSchedule() {

  var keyName = $(this).parent().attr('id');
  var keyValue = $(this).parent().children().eq(1).val();

  localStorage.setItem(keyName, keyValue);
}

// functino to get back the data from the local storage and print it out in to the textarea attribute
function loadSchedule() {

  for (var hour = 0; hour < totalHours; hour++) {
    var realHour = hour + 8;
    var loadedSchedule = localStorage.getItem(`hour-${realHour}`);

    $(`.${realHour}`).val(loadedSchedule);
  }


}



// Function calls
displayToday();
fillTimeTable();


$('.saveBtn').on('click', saveSchedule);

// updating date and time every 1 minute
setInterval(function () {
  displayToday();
}, 60000);

// updating entire time table every 1 hr
setInterval(function () {
  fillTimeTable();
}, 3.6e+6);