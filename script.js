// Floating Hearts + "Sorry" Background
const canvas = document.getElementById("bgCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let hearts = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function createHeart() {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 5,
      speed: Math.random() * 1 + 0.3,
      text: Math.random() > 0.5 ? "♥" : "Sorry"
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
      ctx.fillStyle = "rgba(255,255,255,0.15)";
      ctx.font = `${h.size * 2}px Arial`;
      ctx.fillText(h.text, h.x, h.y);
      h.y -= h.speed;
      if (h.y < -20) h.y = canvas.height + 20;
    });
    requestAnimationFrame(animate);
  }

  for (let i = 0; i < 60; i++) createHeart();
  animate();
}
