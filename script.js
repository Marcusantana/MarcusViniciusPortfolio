const hamburguer = document.querySelector(".hamburguer");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-list a");

// Abrir/Fechar menu ao clicar no hamburguer
hamburguer.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Fechar menu ao clicar em um link e rolar suavemente para a seção
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link

        const targetId = link.getAttribute("href"); // Obtém o ID da seção
        const targetSection = document.querySelector(targetId); 

        if (targetSection) {
            // Fecha o menu
            navbar.classList.remove("active");

            // Habilita o scroll no body
            document.body.style.overflow = '';

            // Faz o scroll suave até a seção
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Evita scroll no fundo quando o menu está aberto
navbar.addEventListener('transitionend', () => {
    if (navbar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});
  document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const copyButton = document.getElementById('copyButton');
const contentToCopy = "markinhussantana@gmail.com";

copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(contentToCopy).then(() => {
        this.classList.add('copied');
        
        setTimeout(() => {
            this.classList.remove('copied');
        }, 1600);
    });
});

