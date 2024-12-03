<template>
  <div class="checkout-container">
    <div class="checkout-header">
      <div class="back">
        <RouterLink to="/"
          ><font-awesome-icon
            class="kembali"
            :icon="['fas', 'arrow-left']"
          /><span>Pesan Kamar</span></RouterLink
        >
      </div>
    </div>

    <div class="checkout-content">
      <div class="detail-kamar">
        <img src="../assets/image/kamar3 2.png" alt="" class="detail-img" />
        <div class="detail-info">
          <h1 class="detail-title">Kamar 1</h1>
          <p class="detail-p">1 Bulan</p>
        </div>
      </div>
      <div class="rincian-pembayaran">
        <h1 class="rincian-title">Rincian pembayaran</h1>
        <div class="rincian-durasi">
          <p>Durasi</p>
          <p class="waktu">1 Bulan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 758px) {
  .checkout-header {
    padding: 0.9rem 5%;
    border-bottom: 1px solid rgb(201, 201, 201);
  }

  .back .kembali {
    color: black;
    margin-right: 0.9rem;
  }

  .back span {
    color: black;
  }

  .detail-kamar {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 5%;
  }

  .detail-kamar img {
    width: 100px;
    border-radius: 5px;
  }

  .detail-info .detail-title {
    font-size: 0.9rem;
  }

  .detail-info .detail-p {
    font-size: 0.8rem;
  }

  .rincian-pembayaran {
    padding: 0 5%;
    position: relative;
  }

  .rincian-pembayaran::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgb(221, 221, 221);
  }

  .rincian-durasi {
    display: flex;
    justify-content: space-between;
  }

  .rincian-title {
    font-size: 1rem;
  }
}
</style>
