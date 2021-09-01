<template>
	<div class="grid grid-cols-12">
		<header class="col-span-full grid grid-cols-12 font-raleway fixed z-50 bg-white bg-gray-800 bg-opacity-75">
			<nav class="col-start-2 col-span-10 grid grid-cols-8 mt-12 place-items-center mb-12">
				<div class="col-span-2 flex items-center justify-start">
					<img src="@/assets/images/logo.webp" alt="logo" class="object-contain w-2/3">
				</div>
				<template v-for="(elem, id) of urls">
					<a v-if="elem?.type && elem.type === 'button'" :key="-id" :href="elem.url"
					   :target="urlsTargets[id].target" :rel="urlsTargets[id].rel"
					   class="text-white text-center font-bold rounded-full w-full bg-gradient-to-tr from-[#f56ec6] to-[#e94ac8]
							via-[#f56ec6] bg-left flex items-center justify-center p-4 col-start-8">
						{{ elem.label }}
					</a>
					<a v-else :key="id" :href="elem.url" :target="urlsTargets[id].target" :rel="urlsTargets[id].rel"
					   class="text-white text-center p-4 font-bold flex items-center justify-center">
						{{ elem.label }}
					</a>
				</template>
			</nav>
		</header>
		<main class="col-span-full grid grid-cols-12 py-20 relative mt-48">
			<container>
				<h1 class="text-white text-center mx-auto text-[9.5em] font-bold leading-none font-montserrat tracking-tighter">
					Let the Music<br>
					Begin!
				</h1>
				<img src="@/assets/images/waves.webp" alt="waves" class="absolute top-60 right-[-65%] z-[-1] scale-90">
				<div class="mt-48 p-12 relative">
					<img src="@/assets/images/back-1.webp" alt="background#1"
					     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1]">
					<about :urls="urls" :buy-meld-url="buy_meld_url"></about>
					<div class="flex items-center justify-center text-white font-semibold text-3xl my-20">
						<div v-if="initial_logos" class="mx-20">BOI</div>
						<div v-if="initial_logos" class="mx-20">CNN</div>
						<div v-if="initial_logos" class="mx-20">CMC</div>
					</div>
				</div>
			</container>
			<container>
				<div
					class="-translate-y-1/2 rounded-[3rem] w-full bg-[#141a25] px-32 py-12 grid grid-cols-4 text-white absolute top-0 left-0 translate-y-2">
					<h3 class="font-semibold text-2xl font-raleway">
						Live chart
					</h3>
					<div v-for="(elem, id) of tokenStatsEntries" :key="id"
					     class="flex flex-col items-center justify-center font-inter font-black">
						<div class="text-[#14f195] text-3xl">
							{{ tokenStatsValueSuffix[id] !== "" ? elem[1].toFixed(2) : elem[1] }}
							{{ tokenStatsValueSuffix[id] }}
						</div>
						<small class="uppercase font-mulish font-medium">{{ tokenStatsLabel[id] }}</small>
					</div>
				</div>
			</container>
			<AboutExtended id="about" :random-listings="getRandomListings()"
			               :buy-meld-url="buy_meld_url"></AboutExtended>
			<div class="col-span-full relative text-white grid grid-cols-12">
				<img src="@/assets/images/back-4.webp" alt="background#4"
				     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1]">
				<PriceConverter></PriceConverter>
				<MostImportantFaq :faq="most_important_faq"></MostImportantFaq>
			</div>
			<Tokenomics id="tokenomics"></Tokenomics>
			<Roadmap id="roadmap"></Roadmap>
			<ecosystem id="ecosystem" :details="details" :medias="medias" :partners="partners"
			           :upcoming-projects="upcoming_projects"></ecosystem>
			<faq :faq="faq"></faq>
			<subscription></subscription>
		</main>
		<footer class="col-span-full bg-[#10151c] text-white pt-96">
			<div class="px-48 pb-24 grid grid-cols-3 gap-12">
				<div class="w-full flex justify-start items-start">
					<img src="@/assets/images/logo.webp" alt="logo" class="object-contain w-2/3">
				</div>
				<div class="col-span-2 w-full p-8 py-6 grid grid-cols-3 gap-20">
					<div v-for="(elem, id) of Object.entries(footer)" :key="id">
						<h4 class="font-semibold text-xl font-semibold font-raleway">
							{{ elem[0].split("_").map(v => `${v[0].toUpperCase()}${v.substr(1)}`).join(" ") }}
						</h4>
						<ul class="mt-8 font-thin font-raleway">
							<li v-for="(e, i) of elem[1]" :key="i">
								<a :href="e.url" target="_blank" rel="noopener">
									{{ e.label }}
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="text-xl font-semibold font-raleway">
					<h4 class="mb-8">Join the conversation</h4>
					<socials-buttons class="-ml-8"></socials-buttons>
				</div>
				<div class="col-span-full row-start-3 border-t pt-4 text-lg font-thin font-raleway">
					<p>
						Copyright &copy; DoLabs - {{ (new Date()).getFullYear() }}
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import SocialsButtons from "@/components/SocialsButtons";
import About from "@/components/About";
import Container from "@/components/Container";
import AboutExtended from "@/components/AboutExtended";
import PriceConverter from "@/components/PriceConverter";
import MostImportantFaq from "@/components/MostImportantFaq";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Glide from '@glidejs/glide'
import Ecosystem from "@/components/Ecosystem";
import Faq from "@/components/Faq";
import Subscription from "@/components/Subscription";

