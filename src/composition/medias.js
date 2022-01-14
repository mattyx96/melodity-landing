import {ref, reactive} from "vue";
export function medias() {
    return {
        medias: ref([
             reactive({
                 pic: require('@/assets/medias/music-ally.png'),
                 url: "https://musically.com/2022/01/05/melodity-is-the-latest-startup-blending-nfts-and-the-metaverse/",
                 alt: "music-ally",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/yahoo_finance.png'),
                 url: "https://finance.yahoo.com/news/melodity-web3-ecosystem-music-industry-110000930.html",
                 alt: "yahoo! finance",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/whats_on.png'),
                 url: "http://email.prnewswire.com/ls/click?upn=3slWLw94I3jq-2B-2FedjFNgZF8f2ut5XAbRgzgilU6KBJFYTzI7doCevMc8dAomqVomAMVnOSNN89z5UzN-2B-2FC6D354ag2UaCfdvqvhM7fUD3B-2FZUo5qQZW5vgAnV7L4PutI08jk_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXswFKQE8a3MtJLcc2d-2B1A3YfBJWhPOtn6eTWvphsA-2B-2F6YzyXEPZHOTM6rxjPFndlnfdpL6NROht-2BcDrNXn-2BixedzNq-2F-2FBrkbIKw3MTlicOqM8ILSf-2BgVi7P5vc7AsqlbrgQ95IygOw29YnE8hE0mxI0",
                 alt: "whats on",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/market_watch.gif'),
                 url: "http://email.prnewswire.com/ls/click?upn=xUJPOf2UlCyMEnoI-2FyynhGa-2FIp-2Fqb4n2dxlExwLFeFK2cdGnRqs3KIAW0-2F4AIk-2Fw92Pyix5LtIAiXYk66WOaBTaozlgZMJnFzOyjGhh5eHV2CQCUAyQcwGEJyDx-2FlUXuptuOhy9WHz8PhJXaGhMUAcgsdCBm90qtgMjYfX-2B7DXa31hxn5XqgpVbE-2BmRpb4ibrDqBHRe9mxtFCa-2FTAnre0uMjTP6jHxzFBciAOaaprHOOF8BpN07QNLOymYUP-2F8CeTgDIqNfKoInm3zmyttXwkQ-3D-3DcxCe_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXt5fxpUi9aQRVYfrVw7qxTwrtdoElTDjPB6GnVfB-2Boz-2Fv8fvuMvETGS2xKMdQclx2BOSSYDqEAKMGg-2BQYj5dgGEJeCueFhjEriuZ8XwII8hsUIPpGHkFL-2BhXQkwdQN-2FcBJ1Y0O6Z4oc9PCRttBgVCxG",
                 alt: "yahoo! finance",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/ap_news.jpg'),
                 url: "http://email.prnewswire.com/ls/click?upn=0jRAlumOAVN4yUqgTe2o1T48ISHSGl9yicvKevSiAeB5FIpOdKnztX-2FSZCLUfg2AUyxM2PC7HNW0jkhwE6R3-2Fni-2F-2B6lQGzDT-2Fkc19RiQUQT2Qcp2jENZ1NAunqUjEvSEKy5by4kka1q36j50FBxZ8Wd2xN-2FkcrCnG6hskIL3Eewo03SoAz4fNqYTEVoHf0xeISSR_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXt1VhcxAvcwn18UNRGPXnAqG-2BCRZ-2BSgcoox-2BcFXtxHJcDK-2BTWZAVoBSvsv8Er1PsC9lRtfo2N-2FRb0GGeu4rJ3zSO69-2FPyOubBnsLllxcT1Pa4cQza8j00NXUItsGRv8ERbGTv9WAh9dVlEvMiy-2FI0Zf",
                 alt: "ap news",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/adnkronos.png'),
                 url: "http://email.prnewswire.com/ls/click?upn=3slWLw94I3jq-2B-2FedjFNgZMEHTqA8I93Bob4VGCrk0LmBUuTbqORy3FE5sBMN8OhADOpEJXasomEmPbPFxaAJErkBrEMFjjmhCM2N0iDzoVuajV8D-2FkPlIgczVC-2FRFO0hdqznBFOgWjUiDeHbhrPSntaqpRFYywIoX04o1W-2Fhp2QlBEavQI9OFI1QxTaQuxiyCbX5gxj3AEUG0XtqBz-2FSy1fiIA8Newg8YgHw7fI-2FckQUBWqdje4vqNvlfv7i46lzCqNm_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXvUEIYP99Qzcyg2dRBnIYQZMvrU5f6MGlR1uDJ66e4b-2FV7ETaE3e01uiXW9u-2Fat6KcR-2B0-2FRj4PQCMg0yVneV2xXjSqXXcFkpwcGzbfdkAu-2BKFz7UI3Cd3IOaLQse0ldKeXZjp6JjgwX1NB-2FRANr5lnh",
                 alt: "ap news",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/benzinga.png'),
                 url: "http://email.prnewswire.com/ls/click?upn=xUJPOf2UlCyMEnoI-2FyynhAOLHBdb76pQqXgzWPIbuUQqeyMowiuiqceiq-2BBtGZh9KPw2i4xwgiGvOl8L246fWb6SIXeanKMK-2BtVNclqUa5YzgIly007BJpJ7dXkXoRgzNN-2B3wAbnd-2F38D3lFyF-2BHWzmKSoWol2WweOdRwSyn02yHft2y1cR0eZE1w3FHMj4i6afqqwUkUVZ-2FeZKapvpatg-3D-3D9u73_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXu5WxWk1kERDse-2F5dcfancoyW7TrvYlNoxvErRouGaF2XXh5xiXspoLsUIGmJnhi4wScI3E5IjkiibJaL48YQWTQmHNjKg2-2FohcStGVU4-2FaBC2yX3F-2FMx3iStCdJIHTrXxBKGB2gMmzrP94Pppk54cZ",
                 alt: "benzinga",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/europa_press.jpg'),
                 url: "http://email.prnewswire.com/ls/click?upn=3slWLw94I3jq-2B-2FedjFNgZEAzNnrejCYojHBeSsM1-2FKhXykuP5y-2BjmNU9c4wpKbKpUFdktBLuinO0TTu2kNZj6aK-2FjfsNKziPQY4WoVkZAaYgqMM6A4d87AKck-2BIKYbAaWtSMiV6r-2FZPrh3xQ-2BYADJHUb-2Fw5-2FOGQEPTvJ5G5W-2FlIeqD-2F52oKBBJfap8FyOIUBjwNq-2BAhavbFQZ3Z8L9pC3aqX-2FdR2X7tiPmBOOgLj2L6a2rkJpyDVkvyJW7JHnWLk8qes_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXtTFM8Bi6la0j1p7fVPB780sXDc79NeTi7zon59dhhDjDgbq06PCb1Q73gfzWGsyLJ7RWCS86kYP-2BD-2Fi212IF0kgHxTRST62GjNKMP8Mfrj-2BQ8Xyy-2BpqkGPG7GTjDz6sXQhjsQfrfDChmZKfxKuONM3",
                 alt: "europress",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/finanzen-net.gif'),
                 url: "http://email.prnewswire.com/ls/click?upn=xUJPOf2UlCyMEnoI-2FyynhFtMRGsZrlX7tlADVIgAQAcRW2LOYG0sXyBian77PSxOFXXkMkKRWAWeOf8IakGVG9fpTXaaDIzp-2Fu1xVJ4-2FWKzZ6B-2Biw4nRsBM4XoCv-2FZrpFQp4Iu34aBNQt3LbnG1mgWv7iJijzbCPRRcq93-2FWSp3JbN-2BhyOiSe2RrsguL64F-2FK-2FEeXslbzzJVfkI-2B1m9iMaUnYjQm0dnaTHwMGyCmY4H4AgRP2n2-2FMlxGTxZZi-2BCMaZ9j_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXuiyGksn-2BMvTnvK8SXtMoX9aTD87t-2BGkF5bZLGs167xPkmeoE6HQxQgZEvnrRMB0Bt4xHiQZokOR0SFnFOXe4E1HiAUREKO6v-2FhJGRi-2FMYIE-2BvG7fDJYeUGr6nk60KyJCVI7DrLjUVYUBC8SSgEs-2FoQ",
                 alt: "finanzen",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/markets_insider.png'),
                 url: "http://email.prnewswire.com/ls/click?upn=y-2BFFZOYxN07cS8kMjwJINBNfTwuXxd7-2F2BYNDx7aNHe2CIgN-2FditylMqqv2mpThc0jk-2FOgr1HS3vCMtwwnFR1AQvwp1lldr-2FQPtXKY7xIGl3E0VeBr8yd3AF8YeSU3xC-2FbsA1EBA7WtK7OoXO2szbgsDhCCB8axjn35VhK1iceyEE016abKMERd6ZUaztlZri6JDWvk9h3-2FowRR8PyFCcqgdVzh9g-2Fe6Lu2JF8TRof7-2B3uaI65Z81BWpgxWF-2FoBtKA-2FXt6uHWNoitFISmjiDeQ-3D-3Dv7w7_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXvEFr8cxWadYlbOJm3fHs9-2Be3r4xBSIwKZA6LEE4kq8myvBUDlbZ0byd6zkc1g8QYbx8WLmxrn6uaoT8Z-2BAnQkNkGFtN8qGzvBGXOIjBssdvmx-2FWv-2FTA9S5m-2F62vJVuGowFl-2F2toVFDODJRp5DG96r0",
                 alt: "markets insider",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/morningstar.png'),
                 url: "http://email.prnewswire.com/ls/click?upn=3slWLw94I3jq-2B-2FedjFNgZG9SlUQVTbneUqENv-2BrOhJAlA5A-2BcBQ1Ls7aJfwqL0Yl012jmCCPPzq-2B5rIDBnOrz1IfZrs3aJYsHlpKa9Nc-2Fz-2FdlJ-2FP-2BoztE1EB31YsHW6raJWW3WsiR9Lhqn-2BoHnTwhkjiWzHZO6hMxJn-2BgYOQNoidUWR-2FMjfXrTQp3DGgkdHx2sYhdJdew-2FU2rQjov46X8lgXqi3Hb8RaYDmxvmU1-2B-2BrpwFlbt-2Bf4xnbaOkk64d8GpJS6AsWXFa8PkSOVgLi2rQ-3D-3D-Qkb_Hu67FWvUJ5dqIfB8qcN9AiA7JNTH7EBCkk1neQcM8ScQ3Q37AxpZP0YBvF-2BZ2ZhkoyL3T6bD6Rp3L-2F48GXHcpuFB9MgNAdA-2Fm8bBoKkTWf-2FR0DFoWZleTiIetJ7Frx6iV1Z5RWmqj-2BSQMpLPTsLOVdm3rlJ4sKQyLYNnu8aFbAdJwta3gCvQVUjbHOoLG5ZkUJOXlbm6O8dBhqWz8xYVME-2B30nnLhymDt7J-2BXTV3oXsL5s0jXDZesCk2gBgA3fOZMZuX2iCE4X-2FmB3U4znGKLOjOdj-2FuysOhiAifF3E2v76fn4T-2Fy2wLOfOhhvNowDFpbePLtQHmhIaTZbjJS3Jh8v198tNNj28IRGYZThda6Z0gmtRh-2FPzGfzyLCilla6NQ",
                 alt: "morningstar",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/apple_news.svg'),
                 url: "https://apple.news/A7jzHOdfvSbuzymnEh3xYrQ",
                 alt: "Apple news",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/google_news_.png'),
                 url: "http://googlenews.globalcryptopress.com/",
                 alt: "Apple news",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/e-cryptonews.png'),
                 url: "https://e-cryptonews.com/melodity-a-web3-ecosystem-for-the-music-industry/",
                 alt: "e-cryptonews",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/bitbuzz.png'),
                 url: "https://www.bitbuzz.org/melodity-a-web3-ecosystem-for-the-music-industry/",
                 alt: "bitbuzz",
                 bullet: true
             }),
            reactive({
                 pic: require('@/assets/medias/blockchained.gif'),
                 url: "https://www.blockchained.news/2022/01/melodity-web3-ecosystem-for-music.html",
                 alt: "blockchained",
                 bullet: true
             }),

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
        ])
    }
}
