// My Scripts

// Get Name & Store Name
var name = prompt('What is your name?');

// Write/Display Name
$('.name').text(name);

// Get Major & Store Major
var major = prompt('What is your Major?');

// Write/Display Major
$('.major').text(major);

// Apply Lettering.js to H1
$('h1').lettering();

// Apply lettering.js to Name
$('.name').lettering('words');