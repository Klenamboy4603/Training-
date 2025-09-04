// DIGITAL CLOCK PROGRAM

function updateClock () {
    const now = new Date();
    // padstart adds 00 to the strings
    let hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2, 0);;
    const seconds = now.getSeconds().toString().padStart(2, 0);;
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    // display the time on the page
    document.getElementById("clock").textContent = timeString;
}

updateClock();
// update the time every second
setInterval(updateClock, 1000);
