// Array to hold student screen time data
const monitorStudents = [
    { name: 'Student A', screenTime: 120 },  // time in minutes
    { name: 'Student B', screenTime: 90 },   
    { name: 'Student C', screenTime: 150 }
];

/**
 * Formats the duration from minutes to hours and minutes.
 * @param {number} duration - The duration in minutes.
 * @returns {string} The formatted duration.
 */
function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
}

// Example usage:
monitorStudents.forEach(student => {
    console.log(`Screen time for ${student.name}: ${formatDuration(student.screenTime)}`);
});