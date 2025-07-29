const panel = document.querySelector('.glass-panel');

// observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      panel.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

observer.observe(panel);

// intersct
panel.addEventListener('mousemove', (e) => {
  const rect = panel.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -15;
  const rotateY = ((x - centerX) / centerX) * 15;

  panel.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

panel.addEventListener('mouseleave', () => {
  panel.style.transform = `rotateX(0deg) rotateY(0deg)`;
});