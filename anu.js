// Create a new Date object representing the current date
const today = new Date();

// Get the month and year components of the current date
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Decrease the month by 1
currentMonth -= 1;

// Handle cases where the current month is January
if (currentMonth < 0) {
  currentMonth = 11; // Set to December
  currentYear -= 1; // Subtract 1 from the year
}

// Create a new Date object representing the decreased date
const decreasedDate = new Date(currentYear, currentMonth, today.getDate());

// Get the individual components of the decreased date (year, month, day)
const decreasedYear = decreasedDate.getFullYear();
const decreasedMonth = String(decreasedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const decreasedDay = String(decreasedDate.getDate()).padStart(2, '1');

// Construct the date string in the format YYYY-MM-DD
const firstDay = `${decreasedYear}-${decreasedMonth}-${decreasedDay}`;

console.log(firstDay);
console.log(decreasedMonth);