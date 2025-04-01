// Handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            formMessage.style.display = "block";
            contactForm.reset();
        });
    }

    // Add new event functionality
    const addEventButton = document.getElementById("addEventButton");
    const eventsList = document.getElementById("eventsList");

    if (addEventButton && eventsList) {
        addEventButton.addEventListener("click", () => {
            const newEvent = prompt("Enter the new event (e.g., 'Fun Run - July 5, 2025'):");
            if (newEvent) {
                const newEventItem = document.createElement("li");
                newEventItem.textContent = newEvent;
                eventsList.appendChild(newEventItem);
            }
        });
    }
});document.addEventListener("DOMContentLoaded", () => {
    // Handle registration form
    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Save user data to Local Storage
            const userData = { username, email, password };
            localStorage.setItem("user", JSON.stringify(userData));

            registerMessage.style.display = "block";
            registerForm.reset();
        });
    }

    // Handle events list
    const eventsList = document.getElementById("eventsList");
    const addEventButton = document.getElementById("addEventButton");

    if (eventsList && addEventButton) {
        // Load events from Local Storage
        const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
        savedEvents.forEach((event) => {
            const eventItem = document.createElement("li");
            eventItem.textContent = event;
            eventsList.appendChild(eventItem);
        });

        // Add new event
        addEventButton.addEventListener("click", () => {
            const newEvent = prompt("Enter the new event (e.g., 'Fun Run - July 5, 2025'):");
            if (newEvent) {
                const eventItem = document.createElement("li");
                eventItem.textContent = newEvent;
                eventsList.appendChild(eventItem);

                // Save to Local Storage
                savedEvents.push(newEvent);
                localStorage.setItem("events", JSON.stringify(savedEvents));
            }
        });
    }
});