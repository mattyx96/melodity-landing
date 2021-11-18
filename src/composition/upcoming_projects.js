import {reactive, ref} from "vue";

export function upcoming_projects() {
    return {
        upcoming_projects: ref([
            reactive({
                pic: require("@/assets/images-opt/logo-beats-chain.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images-opt/logo-beats-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images-opt/logo-doduet-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images-opt/logo-dolearn-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images-opt/logo-domart-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images-opt/logo-doplay-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images-opt/logo-dotime-white.webp"),
                url: "#",
            }),
            reactive({
                pic: require("@/assets/images-opt/logo-mle-white.webp"),
                url: "https://lock.melodity.org",
            }),
        ])
    }
}
