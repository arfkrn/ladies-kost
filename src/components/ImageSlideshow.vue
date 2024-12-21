<script setup>
import { ref, onMounted, useTemplateRef } from "vue";

const slideIndex = ref(1);
const itemRefs = useTemplateRef("items");

const props = defineProps({
    images: Array,
});
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
    if (n > itemRefs.value.length) {
        slideIndex.value = 1;
    }
    if (n < 1) {
        itemRefs.value = itemRefs.value.length;
    }
    for (i = 0; i < itemRefs.value.length; i++) {
        itemRefs.value[i].style.display = "none";
    }
    itemRefs.value[slideIndex.value - 1].style.display = "block";
}
</script>

<template>
    <div class="slideshow-container">
        <div class="slide fade" v-for="image in props.images" ref="items">
            <img
                :src="'http://localhost:4000/uploads/' + image.imageUrl"
                alt=""
            />
        </div>

        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
    </div>
</template>

<style scoped>
.details .slideshow-container {
    max-width: 750px;
    position: relative;
    margin: 0 auto 2rem auto;
    border-radius: 7px;
    overflow: hidden;
}

.slide {
    display: none;
}

.slide img {
    width: 100%;
}

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

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

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
