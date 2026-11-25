/* Halifax Twin featured card: switch the screenshot between 3D and 2D. */
(function () {
  const card = document.getElementById("work-halifax-twin");
  if (!card) return;

  const shots = card.querySelectorAll(".hfx-shot");
  const buttons = card.querySelectorAll(".hfx-toggle button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.show;
      shots.forEach((shot) => shot.classList.toggle("is-active", shot.dataset.view === view));
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    });
  });
})();
