const canvas = document.getElementById('solar-system');
const ctx = canvas.getContext('2d');

const sun = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 30,
    color: 'yellow'
};

const earth = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 12,
    color: 'blue',
    orbitRadius: 120,
    angle: 0,
    orbitSpeed: 0.01
};

const moon = {
    x: earth.x,
    y: earth.y,
    size: 6,
    color: 'grey',
    orbitRadius: 28,
    angle: 0,
    orbitSpeed: 0.05
};

function drawCircle(x, y, size, color) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawEllipse(x, y, radiusX, radiusY, angle, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(radiusX, 0);
    ctx.lineTo(radiusX - radiusY, 0);
    ctx.quadraticCurveTo(0, 0, 0, radiusY);
    ctx.lineTo(0, radiusY - radiusY);
    ctx.quadraticCurveTo(0, 0, radiusX, 0);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    earth.angle += earth.orbitSpeed;
    moon.angle += moon.orbitSpeed;

    drawCircle(sun.x, sun.y, sun.size, sun.color);

    const earthX = sun.x + Math.cos(earth.angle) * earth.orbitRadius;
    const earthY = sun.y + Math.sin(earth.angle) * earth.orbitRadius;
    drawEllipse(earthX, earthY, earth.size, earth.size, 0, earth.color);

    const moonX = earthX + Math.cos(moon.angle) * moon.orbitRadius;
    const moonY = earthY + Math.sin(moon.angle) * moon.orbitRadius;
    drawCircle(moonX, moonY, moon.size, moon.color);

    requestAnimationFrame(animate);
}

animate();