export default {
	name: 'Home',
	components: {
		Subscription,
		Faq,
		Ecosystem,
		Roadmap,
		Tokenomics,
		MostImportantFaq,
		PriceConverter,
		AboutExtended,
		Container,
		About,
		SocialsButtons
	},
	data: () => ({
		glide: undefined,
		urls: [
			{
				url: "#about",
				label: "About",
			},
			{
				url: "#tokenomics",
				label: "Tokenomics",
			},
			{
				url: "#roadmap",
				label: "Roadmap",
			},
			{
				url: "#ecosystem",
				label: "Ecosystem",
			},
			{
				url: "https://siasky.net/AABVVg4xWKCx9upY3F4qoO9DUEE3t43TYTfmNUTFsyklVg/",
				label: "Whitepaper",
				type: "button",
				external: true,
			},
		],
		buy_meld_url: "#buy-meld",
		initial_logos: false,
		token_stats: {
			current_holders: 66,
			total_liquidity: 0,
			market_cap: 0,
		},
		listings: [
			{
				name: "CoinMarketCap",
				logo: require("@/assets/images/boubles.webp"),
				url: "#",
			},
			{
				name: "CoinMarketCap",
				logo: require("@/assets/images/boubles.webp"),
				url: "#",
			},
			{
				name: "CoinMarketCap",
				logo: require("@/assets/images/boubles.webp"),
				url: "#",
			},
			{
				name: "CoinMarketCap",
				logo: require("@/assets/images/boubles.webp"),
				url: "#",
			},
			{
				name: "CoinMarketCap",
				logo: require("@/assets/images/boubles.webp"),
				url: "#",
			},
		],
		most_important_faq: [
			{
				pic: require("@/assets/images/boubles.webp"),
				label: "MELD powers",
				url: "#"
			},
			{
				pic: require("@/assets/images/boubles.webp"),
				label: "MELD powers",
				url: "#"
			},
			{
				pic: require("@/assets/images/boubles.webp"),
				label: "MELD powers",
				url: "#"
			},
			{
				pic: require("@/assets/images/boubles.webp"),
				label: "MELD powers",
				url: "#"
			},
			{
				pic: require("@/assets/images/boubles.webp"),
				label: "MELD powers",
				url: "#"
			},
			{
				pic: require("@/assets/images/boubles.webp"),
				label: "MELD powers",
				url: "#"
			},
		],
		faq: [
			{
				active: false,
				animating: false,
				label: "aaaaa",
				content: `mmlcdmcldmlcdmcldmcldm`,
			},
			{
				active: false,
				animating: false,
				label: "aaaaa",
				content: `mmlcdmcldmlcdmcldmcldm`,
			},
			{
				active: false,
				animating: false,
				label: "aaaaa",
				content: `mmlcdmcldmlcdmcldmcldm`,
			},
			{
				active: false,
				animating: false,
				label: "aaaaa",
				content: `mmlcdmcldmlcdmcldmcldm`,
			},
			{
				active: false,
				animating: false,
				label: "aaaaa",
				content: `mmlcdmcldmlcdmcldmcldm`,
			},
			{
				active: false,
				animating: false,
				label: "aaaaa",
				content: `mmlcdmcldmlcdmcldmcldm`,
			},
		],
		upcoming_projects: [
			{
				pic: null,
				url: null,
			},
			{
				pic: null,
				url: null,
			},
			{
				pic: require("@/assets/images/logo-doduet-white.webp"),
				url: "#",
			},
			{
				pic: require("@/assets/images/logo-beats-white.webp"),
				url: "#",
			},
			{
				pic: null,
				url: null,
			},
			{
				pic: null,
				url: null,
			}
		],
		partners: [
			{
				pic: null,
				name: null
			},
			{
				pic: null,
				name: null
			},
			{
				pic: null,
				name: null
			},
			{
				pic: null,
				name: null
			},
			{
				pic: null,
				name: null
			},
			{
				pic: null,
				name: null
			},
		],
		medias: [
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
		],
		details: [
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
			{
				pic: null,
				url: null
			},
		],
		footer: {
			getting_started: [
				{
					label: "Documentation",
					url: "#",
				},
				{
					label: "Run a Node",
					url: "#",
				},
				{
					label: "Join Genesis",
					url: "#",
				},
				{
					label: "Apply for grants",
					url: "#",
				},
			],
			resources: [
				{
					label: "About the Tech",
					url: "#",
				},
				{
					label: "Getting started",
					url: "#",
				},
				{
					label: "Technical Whitepaper",
					url: "https://siasky.net/AABVVg4xWKCx9upY3F4qoO9DUEE3t43TYTfmNUTFsyklVg/",
				},
				{
					label: "Economics Whitepaper",
					url: "#",
				},
				{
					label: "Media",
					url: "#",
				},
			],
			join_us: [
				{
					label: "Validators",
					url: "#",
				},
				{
					label: "Investors",
					url: "#",
				},
				{
					label: "Partnerships",
					url: "#",
				},
				{
					label: "Sponsor",
					url: "#",
				},
				{
					label: "Careers",
					url: "#",
				},
			],
			community: [
				{
					label: "Forums",
					url: "#",
				},
				{
					label: "Discord",
					url: "https://discord.com/invite/Fzs9Dqx8NW",
				},
				{
					label: "Reddit",
					url: "https://www.reddit.com/u/melodityofficial",
				},
				{
					label: "Telegram",
					url: "https://t.me/Melodity_Official_Community",
				},
			],
			socials: [
				{
					label: "Facebook",
					url: "#",
				},
				{
					label: "Twitter",
					url: "#",
				},
				{
					label: "Instagram",
					url: "https://instagram.com/melodityofficial",
				},
				{
					label: "Linkedin",
					url: "#",
				},
			],
			support: [
				{
					label: "Discord",
					url: "https://discord.com/invite/Fzs9Dqx8NW",
				},
				{
					label: "Forums",
					url: "#",
				},
				{
					label: "Github",
					url: "https://github.com/DoLabs-studio",
				},
				{
					label: "Wiki",
					url: "#",
				},
				{
					label: "Contact Us",
					url: "mailto:support@melodity.org",
				},
			],
		}
	}),
	methods: {
		shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {

				// Generate random number
				let j = Math.floor(Math.random() * (i + 1));

				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}

			return array;
		},
		getRandomListings(length = 5) {
			let still_available = this.shuffleArray(this.listings),
				extracted = []

			for (let i = 0; i < length && i < still_available.length; i++) {
				extracted.push(still_available[i])
			}

			return extracted
		},
	},
	computed: {
		urlsTargets() {
			return this.urls.map(v => ({target: v.external ? "_blank" : "", rel: v.external ? "noopener" : ""}))
		},

		tokenStatsEntries() {
			return Object.entries(this.token_stats)
		},
		tokenStatsLabel() {
			return this.tokenStatsEntries.map(v => v[0].split("_").join(" "))
		},
		tokenStatsValueSuffix() {
			return this.tokenStatsEntries.map(v => v[0] === "market_cap" || v[0] === "total_liquidity" ? "$" : "")
		},
	},
	mounted() {
		this.glide = new Glide(".glide", {
			type: "carousel",
			perView: 6,
			focusAt: 0,
			gap: 60,
			autoplay: 4000,
			hoverpause: true,
			animationTimingFunc: "linear",
			animationDuration: 4000,
			peek: 100,
		}).mount()
	}
}
</script>
