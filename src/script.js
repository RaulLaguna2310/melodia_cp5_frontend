document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("section form");
  const modal = document.getElementById("confirmation-modal");
  const closeModal = document.getElementById("close-modal");
  const ctaButton = document.getElementById("cta-button");
  const ctaAudio = document.getElementById("cta-audio");
  const menuButton = document.getElementById("menu-button");
  const menuDropdown = document.getElementById("menu-dropdown");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();

      if (nome && email) {
        form.reset();
        modal.classList.remove("hidden");
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  if (ctaButton && ctaAudio) {
    ctaAudio.volume = 0.5; // Define o volume para 50%
    ctaButton.addEventListener("click", () => {
      ctaAudio.play();
    });
  }

  if (menuButton && menuDropdown) {
    menuButton.addEventListener("click", () => {
      menuDropdown.classList.toggle("hidden");
    });

    menuDropdown.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuDropdown.classList.add("hidden");
      });
    });
  }

  const previewButtons = document.querySelectorAll(".preview-btn");

  previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const audioId = button.getAttribute("data-audio");
      const audioElement = document.getElementById(audioId);

      if (audioElement) {
        // Pause all other audios
        document.querySelectorAll("audio").forEach((audio) => {
          audio.pause();
          audio.currentTime = 0;
        });

        // Play the selected audio
        audioElement.play();
      }
    });
  });
});
