// ============================================
// MENU MOBILE TOGGLE
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  // Criar o botão do menu mobile se não existir
  const navWrapper = document.querySelector(".nav-wrapper");
  const menu = document.querySelector(".menu");

  if (!document.querySelector(".menu-toggle")) {
    const menuToggle = document.createElement("div");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
    navWrapper.appendChild(menuToggle);

    // Event listener para o menu toggle
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // Fechar menu ao clicar em um link
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      document.querySelector(".menu-toggle").classList.remove("active");
    });
  });

  // Fechar menu ao redimensionar tela
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("active");
      document.querySelector(".menu-toggle").classList.remove("active");
    }
  });
});

// ============================================
// SMOOTH SCROLLING PARA LINKS INTERNOS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "var(--shadow-sm)";
  }
});

// ============================================
// ANIMAÇÃO DE ENTRADA DOS CARDS
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animação aos cards quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".card-servico, .card-depoimento, .stat-box"
  );

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    card.style.transitionDelay = `${index * 0.1}s`;

    observer.observe(card);
  });
});

// ============================================
// VALIDAÇÃO DO FORMULÁRIO
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contato-form form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const servico = document.getElementById("servico").value;

      // Validação básica
      if (!nome || !email || !telefone || !servico) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
      }

      // Se chegou até aqui, o formulário é válido
      alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
      form.reset();
    });
  }
});
