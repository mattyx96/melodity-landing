import {reactive, ref} from "vue";

export function listings() {
    return {
        listings: ref([
            reactive({
                name: "CoinMarketCap",
                logo: require("@/assets/images-opt/boubles.webp"),
                url: "#",
            }),
            reactive({
                name: "CoinMarketCap",
                logo: require("@/assets/images-opt/boubles.webp"),
                url: "#",
            }),
            reactive({
                name: "CoinMarketCap",
                logo: require("@/assets/images-opt/boubles.webp"),
                url: "#",
            }),
            reactive({
                name: "CoinMarketCap",
                logo: require("@/assets/images-opt/boubles.webp"),
                url: "#",
            }),
            reactive({
                name: "CoinMarketCap",
                logo: require("@/assets/images-opt/boubles.webp"),
                url: "#",
            }),
        ])
    }
}
