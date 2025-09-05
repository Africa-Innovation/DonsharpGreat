// script pour le bacground de la nav quand on start a scrolle

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".head");

  function toggleHeaderBackground() {
      if (window.scrollY > 0) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  }

  window.addEventListener("scroll", toggleHeaderBackground);
});


//pour le menu burger

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navMobile = document.querySelector('.nav-mobile');
    
    if (hamburger && navMobile) {
        hamburger.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            navMobile.classList.toggle('active');
        });

        // Fermer le menu en cliquant à l'extérieur
        document.addEventListener('click', function (e) {
            if (!navMobile.contains(e.target) && !hamburger.contains(e.target)) {
                navMobile.classList.remove('active');
            }
        });

        // Fermer le menu après avoir cliqué sur un lien
        const mobileLinks = navMobile.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('active');
            });
        });
    }
});

//pour le tabar dans à propos

// Sélectionne tous les boutons et contenus
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

// Fonction pour activer un onglet
function activateTab(tabId) {
    // Supprime la classe active de tous les boutons
    buttons.forEach(btn => btn.classList.remove("active"));
    // Masque tout le contenu
    contents.forEach(content => (content.style.display = "none"));
    // Ajoute la classe active au bouton correspondant
    document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
    // Affiche le contenu correspondant
    document.getElementById(tabId).style.display = "block";
}

// Ajoute un gestionnaire d'événements à chaque bouton
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab");
        activateTab(tabId);
    });
});

// Active le premier onglet par défaut
activateTab("biographie");


//disco
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => observer.observe(item));


//partenaires



