import {reactive, ref} from "vue";

export function upcoming_projects() {
    return {
        upcoming_projects: ref([
            reactive({
                pic: require("@/assets/images/logo-beats-chain.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images/logo-beats-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images/logo-doduet-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images/logo-dolearn-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images/logo-domart-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images/logo-doplay-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images/logo-dotime-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images/logo-mle-white.webp"),
                url: "https://lock.melodity.org",
            }),
            reactive({
                pic: require("@/assets/images/Logo-Armony_white.png"),
                url: "https://armony.finance",
            }),
        ])
    }
}
