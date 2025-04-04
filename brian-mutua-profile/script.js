document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on load
    document.body.style.opacity = "1";

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            } else {
                window.location.href = this.getAttribute("href"); // If section not found, go to page
            }
        });
    });

    // Image lightbox effect for gallery page
    const galleryImages = document.querySelectorAll(".gallery img");
    if (galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener("click", function () {
                openLightbox(img.src);
            });
        });

        function openLightbox(src) {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close">&times;</span>
                    <img src="${src}" alt="Gallery Image">
                </div>
            `;
            document.body.appendChild(lightbox);

            // Close the lightbox when clicking the close button or outside
            lightbox.querySelector(".close").addEventListener("click", () => {
                document.body.removeChild(lightbox);
            });

            lightbox.addEventListener("click", (e) => {
                if (e.target === lightbox) {
                    document.body.removeChild(lightbox);
                }
            });
        }
    }

    // Contact Form Validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const errorMessage = document.getElementById("error-message");

            if (name === "" || email === "" || message === "") {
                errorMessage.textContent = "All fields are required!";
                errorMessage.style.color = "red";
            } else {
                errorMessage.textContent = "Message sent successfully!";
                errorMessage.style.color = "green";
                contactForm.reset();
            }
        });
    }
});
