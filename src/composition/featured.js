import {reactive, ref} from "vue";

export function featured() {
    return {
        featured: ref([
            reactive({
                pic: require('@/assets/featured/certik.png'),
                desc: "Audit",
                url: "https://www.certik.com/projects/melodity",
                alt: "certik",
                bullet: false,
            }),
            reactive({
                pic: require('@/assets/featured/interfi.png'),
                url: "#",
                desc: "KYC",
                alt: "interfi",
                bullet: false,
            }),
        ])
    }
}
