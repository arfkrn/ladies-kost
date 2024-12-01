<script setup>
import { ref } from "vue";
// slideshow
const slideIndex = ref(1);
showSlides(slideIndex.value);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
</script>

<template>
  <div class="details">
    <div class="details-container">
      <div class="hh">
        <a href="menu.html"
          ><i data-feather="arrow-left" class="i-details"></i
        ></a>
        <h1 class="h1-details">Kamar 1</h1>
      </div>
      <div class="slideshow-container">
        <div class="mySlides fade">
          <img src="../assets/image/kamar3.png" style="width: 100%" />
        </div>

        <div class="mySlides fade">
          <img
            src="../assets/image/WhatsApp Image 2024-10-07 at 10.02.47.jpeg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides fade">
          <img
            src="../assets/image/IMG_20241016_144949.jpg"
            style="width: 100%"
          />
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>
      </div>
      <p class="p-p">
        Ladies Kost menawarkan kamar per bulan yang nyaman dan terjangkau, ideal
        untuk Anda yang mencari hunian dengan suasana tenang dan aman. Setiap
        kamar dirancang dengan baik, dilengkapi dengan fasilitas esensial
        seperti tempat tidur, lemari, dan kamar mandi untuk menunjang aktivitas
        harian Anda.
      </p>
      <p class="p-p">
        Lingkungan kost kami bersih dan terawat, dengan area bersama yang nyaman
        untuk bersosialisasi. Nikmati akses mudah ke fasilitas umum seperti
        minimarket, kampus, dan transportasi umum. Kami juga menyediakan layanan
        laundry dan keamanan 24 jam untuk memastikan kenyamanan dan keselamatan
        penghuni.
      </p>
      <p class="p-p">
        Pilih paket sewa yang sesuai dengan kebutuhan Anda, mulai dari 1 bulan
        hingga 6 bulan, dengan harga yang kompetitif. Ladies Kost adalah pilihan
        tepat untuk hunian yang nyaman, praktis, dan mendukung gaya hidup
        modern.
      </p>
      <h3 class="p-p">
        Pesan kamar Anda sekarang dan rasakan kenyamanan tinggal di Ladies Kost!
      </h3>

      <div class="detail-footer">
        <div class="price">
          <p>1 Bulan IDR 300.000</p>
        </div>
        <div class="price">
          <p>2 Bulan IDR 600.000</p>
        </div>
        <div class="price">
          <p>3 Bulan IDR 900.000</p>
        </div>
        <div class="price">
          <p>4 Bulan IDR 1.200.000</p>
        </div>
        <div class="price">
          <p>5 Bulan IDR 1.500.000</p>
        </div>
        <div class="price">
          <p>6 Bulan IDR 1.800.000</p>
        </div>
        <div class="pesan">
          <a href="#" class="pesan-1">Pesan</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  padding: 1.4rem 7%;
  margin-top: 8rem;
  margin-left: 2rem;
}

.details .details-container {
  -webkit-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  -moz-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  padding: 2rem;
  border-radius: 10px;
}

.details .details-container .hh {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
}

.details-container .hh .h1-details {
  font-size: 1.8rem;
}
.details-container .hh .i-details {
  color: black;
  margin-right: 1rem;
}

/* Slideshow container */
.details .slideshow-container {
  max-width: 750px;
  position: relative;
  margin: 0 auto 2rem auto;
  border-radius: 7px;
  overflow: hidden;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

.details .details-container .p-p {
  text-align: justify;
  margin-bottom: 0.5rem;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* details footer */
.details .details-container .detail-footer {
  display: flex;
}

.details .details-container .detail-footer .price {
  margin-inline: 0.3rem;
  margin-block: 2rem;
  border: 1px solid black;
  border-radius: 0.7rem;
  padding: 0.6rem;
}

.details .details-container .detail-footer .price:hover {
  background-color: #000000;
  color: #fff;
}

.details .details-container .detail-footer .price::after {
  background-color: #000000;
  color: #fff;
}

.details .details-container .detail-footer .pesan {
  margin-block: 2rem;
  margin-left: 4rem;
  background-color: #0026ff;
  padding: 0.6rem 1.5rem;
  border-radius: 0.7rem;
}

.details .details-container .detail-footer .pesan .pesan-1,
.pesan-nan .pesan-1 {
  color: #fff;
  border-bottom: 0.1rem solid #fff;
}

.details .details-container .detail-footer .pesan .pesan-1:hover,
.pesan-nan .pesan-1:hover {
  content: "";
  color: #000000;
  border-bottom: 0.1rem solid #000000;
}

.details .details-container .detail-footer .pesan-nan {
  margin-block: 2rem;
  margin-left: 62.5rem;
  background-color: #0026ff;
  padding: 0.6rem 1.5rem;
  border-radius: 0.7rem;
}
</style>
