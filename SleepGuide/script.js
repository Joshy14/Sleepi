
/**Tasks to be completed:
Icons website: https://materialdesignicons.com/

https://michalsnik.github.io/aos/
New Tutorial using vanilla javascript: 

https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671


https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/

//Picture Finder
https://unsplash.com/s/photos/sleep

1.Page Design(HTML & CSS) - what is the page going to look like?
-Dark Theme / done
-Color Pallete / done
-Font Style / done
-Font Sizes / done
-Footer 
2.Project functionality - what are we trying to tell/teach the user?
-Sleep Cycle Quiz / Reuben working on it
-About / done
-FAQ / done
-Home / Need to add photos, links, information, animations
3.Dynamic Page (Javascript) - what kind of animations or events will the page have?
-Animation for what elements?
-Speed of page after adding animations
4.
*/


/**
What kind of javascript will we be building?

Calculate recommended times for when the user should go to bed depending on what time they want to wake up.

Calculate monthly schedule to properly setup a new sleep schedule. Example don't go from waking up at 8am to 5am. Have to slowly progress to a 5am wake up schedule.

Depending on survey results show any information the user might need to create a better sleep schedule.

**/



var userWakeUpTime = 600

function calculator(userWakeUpTime) {
  //Calculate wake up time minus 9 hours in military time
  var sleepTime = userWakeUpTime - 900


  if (sleepTime < 0) {
    sleepTime += 2400
  }
  console.log(sleepTime)
  calculateSleepTime(sleepTime);
}
calculator(userWakeUpTime)

//Function that does conversion
function calculateSleepTime(timeCatcher) {


  if (timeCatcher > 1200){
    timeCatcher = timeCatcher-1200 
    
  }
  console.log(timeCatcher)
   
  
  //Convert military time to am pm time in a new function
  //Code BELOW
  //To convert military(24 hour) time to 12 hour…For a military time that is larger than 12:00, just subtract 12 hours to get the 24 hour(standard time), then add “pm”. For example, if you have 14:30 hours, subtract 12 hours and the result is 2:30 pm.


}
