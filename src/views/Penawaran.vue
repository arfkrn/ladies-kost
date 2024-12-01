<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="menu">
    <div class="menu-n">
      <RouterLink to="/"
        ><font-awesome-icon class="i-h1" :icon="['fas', 'arrow-left']" /><span
          >Penawaran</span
        ></RouterLink
      >
    </div>

    <div class="row">
      <div class="menu-card">
        <RouterLink to="detail">
          <img src="../assets/image/kamar3 2.png" alt="" />
          <h2>Kamar 1</h2>
          <p class="alamat">Metro, Lampung</p>
          <div class="harga">
            <p>Mulai</p>
            <h1>IDR 500.000 <span>/bulan</span></h1>
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
  padding: 1.4rem 7%;
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
  margin: 2rem 0 5rem 0;
  justify-content: space-around;
}

.menu .row .menu-card {
  border-radius: 10px;
  padding: 1rem;
  -webkit-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  -moz-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
}

.menu .row .menu-card img {
  width: 100%;
  border-radius: 10px;
}

.menu .row .menu-card h2 {
  color: black;
  font-size: 1.1rem;
  padding: 1rem;
}

.menu .row .menu-card .alamat {
  color: #949494;
  padding: 1rem;
  margin-top: -1.5rem;
  font-size: 0.7rem;
}

.menu .row .menu-card .harga {
  padding-inline: 1rem;
}

.menu .row .menu-card .harga p {
  color: black;
}

.menu .row .menu-card .harga h1 {
  color: #000000;
  font-size: 1.2rem;
  padding-bottom: 3rem;
}

.menu .row .menu-card .harga span {
  font-size: 0.8rem;
  font-weight: 400;
}
</style>
