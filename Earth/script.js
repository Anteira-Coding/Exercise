// This is just to center the sun and earth on the page
const sun = document.getElementById("sun");
const earth = document.getElementById("earth");

const centerSun = () => {
  sun.style.top = `calc(50% - ${sun.offsetHeight / 2}px)`;
  sun.style.left = `calc(50% - ${sun.offsetWidth / 2}px)`;
}

const centerEarth = () => {
  earth.style.top = `calc(50% - ${earth.offsetHeight / 2}px)`;
  earth.style.left = `calc(50% - ${earth.offsetWidth / 2}px)`;
}

centerSun();
centerEarth();

// Resize event listener to recenter sun and earth on window resize
window.addEventListener("resize", () => {
  centerSun();
  centerEarth();
});