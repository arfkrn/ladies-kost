<script setup>
import PaymentSelect from "@/components/PaymentSelect.vue";
import { onBeforeMount, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { useKostStore } from "@/stores/kostStore";

const route = useRoute();
const state = reactive({ data: {} });
const kostStore = useKostStore();
const kostIndex = route.query.id;
const queryParam = route.query.durasi;
const result = reactive({ data: { harga: 0, addon: 0, durasi: null } });
let total = 0;
const harga = {
  i1: 500000,
  i2: 3000000,
};
const addon = {
  i1: 300000,
  i2: 500000,
};
const durasi = {
  i1: "1 Bulan",
  i2: "1 Tahun",
};

function calculateTotal() {
  switch (queryParam) {
    case "1":
      result.data.harga = harga.i1;
      result.data.durasi = durasi.i1;
      break;
    case "2":
      result.data.harga = harga.i1;
      result.data.addon = addon.i1;
      result.data.durasi = durasi.i1;
      break;
    case "3":
      result.data.harga = harga.i2;
      result.data.durasi = durasi.i2;
      break;
    case "4":
      result.data.harga = harga.i2;
      result.data.addon = addon.i2;
      result.data.durasi = durasi.i2;
      break;
  }

  total = result.data.harga + result.data.addon;
}

function getData() {
  kostStore.fetchKosts();
  state.data = kostStore.kosts[kostIndex];
}

onBeforeMount(() => {
  getData();
});

onMounted(calculateTotal);
</script>

<template>
  <div class="checkout-container">
    <div class="checkout-header">
      <div class="back">
        <RouterLink :to="{ name: 'detail', query: { id: state.data.id } }"
          ><font-awesome-icon
            class="kembali"
            :icon="['fas', 'arrow-left']"
          /><span>Pesan Kamar</span></RouterLink
        >
      </div>
    </div>

    <div class="checkout-content">
      <div class="detail-kamar">
        <img
          :src="
            'http://localhost:4000/uploads/' + state.data.gambar[0].imageUrl
          "
          alt=""
          class="detail-img"
        />
        <div class="detail-info">
          <h1 class="detail-title">{{ state.data.nama }}</h1>
        </div>
      </div>
      <div class="rincian-container">
        <div class="rincian-pembayaran">
          <h1 class="rincian-title">Rincian pembayaran</h1>
          <div class="rincian-durasi">
            <div class="durasi">
              <p>Durasi</p>
              <p class="waktu">{{ result.data.durasi }}</p>
            </div>
            <p>Rp{{ total.toLocaleString("id-ID") }}</p>
          </div>
          <div class="rincian-addon">
            <div class="addon">
              <p>Addon</p>
              <p>WiFi</p>
            </div>
            <p>Rp {{ result.data.addon }}</p>
          </div>
          <div class="rincian-total">
            <div>
              <p>Total</p>
              <p class="total">Rp{{ total.toLocaleString("id-ID") }}</p>
            </div>
          </div>
        </div>

        <div class="metode-pembayaran">
          <h1>Pilih Metode Pembayaran</h1>
          <div class="payment-select">
            <PaymentSelect />
          </div>
        </div>

        <div class="pesan">
          <div class="pesan-detail">
            <p>Total Bayar</p>
            <h1>Rp{{ total.toLocaleString("id-ID") }}</h1>
          </div>
          <div>
            <button class="pesan-btn">Pesan Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-header {
  padding: 0.9rem 7%;
  border-bottom: 1px solid rgb(201, 201, 201);
  background-color: #fff;
}

.back .kembali {
  color: black;
  margin-right: 0.9rem;
}

.back span {
  color: black;
}

.checkout-content {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 1rem auto;
  justify-content: space-between;
  -webkit-box-shadow: 0px 11px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 11px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 11px 15px -10px rgba(0, 0, 0, 0.75);
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
}

.detail-kamar {
  width: 600px;
  background-color: #fff;
  display: flex;
  gap: 3rem;
  padding: 0.7rem 5%;
}

.detail-img {
  border-radius: 5px;
}

.detail-title {
  font-size: 1.3rem;
}

.rincian-container {
  width: 400px;
  background-color: rgb(221, 221, 221);
  border-left: 1px solid rgb(219, 219, 219);
}

.rincian-pembayaran {
  padding: 0.7rem 7%;
  background-color: #fff;
  margin-bottom: 0.2rem;
}

.rincian-title {
  font-size: 1.2rem;
}

.rincian-durasi,
.rincian-addon {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 0.9rem;
}

.rincian-durasi p,
.rincian-addon p {
  margin-left: 0.8rem;
}

.durasi p:nth-child(odd),
.addon p:nth-child(odd) {
  font-weight: 500;
}

.durasi p:nth-child(even),
.addon p:nth-child(even) {
  margin-left: 1.3rem;
  font-size: 0.9rem;
  font-style: italic;
}

.rincian-total {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

.rincian-total::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: rgb(221, 221, 221);
}

.rincian-total div {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-left: 0.8rem;
}

.metode-pembayaran {
  background: #fff;
  padding: 0.7rem 5%;
}

.metode-pembayaran h1 {
  font-size: 1rem;
}

.metode-pembayaran .payment-select {
  margin-top: 1rem;
}

.pesan {
  background-color: #fff;
  margin-top: 0.2rem;
  padding: 1rem 5% 0.7rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pesan-detail p {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}

.pesan-detail h1 {
  font-size: 1rem;
}

.pesan-btn {
  background-color: #1976d2;
  color: #fff;
  padding: 0.8rem 1.1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.pesan-btn:hover {
  background-color: #1661ac;
}

/* ------------------------------------------------------ */
@media screen and (max-width: 758px) {
  .checkout-container {
    background-color: rgb(221, 221, 221);
  }

  .checkout-content {
    width: 100%;
    margin: 0;
    box-shadow: none;
  }

  .detail-kamar img {
    width: 100px;
  }

  .detail-info .detail-title {
    font-size: 1rem;
  }

  .rincian-container {
    border: none;
  }

  .rincian-pembayaran {
    margin-top: 0.2rem;
  }

  .pesan {
    margin-top: 0.2rem;
  }
}
</style>
