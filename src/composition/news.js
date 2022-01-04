import {reactive, ref} from "vue";

export function news() {
    return {
        news: ref([
            reactive({
                pic: require('@/assets/news/slide-fidelity-airdrop.png'),
                alt: "FIDELITY AIRDROP",
                url: "https://t.me/Melodity_Official_Community",
                title: "FIDELITY AIRDROP",
                body: "Don’t miss this huge opportunity! Time until January 3th. Participate Now!",
            }),
            /*reactive({
                pic: require('@/assets/news/slide-ico.png'),
                alt: "MELODITY ICO IS COMING",
                url: "https://private-sale.melodity.org",
                title: "MELODITY ICO IS COMING",
                body: "Melodity ICO will start on January 14th 2022 at 8:00 am UTC. Join our Private Sale.",
            }),*/
            reactive({
                pic: require('@/assets/news/slide-partner.png'),
                alt: "BECOME OUR PARTNER",
                url: "https://bit.ly/3pWoXjq",
                title: "BECOME OUR PARTNER",
                body: "Melodity is looking for ambassadors, partners and influencers. Let’s build the future of the music industry, together! Join Now!",
            }),
        ])
    }
}
