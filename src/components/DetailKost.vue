<script setup>
import { ref } from "vue";
import axios from "axios";

const props = defineProps(["id"]);
const kost = ref(null);

await axios.get("http://localhost:3000/api/v1/kost/" + props.id).then((res) => {
    kost.value = res.data.data;
});
</script>

<template>
    <section class="details">
        <div class="details-container">
            <div class="hh">
                <RouterLink to="/penawaran"
                    ><font-awesome-icon
                        class="i-details"
                        :icon="['fas', 'arrow-left']"
                    /><span>{{ kost.nomor }}</span></RouterLink
                >
            </div>

            <ImageSlideshow :kostIndex="kostIndex" />

            <p class="p-p">
                Ladies Kost menawarkan kamar per bulan yang nyaman dan
                terjangkau, ideal untuk Anda yang mencari hunian dengan suasana
                tenang dan aman. Setiap kamar dirancang dengan baik, dilengkapi
                dengan fasilitas esensial seperti tempat tidur, lemari, dan
                kamar mandi untuk menunjang aktivitas harian Anda.
            </p>
            <h3 class="p-p">
                Pesan kamar Anda sekarang dan rasakan kenyamanan tinggal di
                Ladies Kost!
            </h3>

            <div class="detail-footer">
                <PriceSelect @change-month="changeMonth" />
                <div class="harga">Rp. {{ harga }} /bulan</div>
                <RouterLink
                    class="btn-pesan"
                    :to="{
                        name: 'checkout',
                        query: { id: kostIndex, durasi: monthState },
                    }"
                    >Pesan</RouterLink
                >
            </div>
        </div>
    </section>
</template>

<style scoped>
.details {
    padding: 1.4rem 7%;
    margin-top: 8rem;
    margin-left: 2rem;
    margin-bottom: 4rem;
}

.details .details-container {
    -webkit-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
    -moz-box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
    box-shadow: -1px 7px 14px 0px rgba(166, 161, 166, 1);
    padding: 2rem;
    border-radius: 10px;
}

.detail-thumbnail img {
    width: 100%;
    border-radius: 5px;
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
