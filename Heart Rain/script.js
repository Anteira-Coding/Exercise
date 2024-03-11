const heartRain = document.getElementById('heart-rain');
const generateHeart = () => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.animationDuration = `${Math.random() * 8 + 4}s`;
  heartRain.appendChild(heart);
  setTimeout(() => {
    heartRain.removeChild(heart);
  }, 12000);
};
setInterval(generateHeart, 100);