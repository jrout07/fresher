tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 200, // more particles for density
      density: { enable: true, area: 1200 }
    },
    shape: {
      type: ["image", "circle"],
      image: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", width: 35, height: 35 },
        { src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", width: 35, height: 35 },
        { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", width: 35, height: 35 },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", width: 35, height: 35 },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", width: 35, height: 35 },
        { src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", width: 35, height: 35 },
        { src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tsparticles_logo.svg", width: 35, height: 35 }
      ]
    },
    color: { 
      value: ["#ff4d6d", "#00ffff", "#ffd700", "#4caf50", "#ff69b4", "#00ff7f"]
    },
    opacity: { value: 0.8, random: true },
    size: { 
      value: 5, // smaller tiny circle particles
      random: { enable: true, minimumValue: 2 }
    },
    links: { enable: false },
    move: {
      enable: true,
      speed: 1.2, // slower for smoother motion
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
  },
  retina_detect: true,
  background: { color: "transparent" }
});

// Countdown (unchanged)
const countdown = () => {
  const targetDate = new Date("October 29, 2025 18:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
};

setInterval(countdown, 1000);
countdown();
