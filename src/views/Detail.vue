<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import ImageSlideshow from "@/components/ImageSlideshow.vue";
import PriceSelect from "@/components/PriceSelect.vue";
import Navbar from "@/components/Navbar.vue";

const harga = ref("300.000");
const hargas = [
  "300.000",
  "600.000",
  "900.000",
  "1.200.000",
  "1.500.000",
  "1.800.000",
];

function changeMonth(m) {
  harga.value = hargas[m - 1];
}
</script>

<template>
  <Navbar />
  <section class="details">
    <div class="details-container">
      <div class="hh">
        <RouterLink to="/"
          ><font-awesome-icon
            class="i-details"
            :icon="['fas', 'arrow-left']"
          /><span>Kamar 1</span></RouterLink
        >
      </div>
      <ImageSlideshow />
      <p class="p-p">
        Ladies Kost menawarkan kamar per bulan yang nyaman dan terjangkau, ideal
        untuk Anda yang mencari hunian dengan suasana tenang dan aman. Setiap
        kamar dirancang dengan baik, dilengkapi dengan fasilitas esensial
        seperti tempat tidur, lemari, dan kamar mandi untuk menunjang aktivitas
        harian Anda.
      </p>
      <h3 class="p-p">
        Pesan kamar Anda sekarang dan rasakan kenyamanan tinggal di Ladies Kost!
      </h3>

      <div class="detail-footer">
        <PriceSelect @change-month="changeMonth" />
        <div class="harga">Rp. {{ harga }} /bulan</div>
        <RouterLink class="btn-pesan" to="/checkout">Pesan</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.details {
  padding: 1.4rem 7%;
  margin-top: 8rem;
  margin-left: 2rem;
}

.details .details-container {
  -webkit-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  -moz-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
  padding: 2rem;
  border-radius: 10px;
}

.details .details-container .hh {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
}

.details .details-container .hh span {
  font-size: 1.3rem;
  color: black;
}

.details-container .hh .i-details {
  color: black;
  margin-right: 1rem;
  font-size: 1.3rem;
}

.details-container .p-p {
  font-size: 0.9em;
}

.detail-footer {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.detail-footer .harga {
  font-weight: 700;
}

.detail-footer .btn-pesan {
  background-color: #1976d2;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
}

.detail-footer .btn-pesan:hover {
  background-color: #1967b4;
}

@media screen and (max-width: 758px) {
  .details {
    margin: 4rem 0 2rem 0;
  }

  .details-container .hh .i-details {
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }

  .details .details-container .hh span {
    font-size: 0.9rem;
  }

  .details-container .p-p {
    font-size: 0.7rem;
  }

  .detail-footer .harga {
    font-size: 0.8rem;
  }

  .detail-footer .btn-pesan {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
