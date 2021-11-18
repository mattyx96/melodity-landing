import {reactive, ref} from "vue";

export function footer() {
    return {
        footer: reactive({
            get_started: ref([
                reactive({
                    label: "Documentation",
                    url: "https://docs.melodity.org/",
                }),
                reactive({
                    label: "Run a Node",
                    url: "https://docs.melodity.org/node-operators/become-a-node-operator",
                }),
                reactive({
                    label: "Storyboard",
                    url: "https://docs.melodity.org/whitepaper-storyboard/storyboard-2021",
                }),
            ]),
            resources: ref([
                reactive({
                    label: "Getting started",
                    url: "https://docs.melodity.org/getting-started",
                }),
                reactive({
                    label: "Whitepaper",
                    url: "https://docsend.com/view/fpxvfwmhtnq38gi6",
                }),
                reactive({
                    label: "Media press",
                    url: "https://docsend.com/view/e9knzicbry3ncaca",
                }),
                reactive({
                    label: "Team",
                    url: "https://do-inc.co/team"
                })
            ]),
            join_us: ref([
                reactive({
                    label: "Validators",
                    url: "https://forms.gle/TGbnVTsgwQJ1vb5G9",
                }),
                reactive({
                    label: "Investors",
                    url: "https://forms.gle/TGbnVTsgwQJ1vb5G9",
                }),
                reactive({
                    label: "Partnerships",
                    url: "https://forms.gle/TGbnVTsgwQJ1vb5G9",
                }),
                reactive({
                    label: "Sponsor",
                    url: "https://forms.gle/TGbnVTsgwQJ1vb5G9",
                }),
                reactive({
                    label: "Careers",
                    url: "mailto:careers@dolabs.studio",
                }),
            ]),
            community: ref([
                reactive({
                    label: "Discord",
                    url: "https://discord.com/invite/Fzs9Dqx8NW",
                }),
                reactive({
                    label: "Reddit",
                    url: "https://www.reddit.com/u/melodityofficial",
                }),
                reactive({
                    label: "Telegram",
                    url: "https://t.me/Melodity_Official_Community",
                }),
            ]),
            support: ref([
                reactive({
                    label: "Discord",
                    url: "https://discord.com/invite/Fzs9Dqx8NW",
                }),
                reactive({
                    label: "Github",
                    url: "https://github.com/Do-inc",
                }),
                reactive({
                    label: "Wiki",
                    url: "https://docs.melodity.org/wiki/wiki",
                }),
                reactive({
                    label: "Contact Us",
                    url: "mailto:support@melodity.org",
                }),
            ]),
            compliance: ref([
                reactive({
                    label: "Cookie preferences",
                    click: "displayPreferenceModal()"
                }),
                reactive({
                    label: "Privacy policy",
                    url: "https://app.termly.io/document/privacy-policy/f7de0af7-75f7-44e3-9cf9-3c84b4399d23"
                }),
                reactive({
                    label: "Cookie policy",
                    url: "https://app.termly.io/document/cookie-policy/37cfebac-062c-4b33-b2db-49f79570fb19"
                }),
                reactive({
                    label: "Terms & conditions",
                    url: "https://app.termly.io/document/terms-of-use-for-website/6d487c06-e593-4ab5-9ae3-e5d00e6af3f1"
                })
            ])
        })
    }
}
