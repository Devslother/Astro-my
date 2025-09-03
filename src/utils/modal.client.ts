export default function initModals() {
  function ready() {
    // Open modal
    document.addEventListener("click", (e) => {
      const trigger = (e.target as HTMLElement).closest("[data-modal-open]");
      if (trigger) {
        const modalId = trigger.getAttribute("data-modal-open");
        const modal = document.getElementById(modalId) as HTMLDialogElement;
        if (modal) {
          document.body.style.overflow = "hidden";
          modal.showModal();
        }
      }
    });

    // Close modal
    document.addEventListener("click", (e) => {
      const closeBtn = (e.target as HTMLElement).closest("[data-modal-close]");
      if (closeBtn) {
        const modal = closeBtn.closest("dialog") as HTMLDialogElement;
        if (modal) {
          closeModal(modal);
        }
      }
    });

    // Close modal on click outside
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      if (target.tagName === "DIALOG") {
        const rect = target.getBoundingClientRect();
        const isInDialog =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;

        if (!isInDialog) {
          closeModal(target as HTMLDialogElement);
        }
      }

      if (target.hasAttribute("data-modal-wrapper")) {
        const modal = target.closest("dialog") as HTMLDialogElement;
        if (modal) {
          closeModal(modal);
        }
      }
    });

    // Close modal on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const openModal = document.querySelector(
          "dialog[open]"
        ) as HTMLDialogElement;
        if (openModal) {
          closeModal(openModal);
        }
      }
    });

    function closeModal(modal: HTMLDialogElement) {
      document.body.style.overflow = "";
      modal.close();
    }

    document.addEventListener(
      "close",
      (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === "DIALOG") {
          document.body.style.overflow = "";
        }
      },
      true
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("astro:page-load", ready);
  } else {
    ready();
  }
}
