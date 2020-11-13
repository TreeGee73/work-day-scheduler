# Work Day Scheduler

The purpose of this project is to create a single day planner. The interface will display the hours of the day, have content boxes the user can record events for each hour, and will highlight the a time slot based on the current time. It utilizes Luxon to manage the dates and times.

## Motivation / Project Criteria

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
[] the current day is displayed at the top of the calendar
WHEN I scroll down
[] I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
[] each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
[] I can enter an event
WHEN I click the save button for that time block
[] the text for that event is saved in local storage
WHEN I refresh the page
[] the saved events persist

## Approach

To complete the project, exisiting HTML and CSS files were manipulated and a new JavaScript file was created. This interface is formatted using a combination of Bootstrap and custom CSS to give a polished look and feel that remained user friendly. The interface is powered by JavaScript with Luxon.js handling the date & time management.

The user is presented with a screen that displays the day and has a list of hours from 6 am to 6 pm presented for the purpose of recording events, appointments, reminders, etc.

<p><img src="assets/interface_at_open.jpg" alt="Blank Planner Screen" title="Blank Planner Screen"></p>

When the user clicks on a field next to the time, they can enter in their event, appointment, reminder, or other comment. 

<p><img src="assets/interface_entry.jpg" alt="User Entry" title="User Entry"></p>

When they click on "Save" the entry is committed to local storage and saved in the selected timeslot on the screen.

<p><img src="assets/local_storage.jpg" alt="Entry Committed to Local Storage" title="Entry Committed to Local Storage"></p>

<p><img src="assets/on_screen.jpg" alt="Entry Saved on Screen" title="Entry Saved on Screen"></p>

Before the start of the day all entries are ~~blue~~.

<p><img src="assets/before_start.jpg" alt="Before the Schedule Starts" title="Before the Schedule Starts"></p>

As the day progresses; the current hour is highlighted with ~~green~~, the previous hours/past timeslots become ~~dark gray~~, while the upcoming hours/timeslots remain ~~blue~~.

<p><img src="assets/highlighted_hour.jpg" alt="Day in Progress" title="Day in Progress"></p>

 When all of the displayed hours / timeslots have passed the day all hours/timeslots will display ~~dark gray~~

<p><img src="assets/day_complete.jpg" alt="After the Day Ends" title="After the Day Ends"></p>

## Link

This app can be accessed at https://treegee73.github.io/code-quiz/
Luxon.js can be downloaded at https://moment.github.io/luxon/index.html

## Challenges

## Credits
Background image is a free to use image that was obtained from <a href="http://www.pexels.com">Pexels.com</a>.