document.getElementById('date').textContent = new Date().toLocaleDateString();
// Typewriter animation for project section
window.addEventListener('DOMContentLoaded', () => {
    const project = document.getElementById('project-text');
    const text = project.innerHTML;
    project.innerHTML = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            // Handle HTML tags so they don't get printed letter by letter
            if (text[i] === '<') {
                const close = text.indexOf('>', i);
                project.innerHTML += text.slice(i, close + 1);
                i = close + 1;
            } else {
                project.innerHTML += text[i];
                i++;
            }
            setTimeout(typeWriter, 15); // Adjust speed here (ms per letter)
        }
    }
    typeWriter();
});