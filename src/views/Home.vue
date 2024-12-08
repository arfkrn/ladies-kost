<script setup>
import { RouterLink } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar />
  <!-- hero xection start -->
  <section class="hero" id="home">
    <div class="content">
      <h2>Tinggal Dengan Aman Dan</h2>
      <h2>Nyaman Di <span>Ladies Kost</span></h2>
      <h4>HEMAT AS YOU WISH</h4>
      <div class="cta-container">
        <RouterLink to="/penawaran" class="cta">Sewa Sekarang</RouterLink>
      </div>
    </div>
  </section>
  <!-- hero section end -->

  <!-- fasilitas section start -->
  <section id="fasilitas" class="fasilitas">
    <h1 class="tempat">Fasilitas</h1>

    <div class="fasilitas-container">
      <div class="fasilitas-content kamar">
        <img src="../assets/image/image 2.png" alt="" />
        <h1>Tempat Tidur</h1>
        <p>
          Nikmati kenyamanan tempat tidur yang dirancang khusus untuk memberikan
          kualitas tidur terbaik. Dengan kasur yang empuk dan bantal yang
          lembut, istirahat Anda akan terasa lebih nyenyak dan menyegarkan.
        </p>
      </div>
      <div class="fasilitas-content kamar">
        <img src="../assets/image/wifi-sign 1.png" alt="" />
        <h1>Wifi</h1>
        <p>
          Tetap terhubung dengan internet super cepat yang tersedia di seluruh
          area. Nikmati pengalaman browsing tanpa hambatan, streaming tanpa
          buffering, dan akses informasi kapan saja.
        </p>
      </div>
      <div class="fasilitas-content kamar">
        <img src="../assets/image/laundry-machine 1.png" alt="" />
        <h1>Laundry</h1>
        <p>
          Layanan laundry kami memastikan pakaian Anda tetap bersih dan rapi.
          Dengan peralatan modern dan proses yang cepat, Anda bisa fokus pada
          aktivitas lain tanpa khawatir soal cucian.
        </p>
      </div>
      <div class="fasilitas-content kamar">
        <img src="../assets/image/image 1.png" alt="" />
        <h1>Kamar Mandi</h1>
        <p>
          Kamar mandi kami dilengkapi dengan fasilitas modern seperti shower air
          panas dan peralatan mandi lengkap. Kebersihan dan kenyamanan menjadi
          prioritas utama untuk pengalaman mandi yang menyenangkan.
        </p>
      </div>

      <div class="fasilitas-content kamar">
        <img src="../assets/image/image 3.png" alt="" />
        <h1>Lemari Pakaian</h1>
        <p>
          Lemari pakaian yang luas dan fungsional siap membantu Anda menyimpan
          pakaian dan barang pribadi dengan rapi. Desainnya yang minimalis
          menambah estetika ruangan Anda.
        </p>
      </div>
    </div>
  </section>
  <!-- fasilitas section end -->

  <!-- tentang section start -->
  <section id="tentang" class="tentang">
    <h1 class="tentang-h1">Tentang Kost</h1>

    <div class="tentang-container">
      <img src="../assets/image/about img.png" alt="" />
      <div class="tentang-p">
        <p>
          Ladies Kost adalah tempat hunian nyaman dan aman yang dirancang khusus
          untuk para wanita. Berlokasi strategis, kost ini menyediakan fasilitas
          lengkap untuk mendukung kebutuhan sehari-hari, mulai dari kamar tidur
          yang luas dan bersih, koneksi WiFi cepat, hingga layanan laundry yang
          praktis.
        </p>
        <p>
          Kami mengutamakan privasi dan keamanan penghuni dengan sistem keamanan
          24 jam dan lingkungan yang tenang. Dengan akses mudah ke berbagai
          fasilitas umum seperti pusat perbelanjaan, kampus, dan transportasi,
          Ladies Kost adalah pilihan ideal bagi Anda yang mencari hunian modern
          dengan suasana yang nyaman dan bersahabat.
        </p>
        <p>
          Bergabunglah dengan komunitas kami dan nikmati pengalaman tinggal yang
          menyenangkan di Ladies Kost!
        </p>
      </div>
    </div>
  </section>
  <!-- tentang section end -->

  <!-- lokasi section start -->
  <section id="lokasi" class="lokasi">
    <h1 class="lok">Lokasi</h1>
    <div class="lokasi-container">
      <p>
        “Lokasi kost kami bisa ditemukan di koordinat GPS: -5.116552,105.338211.
        Anda juga bisa menemukannya dengan menelusuri peta melalui Google Maps.”
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9202612007475!2d105.3344854554413!3d-5.116552554300458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40bc21f4dffaa3%3A0x9ecdb19a8358ae7c!2sLadies%20Kost!5e0!3m2!1sid!2sid!4v1728075133554!5m2!1sid!2sid"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="map"
      ></iframe>
    </div>
  </section>
  <!-- lokasi section end -->
  <Footer />
