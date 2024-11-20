// Initialisation du conteneur et des images
const container = document.getElementById('animation-container');
const images = Array.from({ length: 13 }, (_, i) => `img/image${i + 1}.jpg`);
let currentImageIndex = -1;

// Fonction pour afficher une image avec une animation aléatoire
function showRandomImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === currentImageIndex);
    currentImageIndex = randomIndex;

    const img = document.createElement('img');
    img.src = images[randomIndex];

    const animations = ['fade-in', 'zoom-in', 'rotate'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    img.classList.add(randomAnimation);

    container.appendChild(img);

    setTimeout(() => {
        img.style.opacity = 1;
    }, 50);

    setTimeout(() => {
        img.style.opacity = 0;
        setTimeout(() => {
            container.removeChild(img);
        }, 1000);
    }, 4000);
}

// Lancer les animations d'images à intervalles réguliers
setInterval(showRandomImage, 4500);

// Gestion de l'audio
const audio = document.getElementById('background-audio');

// Démarrer la musique automatiquement
audio.play().catch(err => {
    console.error('Erreur lors de la lecture audio :', err);
});

// Barre d'information
const infoBar = document.getElementById('info-bar');
const closeBarBtn = document.getElementById('close-bar');

// Fermeture de la barre avec mémorisation
closeBarBtn.addEventListener('click', () => {
    infoBar.classList.add('hidden');
    localStorage.setItem('infoBarClosed', 'true');
});

// Récupérer l'état de la barre au chargement
if (localStorage.getItem('infoBarClosed') === 'true') {
    infoBar.classList.add('hidden');
}
