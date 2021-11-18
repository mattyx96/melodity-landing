import {reactive, ref} from "vue";

export function details() {
    return {
        details: ref([
            reactive({
                pic: "https://widget.cryptototem.com/70/70/1/1/28974",
                url: "https://cryptototem.com/melodity-meld/",
                alt: "Melodity (MELD) rating",
                bullet: true
            }),
            /*{
                pic: null,
                url: null,
                alt: null,
                bullet: true
            },*/
        ])
    }
}
