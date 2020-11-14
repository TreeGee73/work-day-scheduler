// ---- Planner Variables ---- //
// Time Slot Variables
const hour01 = $('#time01').text();
const hour02 = $('#time02').text();
const hour03 = $('#time03').text();
const hour04 = $('#time04').text();
const hour05 = $('#time05').text();
const hour06 = $('#time06').text();
const hour07 = $('#time07').text();
const hour08 = $('#time08').text();
const hour09 = $('#time09').text();
const hour10 = $('#time10').text();




// Record event data to local storage
// If a save button is clicked
$('#btn01').on('click', function () {
    // Determine if text box is empty
    if ($('#text01').val()) {
        // Clear local storage if text box is empty
        localStorage.removeItem('text01');
    }

    // Create a variable for the designated hour
    // That is equal to the time and event entry for that hour
    const hourOne = JSON.stringify(hour01);

    // Store time and event data to the local storage
    localStorage.setItem(hour01, $('#text01').val());
});

// Repeat for remaining hours on planner
// To be refactored to reduce repetition if possible
$('#btn02').on('click', function () {
    if ($('#text02').val()) {
        localStorage.removeItem('text02');
    }

    const hourTwo = JSON.stringify(hour02);

    localStorage.setItem(hour02, $('#text02').val());
});

$('#btn03').on('click', function () {
    if ($('#text03').val()) {
        localStorage.removeItem('text03');
    }

    const hourThree = JSON.stringify(hour03);

    localStorage.setItem(hour03, $('#text03').val());
});

$('#btn04').on('click', function () {
    if ($('#text04').val()) {
        localStorage.removeItem('text04');
    }

    const hourFour = JSON.stringify(hour04);

    localStorage.setItem(hour04, $('#text04').val());
});

$('#btn05').on('click', function () {
    if ($('#text05').val()) {
        localStorage.removeItem('text05');
    }

    const hourFive = JSON.stringify(hour05);

    localStorage.setItem(hour05, $('#text05').val());
});

$('#btn06').on('click', function () {
    if ($('#text06').val()) {
        localStorage.removeItem('text06');
    }

    const hourSix = JSON.stringify(hour06);

    localStorage.setItem(hour06, $('#text06').val());
});

$('#btn07').on('click', function () {
    if ($('#text07').val()) {
        localStorage.removeItem('text07');
    }

    const hourSeven = JSON.stringify(hour07);

    localStorage.setItem(hour07, $('#text07').val());
});

$('#btn08').on('click', function () {
    if ($('#text08').val()) {
        localStorage.removeItem('text08');
    }

    const hourEight = JSON.stringify(hour08);

    localStorage.setItem(hour08, $('#text08').val());
});

$('#btn09').on('click', function () {
    if ($('#text09').val()) {
        localStorage.removeItem('text09');
    }

    const hourNine = JSON.stringify(hour09);

    localStorage.setItem(hour09, $('#text09').val());
});

$('#btn10').on('click', function () {
    if ($('#text10').val()) {
        localStorage.removeItem('text10');
    }

    const hourTen = JSON.stringify(hour10);

    localStorage.setItem(hour10, $('#text10').val());
});

// --- TIME MANAGEMENT --- //

// Date Time Variables

let todaysDate = moment().format('dddd, MMMM Do YYYY');
let currentTime = moment().format('LT');
let currentTime24 = parseInt(moment().format('HH'));
let currentTimeInt = parseInt(currentTime);
let eventTimer;

// Additional Time Slot Variables for time comparison and color application
const hour01Int = parseInt(hour01);
const hour02Int = parseInt(hour02);
const hour03Int = parseInt(hour03);
const hour04Int = parseInt(hour04);
const hour05Int = parseInt(hour05);
const hour06Int = parseInt(hour06);
const hour07Int = parseInt(hour07);
const hour08Int = parseInt(hour08);
const hour09Int = parseInt(hour09);
const hour10Int = parseInt(hour10);


// Display the time using moment.js

$('#currentDay').append(todaysDate);

// Apply color to time slot to indicate if the
// hour has past, is current, or coming up

eventHightlight();

function eventHightlight() {
    eventTimer = setInterval(eventHightlight, 1000);

    // Determine if the current time is within the planner's time span (8am - 5pm/17)
    if (currentTime24 >= 8 && currentTime24 <= 17) {
        // For the 10 hours available in the planner
        for (let i = 1; i <= 10; i++) {
            // Variable for the conversion of the time into a interger
            let currentHrInt = parseInt($('#time'+i).text());
            
            // If the current hour interger is less then 10 add 12
            if (currentHrInt < 10) {
                currentHrInt = currentHrInt + 12;
            };
            // If the current hour interger is about equal to the current time
            if (currentHrInt == currentTime24) {
                // Add the class of present to the schedule text box
                $('#text'+i).addClass('present');
                continue;
            }
            
            // If the current hour interger in less than the current time
            if (currentHrInt < currentTime24) {
                // Add the class of future to the schedule text box
                $('#text'+i).addClass('future');
                
                // Else add the class of present to the schedule text box
            } else {
                $('#text'+i).addClass('present');
            };
        };

        // Else clear the interval and add the class of past to the schedule text box
    } else {
        clearInterval(eventTimer);
        $('textarea').addClass('past');
    };
};
