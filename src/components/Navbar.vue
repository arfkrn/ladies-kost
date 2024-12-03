<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="navbar-logo"
      ><img src="../assets/image/logo3.png" alt="logo"
    /></RouterLink>

    <div class="menu-container">
      <div class="navbar-nav" :class="{ active: isActive }">
        <RouterLink to="/penawaran">Sewa Kost</RouterLink>
        <a href="#fasilitas">Fasilitas</a>
        <a href="#tentang">Tentang</a>
        <a href="#lokasi">Lokasi</a>
      </div>
      <div class="navbar-n">
        <RouterLink class="masuk" to="/auth/login">Masuk</RouterLink>
        <RouterLink class="daftar" to="/auth/register">Daftar</RouterLink>

        <font-awesome-icon
          @click="toggleActive"
          id="hamburger-menu"
          :icon="['fas', 'bars']"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7%;
  background-color: #ffff;
  border-bottom: 0.1rem solid #b3acac;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.navbar .menu-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-logo img {
  width: 68px;
}

.navbar .navbar-nav a,
.navbar .navbar-n a {
  color: #0b0b0b;
  display: inline-block;
  margin: 0 0.5rem;
  font-size: 0.9rem;
}

.navbar .navbar-nav a::after,
.navbar .navbar-n .masuk::after {
  content: "";
  display: block;
  border-bottom: 2px solid #0b0b0b;
  transform: scaleX(0);
  transition: 0.2s linear;
}

.navbar .navbar-nav a:hover::after,
.navbar .navbar-n .masuk:hover::after {
  transform: scaleX(0.5);
}

.menu-container .navbar-n {
  display: flex;
  align-items: center;
  transition: 0.2s;
}

.navbar .navbar-n .daftar {
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 0.7rem;
}

.navbar #hamburger-menu {
  color: #0b0b0b;
  font-size: 1.2rem;
  margin-left: 1rem;
}

#hamburger-menu {
  display: none;
}

@media screen and (max-width: 758px) {
  .navbar-logo {
    width: 10%;
  }

  .navbar-logo img {
    width: 50px;
  }

  #hamburger-menu {
    display: inline-block;
  }

  .navbar .navbar-nav {
    position: absolute;
    top: 100%;
    right: -100%;
    background-color: #fff;
    width: 13rem;
    height: 100vh;
  }

  .navbar .navbar-n {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }

  .navbar .navbar-n a {
    font-size: 0.8rem;
  }

  .navbar .navbar-nav.active {
    right: 0;
  }

  .navbar .navbar-nav a {
    color: #0b0b0b;
    display: block;
    margin: 1.5rem;
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .navbar .navbar-nav a::after {
    transform-origin: 0 0;
  }

  .navbar .navbar-nav a:hover::after {
    transform: scaleX(0.2);
  }
}
</style>
