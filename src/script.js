document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("section form");
  const modal = document.getElementById("confirmation-modal");
  const closeModal = document.getElementById("close-modal");

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
});
