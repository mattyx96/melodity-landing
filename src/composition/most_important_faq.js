import {reactive, ref} from "vue";

export function most_important_faq() {
    return {
        most_important_faq: ref([
            reactive({
                pic: require("@/assets/images/why-1.webp"),
                label: "What is DeFi?",
                url: "https://docs.melodity.org/faq/general-questions#what-is-defi"
            }),
            reactive({
                pic: require("@/assets/images/why-2.webp"),
                label: "What is a Token?",
                url: "https://docs.melodity.org/faq/general-questions#what-is-a-token"
            }),
            reactive({
                pic: require("@/assets/images/why-3.webp"),
                label: "What is Melodity?",
                url: "https://docs.melodity.org/faq/generalities#what-is-melodity"
            }),
            reactive({
                pic: require("@/assets/images/why-4.webp"),
                label: "Which problems does Melodity solve?",
                url: "https://docs.melodity.org/faq/generalities#which-problems-does-melodity-solve"
            }),
            reactive({
                pic: require("@/assets/images/why-5.webp"),
                label: "Which is Melodity's mission?",
                url: "https://docs.melodity.org/faq/generalities#which-is-meloditys-mission"
            }),
            reactive({
                pic: require("@/assets/images/why-6.webp"),
                label: "Who's Melodity for?",
                url: "https://docs.melodity.org/faq/generalities#whos-melodity-for"
            }),
        ])
    }
}
