import { defineStore } from "pinia";
import axios from "axios";

export const useKostStore = defineStore("kost", {
    state: () => ({
        kosts: [],
        lasFetched: null,
    }),
    actions: {
        async fetchKosts() {
            const currentTime = new Date().getTime();

            if (this.kosts.length > 0 && this.lasFetched) {
                const elapsed = (currentTime - this.lasFetched) / 1000;
                if (elapsed < 300) {
                    return;
                }
            }

            try {
                const res = await axios.get(
                    "http://localhost:3000/api/v1/kost"
                );
                console.log(res);
                this.kosts = res.data.data;
                this.lasFetched = currentTime;
            } catch (error) {
                console.log("Error " + error);
            }
        },
    },
});
