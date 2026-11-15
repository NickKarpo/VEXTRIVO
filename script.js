document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const demoButtons = document.querySelectorAll(".prompt-options button");
  demoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentText = button.textContent.trim();
      button.textContent = `Selected: ${currentText}`;
      button.disabled = true;
      button.style.opacity = "0.8";
    });
  });
});
