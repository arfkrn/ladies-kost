<script setup>
import { RouterLink } from "vue-router";
import axios from "axios";
import { ref } from "vue";

const kosts = ref(null);

await axios.get("http://localhost:3000/api/v1/kost").then((res) => {
    kosts.value = res.data.data;
});
</script>

<template>
    <div class="menu-card" v-for="kost in kosts">
        <RouterLink :to="{ name: 'detail', query: { id: kost.id } }">
            <div class="card-content">
                <div class="card-image">
                    <img
                        :src="
                            'http://localhost:3000/uploads/' +
                            kost.gambar[0].imageUrl
                        "
                        alt="thumbnail"
                    />
                </div>
            </div>
            <div class="card-detail">
                <h2>{{ kost.nomor }}</h2>
                <p class="alamat">Metro, Lampung</p>
                <div class="harga">
                    <p>Mulai</p>
                    <h1>
                        IDR 500.000
                        <span>/bulan</span>
                    </h1>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.menu-card {
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 2rem;
    -webkit-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
    -moz-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
    box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
}

.card-image {
    width: 200px;
}

.menu-card img {
    width: 100%;
    height: auto;
    border-radius: 4px;
}

.card-detail {
    color: #000;
}

.card-detail h2 {
    font-size: 1.1rem;
}

.card-detail p {
    font-size: 0.9rem;
}

.alamat {
    color: rgb(177, 177, 177);
    font-size: 0.8rem;
}

.harga {
    margin-top: 1rem;
}

.harga h1 {
    font-size: 1rem;
}

.harga span {
    font-weight: 500;
    font-size: 0.7rem;
}
</style>
