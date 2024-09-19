document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.btn-prev');
  const nextButton = document.querySelector('.btn-next');
  const sponsorLogos = document.querySelector('.sponsor-logos');
  
  // Menghitung total lebar semua logo
  const logoWidth = sponsorLogos.querySelector('.sponsor-logo').offsetWidth;
  const totalLogos = sponsorLogos.children.length;
  const visibleLogos = 3; // Misalkan kita ingin menampilkan 3 logo dalam satu waktu
  const maxOffset = (totalLogos - visibleLogos) * (logoWidth + 30); // 30px adalah jarak antar logo

  let currentOffset = 0;

  nextButton.addEventListener('click', function () {
      if (currentOffset < maxOffset) {
          currentOffset += logoWidth + 30; // Pindah sebesar lebar logo + jarak
      }
      sponsorLogos.style.transform = `translateX(-${currentOffset}px)`;
  });

  prevButton.addEventListener('click', function () {
      if (currentOffset > 0) {
          currentOffset -= logoWidth + 30;
      }
      sponsorLogos.style.transform = `translateX(-${currentOffset}px)`;
  });
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


