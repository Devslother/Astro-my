(function () {
  const copyBtn = document.getElementById("copyBtn");
  const msg = document.getElementById("copiedMsg");

  copyBtn?.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      msg.classList.add("visible");
      setTimeout(() => msg.classList.remove("visible"), 2000);
    });
  });
})();
