// Create an hourly planner that will allow the user to store events at each hour
// Create hourly list (6am - 6pm)
// Create event recording text area for each hour
// Create a save button for each event to write it to local storage
// Utilize an API to high light each event during the hour it occurs by changing the color

// Variables
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
const hour11 = $('#time11').text();
const hour12 = $('#time12').text();
const hour13 = $('#time13').text();

// Record event data to local storage
// If a save button is clicked
$('.save').on('click', function () {
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
$('.save').on('click', function () {
    if ($('#text02').val()) {
        localStorage.removeItem('text02');
    }

    const hourTwo = JSON.stringify(hour02);

    localStorage.setItem(hour02, $('#text02').val());
});

$('.save').on('click', function () {
    if ($('#text03').val()) {
        localStorage.removeItem('text03');
    }

    const hourThree = JSON.stringify(hour03);

    localStorage.setItem(hour03, $('#text03').val());
});

$('.save').on('click', function () {
    if ($('#text04').val()) {
        localStorage.removeItem('text04');
    }

    const hourFour = JSON.stringify(hour04);

    localStorage.setItem(hour04, $('#text04').val());
});

$('.save').on('click', function () {
    if ($('#text05').val()) {
        localStorage.removeItem('text05');
    }

    const hourFive = JSON.stringify(hour05);

    localStorage.setItem(hour05, $('#text05').val());
});

$('.save').on('click', function () {
    if ($('#text06').val()) {
        localStorage.removeItem('text06');
    }

    const hourSix = JSON.stringify(hour06);

    localStorage.setItem(hour06, $('#text06').val());
});

$('.save').on('click', function () {
    if ($('#text07').val()) {
        localStorage.removeItem('text07');
    }

    const hourSeven = JSON.stringify(hour07);

    localStorage.setItem(hour07, $('#text07').val());
});

$('.save').on('click', function () {
    if ($('#text08').val()) {
        localStorage.removeItem('text08');
    }

    const hourEight = JSON.stringify(hour08);

    localStorage.setItem(hour08, $('#text08').val());
});

$('.save').on('click', function () {
    if ($('#text09').val()) {
        localStorage.removeItem('text09');
    }

    const hourNine = JSON.stringify(hour09);

    localStorage.setItem(hour09, $('#text09').val());
});

$('.save').on('click', function () {
    if ($('#text10').val()) {
        localStorage.removeItem('text10');
    }

    const hourTen = JSON.stringify(hour10);

    localStorage.setItem(hour10, $('#text10').val());
});

$('.save').on('click', function () {
    if ($('#text11').val()) {
        localStorage.removeItem('text11');
    }

    const hourEleven = JSON.stringify(hour11);

    localStorage.setItem(hour11, $('#text11').val());
});

$('.save').on('click', function () {
    if ($('#text12').val()) {
        localStorage.removeItem('text12');
    }

    const hourTwelve = JSON.stringify(hour12);

    localStorage.setItem(hour12, $('#text12').val());
});

$('.save').on('click', function () {
    if ($('#text13').val()) {
        localStorage.removeItem('text13');
    }

    const hourThirteen = JSON.stringify(hour13);

    localStorage.setItem(hour13, $('#text13').val());
});
