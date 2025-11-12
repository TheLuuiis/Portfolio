
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.profile .typewriter');
  if (!el) return;

  const fullText = el.getAttribute('data-text')?.trim() || '';
  const typeSpeed = 90;
  const deleteSpeed = 60;
  const pauseEnd = 1200;
  const pauseStart = 400;

  let i = 0;
  let deleting = false;

  function loop() {
    if (!deleting) {
      if (i < fullText.length) {
        el.textContent += fullText[i];
        i++;
        setTimeout(loop, typeSpeed);
      } else {
        deleting = true;
        setTimeout(loop, pauseEnd);
      }
    } else {
      if (i > 0) {
        i--;
        el.textContent = fullText.slice(0, i);
        setTimeout(loop, deleteSpeed);
      } else {
        deleting = false;
        setTimeout(loop, pauseStart);
      }
    }
  }

  el.textContent = '';
  loop();
});
