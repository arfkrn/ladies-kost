<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <div class="back">
        <RouterLink to="/"
            ><font-awesome-icon
                class="kembali"
                :icon="['fas', 'arrow-left']"
            /><span>Kembali</span></RouterLink
        >
    </div>
    <RouterView />
</template>

<style scoped>
.back {
    padding: 3% 0 0 4%;
}

.kembali {
    color: black;
    margin-right: 8px;
    font-size: 1.3rem;
}

span {
    color: black;
    font-size: 1.3rem;
}

@media screen and (max-width: 758px) {
    .kembali {
        font-size: 1rem;
    }

    span {
        font-size: 1rem;
    }
}
</style>
