<script setup>
import PaymentSelect from "@/components/PaymentSelect.vue";
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const state = reactive({ data: {} });

const fetchData = async () => {
  const res = await axios.get(
    "http://localhost:4000/api/v1/kost/" + route.query.id
  );
  state.data = res.data.data;
  console.log(state.data.gambar[0]);
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="checkout-container">
    <div class="checkout-header">
      <div class="back">
        <RouterLink to="/penawaran/detail"
          ><font-awesome-icon
            class="kembali"
            :icon="['fas', 'arrow-left']"
          /><span>Pesan Kamar</span></RouterLink
        >
      </div>
    </div>

    <div class="checkout-content">
      <div class="detail-kamar">
        <!-- <img
          :src="'http://localhost:4000' + state.data.gambar[0].imageUrl"
          alt=""
          class="detail-img"
        /> -->
        <div class="detail-info">
          <h1 class="detail-title">{{ state.data.nama }}</h1>
          <!-- <p class="detail-p">1 Bulan</p> -->
        </div>
      </div>
      <div class="rincian-container">
        <div class="rincian-pembayaran">
          <h1 class="rincian-title">Rincian pembayaran</h1>
          <div class="rincian-durasi">
            <div class="durasi">
              <p>Durasi</p>
              <p class="waktu">1 Bulan</p>
            </div>
            <p>Rp500.000</p>
          </div>
          <div class="rincian-addon">
            <div class="addon">
              <p>Addon</p>
              <p>WiFi</p>
            </div>
            <p>Rp300.000</p>
          </div>
          <div class="rincian-total">
            <div>
              <p>Total</p>
              <p class="total">Rp800.000</p>
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
            <h1>Rp800.000</h1>
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
