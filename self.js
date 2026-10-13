// Typewriter effect for birthday
const birthdayText = "May 02, 2005";
let i = 0;

function typeWriter() {
    if (i < birthdayText.length) {
        document.getElementById('typewriter').textContent += birthdayText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

function downloadBio() {
    const bio = `Name: John Doe\nAbout: Hello! I'm John Doe, a passionate creator who loves diving into technology and adventure.\nHobbies: Reading Sci-Fi Novels, Hiking and Nature Photography, Playing Guitar, Coding and Building Web Apps\nBirthday: August 15, 1995`;
    const blob = new Blob([bio], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'John_Doe_Bio.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Start typewriter effect when page loads
window.onload = typeWriter;