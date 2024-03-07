document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const contentSections = document.querySelectorAll(".content-section");
                    contentSections.forEach(function(section) {
                        section.classList.add("hidden");
                    });
                    targetSection.classList.remove("hidden");
                }
            }
        });
    });
});
