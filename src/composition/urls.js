import {reactive, ref} from "vue";

export function urls() {
    return {
        urls: ref([
            reactive({
                url: "#about",
                label: "About",
            }),
            reactive({
                url: "#tokenomics",
                label: "Tokenomics",
            }),
            reactive({
                url: "#roadmap",
                label: "Roadmap",
            }),
            reactive({
                url: "#ecosystem",
                label: "Ecosystem",
            }),
            reactive({
                url: "https://docsend.com/view/fpxvfwmhtnq38gi6",
                label: "Whitepaper",
                type: "button",
                external: true,
            }),
        ])
    }
}
