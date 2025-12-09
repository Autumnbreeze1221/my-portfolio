document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation untuk home-content
    const homeContent = document.querySelector(".home-content");
    const homeImg = document.querySelector(".home-img img");
    const bgm = document.getElementById("bgm");
let activated = false;

function activateBGM() {
    if (!activated) {
        bgm.muted = false;
        bgm.play();
        activated = true;
    }
    
}

window.addEventListener("scroll", function() {
  const logo = document.querySelector(".logo");
  if (window.scrollY > 50) {
    logo.style.opacity = "0";
    logo.style.pointerEvents = "none"; // supaya nggak bisa diklik saat hilang
  } else {
    logo.style.opacity = "1";
    logo.style.pointerEvents = "auto";
  }
});

document.addEventListener("click", activateBGM);
document.addEventListener("scroll", activateBGM);
document.addEventListener("keydown", activateBGM);
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

    homeContent.style.opacity = "0";
    homeContent.style.transform = "translateY(30px)";
    homeImg.style.opacity = "0";
    homeImg.style.transform = "scale(0.85)";

    setTimeout(() => {
        homeContent.style.transition = "1s ease";
        homeContent.style.opacity = "1";
        homeContent.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        homeImg.style.transition = "1.2s ease";
        homeImg.style.opacity = "1";
        homeImg.style.transform = "scale(1)";
    }, 500);

    // Animasi navbar hover underline (smooth)
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transition = "0.3s";
            link.style.letterSpacing = "1px";
        });

        link.addEventListener("mouseleave", () => {
            link.style.letterSpacing = "0px";
        });
    });

    // Smooth scroll
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

