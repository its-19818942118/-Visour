// save the theme mode and toggle

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // Set initial theme based on stored preference
    if (currentTheme) {
        body.classList.add(currentTheme);
        themeToggle.checked = currentTheme === 'dark-theme';
    }

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            // Dark mode
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            // Light mode
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});

// cursor trailer

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
    
    const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    }
    
    trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
    });
}

const getTrailerClass = type => {
    switch(type) {
    case "video":
        return "fa-solid fa-play";
    default:
        return "fa-solid fa-arrow-up-right"; 
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
    
    const icon = document.getElementById("trailer-icon");
    
    animateTrailer(e, interacting);
    
    trailer.dataset.type = interacting ? interactable.dataset.type : "";
    
    if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
    }
}
