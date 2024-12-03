<script setup>
import { onMounted } from "vue";

function dropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const options = dropdown.querySelectorAll(".menu li");
    const menu = dropdown.querySelector(".menu");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
      select.classList.toggle("select-clicked");
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");

        options.forEach((option) => {
          option.classList.remove("active");
        });

        option.classList.add("active");
      });
    });
  });
}

onMounted(() => {
  dropdown();
});
</script>

<template>
  <div class="dropdown">
    <div class="select">
      <span class="selected">1 Bulan</span>
      <div class="caret"></div>
    </div>
    <ul class="menu">
      <li @click="$emit('changeMonth', 1)" class="active">1 Bulan</li>
      <li @click="$emit('changeMonth', 2)">2 Bulan</li>
      <li @click="$emit('changeMonth', 3)">3 Bulan</li>
      <li @click="$emit('changeMonth', 4)">4 Bulan</li>
      <li @click="$emit('changeMonth', 5)">5 Bulan</li>
      <li @click="$emit('changeMonth', 6)">6 Bulan</li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  width: 7rem;
  position: relative;
}

.select {
  background: #2a2f3b;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #2a2f3b;
  border-radius: 0.5rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.selected {
  font-size: 0.9rem;
}

.select-clicked {
  border: 2px solid #26489a;
  box-shadow: 0, 0, 0.8rem, #26489a;
}

.select:hover {
  background: #323741;
}

.caret {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #fff;
  transition: 0.3s;
}

.caret-rotate {
  transform: rotate(180deg);
}

.menu {
  list-style: none;
  padding: 0.2rem 0.5rem;
  background: #323741;
  border: 1px solid #363a43;
  box-shadow: 0, 0.5rem, 1rem, rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  color: #9fa5b5;
  position: absolute;
  top: 3.5rem;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  display: none;
  transition: 0.2s;
  z-index: 1;
}

.menu li {
  margin: 0.3rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.menu li:hover {
  background: #2a2d35;
  padding: 0.1rem;
}

.active {
  background: #23242a;
  padding: 0.4rem;
}

.menu-open {
  display: block;
  opacity: 1;
}

@media screen and (max-width: 758px) {
  .dropdown {
    width: 6rem;
  }

  .menu {
    top: 2.7rem;
  }

  .select {
    padding: 5px 8px;
  }

  .selected {
    font-size: 0.8rem;
  }

  .menu li {
    font-size: 0.8rem;
  }
}
</style>
