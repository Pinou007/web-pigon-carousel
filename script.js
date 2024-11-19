// Initialisation du conteneur et des images
const container = document.getElementById('animation-container');
const images = [
    'img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
    'img/image4.jpg',
    'img/image5.jpg'
]; // Liste des images dans le dossier "img"
let currentImageIndex = -1;

// Fonction pour afficher une image avec une animation aléatoire
function showRandomImage() {
    // Sélectionner une image différente de la précédente
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentImageIndex);
    currentImageIndex = randomIndex;

    // Créer un élément image
    const img = document.createElement('img');
    img.src = images[randomIndex];

    // Ajouter une animation aléatoire
    const animations = ['fade-in', 'zoom-in', 'rotate'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    img.classList.add(randomAnimation);

    // Ajouter l'image au conteneur
    container.appendChild(img);

    // Forcer une re-rendu pour activer l'animation CSS
    setTimeout(() => {
        img.style.opacity = 1;
    }, 50);

    // Retirer l'image après un délai
    setTimeout(() => {
        img.style.opacity = 0;
        setTimeout(() => {
            container.removeChild(img);
        }, 1000);
    }, 4000);
}

// Lancer l'animation à intervalles réguliers
setInterval(showRandomImage, 4500);

// Lecture audio
const audio = document.getElementById('background-audio');
audio.volume = 0.5; // Volume réglé à 50 %
