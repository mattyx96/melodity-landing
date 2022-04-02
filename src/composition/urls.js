import {reactive, ref} from "vue";

export function urls() {
    return {
        urls: ref([
            reactive({
                url: "/#ecosystem",
                label: "Ecosystem",
            }),
            reactive({
                url: "/token",
                label: "Token",
            }),
            reactive({
                url: "https://community.melodity.org/",
                label: "Community",
                external: true,
            }),
            reactive({
                url: "https://do-inc.co/team",
                label: "Team",
                external: true,
            }),
            reactive({
                url: "https://linktr.ee/doinc",
                label: "Paper",
                external: true,
            }),
            reactive({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSejoXkR_P0FWW2MlVbFOxCUZduKv5fTt7eFD157UykGVfuOTA/viewform",
                label: "Whitelist",
                external: true,
            }),
            reactive({
                url: "https://www.pinksale.finance/#/launchpad/0xfFAc14749eb6b86163C580F384757bb786490ED8?chain=BSC",
                label: "Buy MELD",
                type: "button",
                external: true,
            }),
        ])
    }
}
