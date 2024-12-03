<script setup>
import { ref, onMounted } from "vue";

const slideIndex = ref(1);

function nextSlide() {
  showSlides((slideIndex.value += 1));
}

function prevSlide() {
  showSlides((slideIndex.value -= 1));
}

onMounted(() => {
  showSlides(1);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex.value = 1;
  }
  if (n < 1) {
    slideIndex.value = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex.value - 1].style.display = "block";
}
</script>

<template>
  <div class="slideshow-container">
    <div class="slide fade">
      <img src="../assets/image/kamar3.png" style="width: 100%" />
    </div>

    <div class="slide fade">
      <img
        src="../assets/image/WhatsApp Image 2024-10-07 at 10.02.47.jpeg"
        style="width: 100%"
      />
    </div>

    <div class="slide fade">
      <img src="../assets/image/IMG_20241016_144949.jpg" style="width: 100%" />
    </div>

    <!-- Next and previous buttons -->
    <a class="prev" @click="prevSlide">&#10094;</a>
    <a class="next" @click="nextSlide">&#10095;</a>
  </div>
</template>

<style scoped>
/* Slideshow container */
.details .slideshow-container {
  max-width: 750px;
  position: relative;
  margin: 0 auto 2rem auto;
  border-radius: 7px;
  overflow: hidden;
}

/* Hide the images by default */
.slide {
  display: none;
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

@media screen and (max-width: 758px) {
  .prev,
  .next {
    font-size: 12px;
  }
}
</style>
