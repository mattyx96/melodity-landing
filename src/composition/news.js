import {reactive, ref} from "vue";

export function news() {
    return {
        news: ref([
           /* reactive({
                pic: require('@/assets/news/slide-fidelity-airdrop.png'),
                alt: "FIDELITY AIRDROP",
                url: "https://t.me/Melodity_Official_Community",
                title: "FIDELITY AIRDROP",
                body: "Don’t miss this huge opportunity! Time until January 3th. Participate Now!",
            }),*/
            /*reactive({
                pic: require('@/assets/news/slide-ico.png'),
                alt: "MELODITY ICO IS COMING",
                url: "https://ico.melodity.org",
                title: "MELODITY ICO IS COMING",
                body: "Melodity ICO will start on January 14th 2022 at 8:00 am UTC. Join our Private Sale.",
            }),*/
            reactive({
                pic: require('@/assets/news/slide-partner.png'),
                alt: "BECOME OUR PARTNER",
                url: "https://bit.ly/3pWoXjq",
                title: "BECOME OUR PARTNER",
                body: "Melodity is looking for ambassadors, partners and influencers. Let’s build the future of the music industry together! Join Now!",
            }),
            /*reactive({
                pic: require('@/assets/news/new3.png'),
                alt: "Referral program Melodity",
                url: "https://ico.melodity.org/referral",
                title: "EARN BY FOLLOWING 3 SIMPLE STEPS",
                body: [
                    "1. Set the referral fee you want to share with your friends.",
                    "2. Share your link with your friends and social media.",
                    "3. Earn money when your friends join Melodity"
                ]
            }),*/
        ])
    }
}
