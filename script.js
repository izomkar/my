const glow = document.getElementById('cursorGlow');
window.addEventListener('pointermove', (event) => {
  if (glow) {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

const copyButton = document.getElementById('copyHandle');
const feedback = document.getElementById('copyFeedback');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('@izomkar');
    feedback.textContent = 'HANDLE COPIED — SEE YOU OUT THERE.';
  } catch {
    feedback.textContent = 'GITHUB: github.com/izomkar';
  }
  window.setTimeout(() => { feedback.textContent = ''; }, 3000);
});
