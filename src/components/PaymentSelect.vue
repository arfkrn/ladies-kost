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
      <span class="selected">Cash</span>
      <div class="caret"></div>
    </div>
    <ul class="menu">
      <li @click="$emit('changePayment', 1)" class="active">Cash</li>
      <li @click="$emit('changePayment', 2)">Transfer</li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  width: 100%;
  position: relative;
}

.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #2a2f3b;
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  cursor: pointer;
}

.selected {
  font-size: 1rem;
}

.caret {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #000000;
  transition: 0.3s;
}

.caret-rotate {
  transform: rotate(180deg);
}

.menu {
  list-style: none;
  padding: 0.2rem 0.5rem;
  background: #323741;
  box-shadow: 0, 0.5rem, 1rem, rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  color: #fff;
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
  border-radius: 0.2rem;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.1rem;
}

.menu li:hover {
  background: #23242a;
}

.active {
  background: #23242a;
}

.menu-open {
  display: block;
  opacity: 1;
}

@media screen and (max-width: 758px) {
  .menu {
    top: 2.7rem;
  }

  .select {
    padding: 5px 8px;
  }

  .selected {
    font-size: 0.9rem;
  }

  .menu li {
    font-size: 0.9rem;
  }
}
</style>
