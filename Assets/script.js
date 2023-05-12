var textValue=document.querySelector('#text-area');
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('MMMM D, YYYY, hh:mm a'));
$('#currentDay').css("color", "blue");
var saveBtn = document.querySelectorAll(".saveBtn");

   //create array of input elements
   var hourInput = $('<text-area>');
   //save timeblocks into single variables for each input into text area elements
   var hour9Input = $('#hour-9 #textarea');
   var hour10Input = $('#hour-10 #textarea');
   var hour11Input = $('#hour-11 #textarea');
   var hour12Input = $('#hour-12 #textarea');
   var hour1Input = $('#hour-1 #textarea');
   var hour2Input = $('#hour-2 #textarea');
   var hour3Input = $('#hour-3 #textarea');
   var hour4Input = $('#hour-4 #textarea');
   var hour5Input = $('#hour-5 #textarea');
   var hour6Input= $('#hour-6 #textarea');
   var hour7Input = $('#hour-7 #textarea');
   var timeBlock = $(".time-block");
 
 
 
 
   var currentHour = dayjs().format('HH');
   var startTime = $('#hour-9');
   console.log(currentHour);
   if (currentHour == 9) {
     startTime.addClass('present');
   } else if (currentHour > 9) {
     startTime.removeClass('present');
     startTime.removeClass('future');
     startTime.addClass('past');
   } else if (currentHour < 9) {
     startTime.removeClass('past');
     startTime.removeclass('present');
    startTime.addClass('future');
   }
 
   //set item into localstorage
   // localStorage.setItem("hour9", hour9Val);
   //make for loop to target save buttons
   for (let i = 0; i < 9; i++) {
     console.log(saveBtn[i])
     saveBtn[i].addEventListener('click', function (event) {
       var inputHour = hourInput[i].value;
       event.preventDefault();
       console.log(inputHour, hourInput[i])
       //set item into localstorage (using template literals with tutor)
       localStorage.setItem(`hour${i+9}`, inputHour);
     })
   
   }
