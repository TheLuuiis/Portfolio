
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

/* Animaciones implementadas con scrollReveal */
const sr = ScrollReveal({
    reset: true,         
    distance: "60px",    
    duration: 1500,       
    easing: "cubic-bezier(0.19, 0.75, 0.75, 1)", 
    opacity: 0
});

sr.reveal(".container-header", {
    origin: "top"
});

sr.reveal(".profile .me", {
    origin: "left"
});

sr.reveal(".profile h1", {
    origin: "bottom",
    delay: 200
});

sr.reveal(".profile p", {
    origin: "bottom",
    delay: 350
});

sr.reveal(".container-contact", {
    origin: "bottom",
    delay: 500
});

sr.reveal(".title-experience", {
    origin: "left",
});

sr.reveal(".timeline-item.left", {
    origin: "left",
    delay: 200
});

sr.reveal(".timeline-item.right", {
    origin: "right",
    delay: 300
});

sr.reveal(".title-me", {
    origin: "left",
});

sr.reveal(".description-me", {
    origin: "bottom",
    delay: 250
});

sr.reveal(".img-hero", {
    origin: "right",
    delay: 300
});

sr.reveal(".title-education", {
    origin: "left",
});

sr.reveal(".education", {
    origin: "bottom",
    delay: 200
});

sr.reveal(".title-technologies", {
    origin: "left",
});

sr.reveal(".technologies", {
    origin: "bottom",
    interval: 200 
});

    const boton = document.getElementById("btnCopiar");
    const toast = document.getElementById("toast");

    boton.addEventListener("click", () => {
        const numero = "+57 322 5257230"; 

        navigator.clipboard.writeText(numero).then(() => {
            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);
        });
    });

  /* Theme Dark */
  const root = document.documentElement;
  const key = 'theme';
  const btn = document.querySelector('.container-theme');

  const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem(key);
  const initial = saved || (prefersDark() ? 'dark' : 'light');

  function setTheme(t) {
    root.classList.add('theme-fade');
    root.setAttribute('data-theme', t);
    localStorage.setItem(key, t);
    setTimeout(() => root.classList.remove('theme-fade'), 500);
  }

  setTheme(initial);

  btn?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem(key)) setTheme(e.matches ? 'dark' : 'light');
  });

});