document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");
  const galleryImages = document.querySelectorAll(".galeri-img");

  galleryImages.forEach((image) => {
    image.addEventListener("click", function () {
      modal.classList.add("active");
      modalImage.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  });
});
