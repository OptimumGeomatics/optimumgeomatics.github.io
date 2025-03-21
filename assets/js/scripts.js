
    //Header Particles Affect
    particlesJS("particles-js", {
      particles: {
        number: { value: 300, density: { enable: true, value_area: 800 } },
        color: { value: ["#ffffff", "#EE4B2B", "#ff9c33"] }, // Red, blue, orange
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: false, mode: "push" } },
        modes: { repulse: { distance: 150 }, push: { particles_nb: 10 } }
      }

    });

    //Navbar scroll JS
    const navEl = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navEl.classList.add('navbar-scrolled');
        } else if (window.scrollY < 56) {
            navEl.classList.remove('navbar-scrolled');
        }
    });

