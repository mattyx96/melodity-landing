import {ref, reactive} from "vue";
export function medias() {
    return {
        medias: ref([
             reactive({
                 pic: require('@/assets/medias/cbimage.png'),
                 url: "https://markets.financialcontent.com/fatpitch.valueinvestingnews/news/read/42014588",
                 alt: "valueinvestingnews",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/newsok.png'),
                 url: "http://stocks.newsok.com/newsok/news/read/42014588/Melodity_%E2%80%94_The_blockchain_protocol_for_Music",
                 alt: "newsok",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/streetinsider.png'),
                 url: "https://markets.financialcontent.com/streetinsider/news/read/42014588",
                 alt: "streetinsider",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/startribune.png'),
                 url: "http://markets.financialcontent.com/startribune/news/read/42014588/Melodity_—_The_blockchain_protocol_for_Music",
                 alt: "startribune",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/ibt.png'),
                 url: "http://markets.financialcontent.com/ibtimes/news/read/42014588",
                 alt: "ibtimes",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/azc.png'),
                 url: "http://finance.azcentral.com/azcentral/news/read/42014588",
                 alt: "azcentral",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/ask.png'),
                 url: "https://markets.financialcontent.com/ask/news/read/42014588",
                 alt: "ask",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/wallstreetselect.png'),
                 url: "https://markets.financialcontent.com/wss/news/read/42014588",
                 alt: "wallstreetselect",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/dailyherald.png'),
                 url: "http://finance.dailyherald.com/dailyherald/news/read/42014588/Melodity_—_The_blockchain_protocol_for_Music",
                 alt: "dailyherald",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/menlopark.png'),
                 url: "http://finance.menlopark.com/camedia.menlopark/news/read/42014588/Melodity_—_The_blockchain_protocol_for_Music",
                 alt: "menlopark",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/breakingnews.png'),
                 url: "https://breakingsnews.co/melodity-the-blockchain-protocol-for-music/",
                 alt: "breakingnews",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/thelondontribune.png'),
                 url: "https://thelondontribune.com/melodity-the-blockchain-protocol-for-music",
                 alt: "thelondontribune",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/bakersfield.png'),
                 url: "https://bakersfield.marketminute.com/article/zexprwire-2021-11-27-melodity-the-blockchain-protocol-for-music",
                 alt: "bakersfield",
                 bullet: true
             }),
        ])
    }
}
