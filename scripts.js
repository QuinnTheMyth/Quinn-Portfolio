document.addEventListener('DOMContentLoaded', () => {
    const homeContainer = document.getElementById('homeContainer');
    const workExpContainer = document.getElementById('workExpContainer');
    const contactsContainer = document.getElementById('contactsContainer')
    const sideProjContainer = document.getElementById('sideProjContainer')
    const hexagonPython = document.getElementById('hexagonPython');
    const hexagonRaspberry = document.getElementById('hexagonRaspberry');
    const hexagonTeamwork = document.getElementById('hexagonTeamwork');
    const mbdaBox = document.getElementById('MBDABox');
    const pythonInfo = document.getElementById('pythonInfo');
    const raspberryInfo = document.getElementById('raspberryPIInfo');
    const teamworkInfo = document.getElementById('teamworkingInfo');
    const mbdaTitle = document.getElementById('MBDATitle');
    const yearStarted = document.getElementById('yearStarted');

    let originalContent = mbdaBox.innerHTML;

    // Code to make gradient follow mouse
    document.addEventListener('mousemove', (event) => {
        const { clientX: x, clientY: y } = event;
    
        // Get the dimensions and position of the sideProjContainer
        const sideProjRect = sideProjContainer.getBoundingClientRect();
        const sideProjX = x - sideProjRect.left; 
        const sideProjY = y - sideProjRect.top; 
    
        const sideProjXPercent = sideProjX / sideProjRect.width;
        const sideProjYPercent = sideProjY / sideProjRect.height;
    
        // Calculate percentages for other containers relative to the entire window
        const xPercent = x / window.innerWidth;
        const yPercent = y / window.innerHeight;
    
        homeContainer.style.backgroundImage = `radial-gradient(circle at ${xPercent * 90}% ${yPercent * 90}%, #0c0e55, #000000)`;
        workExpContainer.style.backgroundImage = `radial-gradient(circle at ${xPercent * 90}% ${yPercent * 90}%, #0c0e55, #000000)`;
        sideProjContainer.style.backgroundImage = `radial-gradient(circle at ${sideProjXPercent * 100}% ${sideProjYPercent * 100}%, #0c0e55, #232121)`;
        contactsContainer.style.backgroundImage = `radial-gradient(circle at ${xPercent * 110}% ${yPercent * 110}%,  #0c0e55, #080808)`;
    });
    

    // Code to make small specks show on the home page, and fade out
    function createSpeck() {
        const speck = document.createElement('div');
        speck.classList.add('speck');

        speck.style.top = `${Math.random() * 100}%`;
        speck.style.left = `${Math.random() * 100}%`;

        homeContainer.appendChild(speck);

        setTimeout(() => {
            speck.remove();
        }, 5000);
    }

    setInterval(() => createSpeck(homeContainer), 300);
    setInterval(() => createSpeck(contactsContainer), 300);

    // Function to update content instantly
    function updateContent(newTitle, newDate, newInfo) {
        mbdaBox.innerHTML = `
            <p id="MBDATitle">${newTitle}</p>
            <p id="yearStarted">${newDate}</p>
            <p id="mbdaInfo">${newInfo}</p>
        `;
    }

    // Event listeners for hexagon icons
    hexagonPython.addEventListener('click', () => {
        updateContent(
            mbdaTitle.textContent, 
            yearStarted.textContent, 
            pythonInfo.innerHTML
        );
    });

    hexagonRaspberry.addEventListener('click', () => {
        updateContent(
            mbdaTitle.textContent, 
            yearStarted.textContent, 
            raspberryInfo.innerHTML
        );
    });

    hexagonTeamwork.addEventListener('click', () => {
        updateContent(
            mbdaTitle.textContent, 
            yearStarted.textContent, 
            teamworkInfo.innerHTML
        );
    });

    // Event listener for mbdaBox click to revert to original content
    mbdaBox.addEventListener('click', () => {
        if (mbdaBox.innerHTML !== originalContent) {
            mbdaBox.innerHTML = originalContent;
        }
    });
});

//Fade in elements when scrolled into view (work experience page)
document.addEventListener('DOMContentLoaded', () => {
    // Define the options for the IntersectionObserver
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.4 // Trigger when 10% of the container is visible
    };

    // Create the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to the elements inside the workExpContainer
                document.querySelectorAll('#workExperienceTitle, #MBDABox').forEach(element => {
                    element.classList.add('visible');
                });
                // Stop observing after the effect has been applied
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe the work experience container
    observer.observe(document.getElementById('workExpContainer'));
});

//Change gmail btn when clicked
function changeBtnText() {
    document.getElementById("contactsInfo2").innerText = "Q.myth005@gmail.com";
    navigator.clipboard.writeText("q.myth005@gmail.com")
}

//Event listeners for navigation bar
//When user clicks on home btn, scroll down to that part of the site 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home').addEventListener('click', function() {
        document.getElementById('homeContainer').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//When user clicks on work experience btn, scroll down to that part of the site 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('workExperience').addEventListener('click', function() {
        document.getElementById('workExpContainer').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//When user clicks on side projects btn, scroll down to that part of the site 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sideProjects').addEventListener('click', function() {
        document.getElementById('sideProjContainer').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//When user clicks on contacts btn, scroll down to that part of the site 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact').addEventListener('click', function() {
        document.getElementById('contactsContainer').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
