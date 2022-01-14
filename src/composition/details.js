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
                url: "https://bscscan.com/address/0x13E971De9181eeF7A4aEAEAA67552A6a4cc54f43#code",
                alt: "Melodity (MELD) rating bscscan",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/3_cmc.png'),
                url: "https://coinmarketcap.com/currencies/melodity/",
                alt: "Melodity (MELD) rating cmc",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/4_coingecko.png'),
                url: "https://www.coingecko.com/",
                alt: "Melodity (MELD) rating coingecko",
                bullet: false
            }),
            /*reactive({
                pic: require('@/assets/details/watcher_guru.png'),
                url: "https://watcher.guru/coin/melodity",
                alt: "Melodity (MELD) rating watcher.guru",
                bullet: false
            }),*/
            reactive({
                pic: require('@/assets/images/6_cryptototem.png'),
                url: "https://cryptototem.com/melodity-meld/",
                alt: "Melodity (MELD) rating cryptototem",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/7_icoholder.png'),
                url: "https://icoholder.com/it/melodity-1006848",
                alt: "Melodity (MELD) rating icoholder",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/8_icolink.png'),
                url: "https://icolink.com/ico-melodity.html",
                alt: "Melodity (MELD) rating icolink",
                bullet: false
            }),
            reactive({
                pic: require('@/assets/images/coincodex.png'),
                url: "https://coincodex.com/crypto/melodity/",
                alt: "Melodity (MELD) rating coincodex",
                bullet: false
            }),
        ])
    }
}
