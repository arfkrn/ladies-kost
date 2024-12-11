<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import ListKost from "@/components/ListKost.vue";
import { useKostStore } from "@/stores/kostStore";

// const kostStore = useKostStore();

// onMounted(() => {
//   kostStore.fetchKosts();
// });
</script>

<template>
    <Navbar />
    <section class="menu">
        <div class="menu-n">
            <RouterLink to="/"
                ><font-awesome-icon
                    class="i-h1"
                    :icon="['fas', 'arrow-left']"
                /><span>Penawaran</span></RouterLink
            >
        </div>

        <div class="row">
            <Suspense>
                <ListKost />

                <template #fallback> Loading... </template>
            </Suspense>
        </div>
    </section>
</template>

<style scoped>
.menu {
    min-height: 500px;
    margin-top: 8rem;
    margin-left: 2rem;
    padding-inline: 7%;
}

.menu .menu-n {
    display: flex;
    align-items: center;
}

.menu .menu-n .i-h1 {
    font-size: 1.5rem;
    color: black;
    margin-right: 10px;
}

.menu .menu-n span {
    color: black;
    font-size: 1.5rem;
}

.menu .row {
    display: flex;
    margin-block: 2rem 5rem;
    flex-wrap: wrap;
    gap: 3rem;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media screen and (max-width: 758px) {
    .menu {
        padding-inline: 5%;
        margin-top: 5rem;
        margin-left: 0;
    }

    .menu-card {
        flex-grow: 1;
    }

    .menu .menu-n .i-h1 {
        font-size: 1rem;
        margin-right: 8px;
    }

    .menu .menu-n span {
        font-size: 1rem;
    }

    .menu .row {
        justify-content: center;
    }

    .card-image {
        width: 100%;
    }
}
</style>
