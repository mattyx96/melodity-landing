import {reactive, ref} from "vue";

export function details() {
    return {
        details: ref([
            reactive({
                pic: require('@/assets/images/1_bsc.png'),
                url: "https://www.binance.org/en/smartChain",
                alt: "Melodity (MELD) rating bsc",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/2_bscscan.png'),
                url: "https://bscscan.com/",
                alt: "Melodity (MELD) rating bscscan",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/3_cmc.png'),
                url: "https://coinmarketcap.com/",
                alt: "Melodity (MELD) rating cmc",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/4_coingecko.png'),
                url: "https://www.coingecko.com/",
                alt: "Melodity (MELD) rating coingecko",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/5_gate-io.png'),
                url: "https://www.gate.io/",
                alt: "Melodity (MELD) rating gate-io",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/6_cryptototem.png'),
                url: "https://cryptototem.com/",
                alt: "Melodity (MELD) rating cryptototem",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/7_icoholder.png'),
                url: "https://icoholder.com/",
                alt: "Melodity (MELD) rating icoholder",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/8_icolink.png'),
                url: "https://icolink.com/",
                alt: "Melodity (MELD) rating icolink",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/9_icodrops.png'),
                url: "https://icodrops.com/",
                alt: "Melodity (MELD) rating icodrops",
                bullet: false
            }),
        ])
    }
}