</template>

<style scoped>
/* hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("../assets/image/Group1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.hero .content {
  padding: 0 7%;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.hero .content h2 {
  font-size: 2.3rem;
}

.hero .content span {
  font-style: italic;
  font-weight: 200;
}

.hero .content h4 {
  font-size: 1.6rem;
  font-weight: 300;
}

.hero .content .cta {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  color: #1976d2;
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
}

/* fasilitas */
.fasilitas {
  padding: 0 7%;
  margin: 10rem 0;
}

.fasilitas .tempat {
  text-align: center;
  margin-bottom: 5rem;
  font-size: 1.7rem;
}

.fasilitas .tempat::after {
  content: "";
  display: block;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #0b0b0b;
  width: 5.5rem;
  margin: 0 auto;
}

.fasilitas .fasilitas-container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
}

.fasilitas .fasilitas-content {
  width: 19rem;
  display: flex;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px 2px rgba(138, 134, 138, 0.55);
  -moz-box-shadow: 0px 0px 15px 2px rgba(138, 134, 138, 0.55);
  box-shadow: 0px 0px 15px 2px rgba(138, 134, 138, 0.55);
  flex-direction: column;
  padding: 2rem;
}

.fasilitas .fasilitas-content.kamar img {
  width: 5rem;
  margin-bottom: 2rem;
  align-self: center;
}

.fasilitas .fasilitas-content.kamar p {
  font-size: 0.9rem;
  /* text-align: justify; */
}

.fasilitas .fasilitas-content.kamar h1 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

/* tentang */
.tentang .tentang-h1 {
  text-align: center;
  margin-bottom: 5rem;
  font-size: 1.7rem;
}

.tentang .tentang-h1::after {
  content: "";
  display: block;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #0b0b0b;
  width: 10rem;
  margin: 0 auto;
}

.tentang .tentang-container {
  display: flex;
  padding: 0 7%;
  justify-content: center;
  text-align: justify;
  gap: 3rem;
}

.tentang .tentang-container img {
  width: 25rem;
}

.tentang .tentang-container .tentang-p {
  flex-wrap: wrap;
}

.tentang .tentang-container .tentang-p p {
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

/* lokasi */
.lokasi {
  margin-bottom: 5rem;
  padding: 0 7%;
}

.lokasi .lok {
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 5rem;
  font-size: 1.7rem;
}

.lokasi .lok::after {
  content: "";
  display: block;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #0b0b0b;
  width: 4rem;
  margin: 0 auto;
}

.lokasi .lokasi-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.lokasi .lokasi-container p {
  font-size: 1rem;
  margin-bottom: 3rem;
  text-align: center;
}

.lokasi .lokasi-container .map {
  width: 52rem;
  height: 30rem;
  justify-content: center;
}

@media screen and (max-width: 758px) {
  .hero .content {
    padding-inline: 5%;
  }

  .hero .content h2 {
    font-size: 1.2rem;
  }

  .hero .content h4 {
    font-size: 1rem;
  }

  .hero .content .cta {
    font-size: 0.8rem;
    border-radius: 0.8rem;
    padding: 0.2rem 0.8rem;
  }

  .fasilitas {
    padding-inline: 5%;
  }

  .fasilitas .tempat {
    font-size: 1.2rem;
  }

  .fasilitas .tempat::after {
    width: 4rem;
  }

  .tentang .tentang-container {
    flex-wrap: wrap;
    padding-inline: 5%;
  }

  .tentang .tentang-h1 {
    font-size: 1.2rem;
  }

  .tentang .tentang-container img {
    width: 100%;
  }

  .tentang .tentang-h1::after {
    width: 6rem;
  }

  .tentang .tentang-container .tentang-p p {
    font-size: 0.8rem;
  }

  .lokasi {
    padding-inline: 5%;
  }

  .lokasi .lokasi-container {
    flex-wrap: wrap;
  }

  .lokasi .lokasi-container .map {
    width: 100%;
    height: 10rem;
  }

  .lokasi .lok {
    font-size: 1.2rem;
  }

  .lokasi .lok::after {
    width: 2.7rem;
  }

  .lokasi .lokasi-container p {
    font-size: 0.7rem;
    text-align: center;
  }
}
</style>
