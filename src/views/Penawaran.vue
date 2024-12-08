<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useKostStore } from "@/stores/kostStore";

const kostStore = useKostStore();

onMounted(() => {
  kostStore.fetchKosts();
});
</script>

<template>
  <Navbar />
  <section class="menu">
    <div class="menu-n">
      <RouterLink to="/"
        ><font-awesome-icon class="i-h1" :icon="['fas', 'arrow-left']" /><span
          >Penawaran</span
        ></RouterLink
      >
    </div>

    <div class="row">
      <div class="menu-card" v-for="kost in kostStore.kosts">
        <RouterLink :to="{ name: 'detail', query: { id: kost.id } }">
          <div class="card-content">
            <div class="card-image">
              <img
                :src="
                  'http://localhost:4000/uploads/' + kost.gambar[0].imageUrl
                "
                alt="thumbnail"
              />
            </div>
            <div class="card-detail">
              <h2>{{ kost.nama }}</h2>
              <p class="alamat">Metro, Lampung</p>
              <div class="harga">
                <p>Mulai</p>
                <h1>
                  IDR {{ kost.harga.toLocaleString("id-ID") }}
                  <span>/bulan</span>
                </h1>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
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

.menu .row .menu-card {
  border-radius: 10px;
  padding: 1rem;
  -webkit-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  -moz-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
}

.card-image {
  width: 200px;
}

.menu .row .menu-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.card-detail {
  color: #000;
}

.menu-card .card-detail h2 {
  font-size: 1.1rem;
}

.card-detail p {
  font-size: 0.9rem;
}

.card-detail .alamat {
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
