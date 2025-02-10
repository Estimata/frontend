document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");
  const galleryImages = document.querySelectorAll(".galeri-img");

  galleryImages.forEach((image) => {
    image.addEventListener("click", function () {
      modal.style.visibility = "visible"; // Pastikan modal bisa terlihat lagi
      modal.classList.add("active");
      modalImage.src = this.src;
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.visibility = "hidden"; // Sembunyikan setelah animasi selesai
    }, 500); // Sesuai dengan durasi transition di CSS
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});
