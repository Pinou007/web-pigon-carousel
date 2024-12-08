// Constantes et éléments du DOM
const TOTAL_IMAGES = 30; // Nombre d'images disponibles
const background = document.querySelector('.background');
const foreground = document.querySelector('.foreground');
const audio = document.getElementById('backgroundMusic');
const popup = document.getElementById('popup');

// Fonction pour passer en plein écran
function enableFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen(); // Activer le mode plein écran
    }
}

// Afficher la pop-up une seule fois
function showPopup() {
    // Vérifier si l'utilisateur a déjà vu la pop-up grâce au localStorage
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup && window.innerWidth > 768) { // Afficher si la taille de l'écran est suffisamment grande
        popup.style.display = 'block'; // Afficher la pop-up
        localStorage.setItem('hasSeenPopup', 'true'); // Enregistrer que l'utilisateur a vu la pop-up
    }
}

// Fermer la pop-up
function closePopup() {
    popup.style.display = 'none'; // Cacher la pop-up
}

// Obtenir une image aléatoire parmi les 30 images disponibles
function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * TOTAL_IMAGES) + 1; // Choisir un nombre aléatoire entre 1 et 30
    return `img/image${randomNumber}.jpg`; // Retourner l'URL de l'image
}

// Changer l'image du carrousel avec une transition en fondu
function changeImages() {
    const newImage = getRandomImage(); // Obtenir une nouvelle image
    background.style.opacity = 0; // Diminuer l'opacité de l'image de fond
    foreground.style.opacity = 0; // Diminuer l'opacité de l'image au premier plan

    setTimeout(() => {
        // Après 2 secondes, mettre à jour les images
        background.style.backgroundImage = `url(${newImage})`;
        foreground.src = newImage;
        background.style.opacity = 1; // Augmenter l'opacité de l'image de fond
        foreground.style.opacity = 1; // Augmenter l'opacité de l'image au premier plan
    }, 2000); // La transition dure 2 secondes
}

// Initialiser le carrousel avec une image aléatoire
function initCarousel() {
    const initialImage = getRandomImage(); // Obtenir une image aléatoire pour démarrer
    background.style.backgroundImage = `url(${initialImage})`;
    foreground.src = initialImage;
    setInterval(changeImages, 5000); // Changer l'image toutes les 5 secondes
}

// Activer la musique après une interaction utilisateur
function enableAudio() {
    audio.play(); // Lancer la musique en boucle
}

// Au chargement de la page
window.onload = () => {
    enableFullscreen(); // Activer le plein écran
    initCarousel(); // Initialiser le carrousel
    showPopup(); // Afficher la pop-up si nécessaire

    // Lancer la musique après un clic de l'utilisateur
    document.addEventListener('click', enableAudio, { once: true });
};
