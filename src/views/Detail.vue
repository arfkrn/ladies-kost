<script setup>
import { useRoute } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import DetailKost from "@/components/DetailKost.vue";
import Loader from "@/components/Loader.vue";

const route = useRoute();
const kostId = route.query.id;
</script>

<template>
    <Navbar />
    <Suspense>
        <DetailKost :id="kostId" />

        <template #fallback><Loader /></template>
    </Suspense>
</template>
