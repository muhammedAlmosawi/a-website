document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        // For now, we'll just show the submitted data in an alert
        alert(`Thank you for your message!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        // Clear the form
        contactForm.reset();
    });
});