<template>
	<div class="grid grid-cols-12">
		<header class="col-span-full grid grid-cols-12">
			<nav class="col-start-2 col-span-10 grid grid-cols-8 mt-12 place-items-center">
				<div class="col-span-2 flex items-center justify-end">
					<img src="@/assets/images/logo.webp" alt="logo" class="object-contain w-2/3">
				</div>
				<template v-for="(elem, id) of urls">
					<a v-if="elem?.type && elem.type === 'button'" :key="-id" :href="elem.url"
					   :target="urlsTargets[id].target" :rel="urlsTargets[id].rel"
					   class="text-white text-center font-bold rounded-full w-full bg-gradient-to-tr from-[#f56ec6] to-[#e94ac8]
							via-[#f56ec6] bg-left flex items-center justify-center p-4">
						{{ elem.label }}
					</a>
					<a v-else :key="id" :href="elem.url" :target="urlsTargets[id].target" :rel="urlsTargets[id].rel"
					   class="text-white text-center p-4 font-bold flex items-center justify-center">
						{{ elem.label }}
					</a>
				</template>
			</nav>
		</header>
		<main class="col-span-full grid grid-cols-12 py-20 relative">
			<container>
				<h1 class="text-white text-center mx-auto text-[8em] font-semibold leading-none	">
					Let the Music<br>
					Begin!
				</h1>
				<img src="@/assets/images/waves.webp" alt="waves" class="absolute top-60 right-[-65%] z-[-1] scale-90">
				<div class="mt-48 p-8 relative">
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
				<div class="-translate-y-1/2 rounded-[3rem] w-full bg-[#141a25] px-32 py-12 grid grid-cols-4 text-white absolute top-0 left-0 translate-y-2">
					<h3 class="font-bold text-2xl">
						Live chart
					</h3>
					<div v-for="(elem, id) of tokenStatsEntries" :key="id"
					     class="flex flex-col items-center justify-center">
						<div class="text-[#14f195] text-3xl">
							{{ tokenStatsValueSuffix[id] !== "" ? elem[1].toFixed(2) : elem[1] }}
							{{ tokenStatsValueSuffix[id] }}
						</div>
						<small class="uppercase">{{ tokenStatsLabel[id] }}</small>
					</div>
				</div>
			</container>
			<AboutExtended :random-listings="getRandomListings()" :buy-meld-url="buy_meld_url"></AboutExtended>
			<container>
				<div class="-translate-y-24 w-full rounded-[3rem] relative">
					<div class="p-8 relative text-white">
						<img src="@/assets/images/back-3.webp" alt="background#3"
						     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1]">
						test
					</div>
				</div>
			</container>
		</main>
		<footer class="col-span-full">
			footer
		</footer>
	</div>
</template>

<script>
import SocialsButtons from "@/components/SocialsButtons";
import About from "@/components/About";
import Container from "@/components/Container";
import AboutExtended from "@/components/AboutExtended";

export default {
	name: 'Home',
	components: {
		AboutExtended,
		Container,
		About,
		SocialsButtons
	},
	data: () => ({
		urls: [
			{
				url: "#",
				label: "About",
			},
			{
				url: "#",
				label: "Tokenomics",
			},
			{
				url: "#",
				label: "Roadmap",
			},
			{
				url: "#",
				label: "Ecosystem",
			},
			{
				url: "https://siasky.net/AABVVg4xWKCx9upY3F4qoO9DUEE3t43TYTfmNUTFsyklVg/",
				label: "Whitepaper",
				type: "button",
				external: true,
			},
		],
		buy_meld_url: "#",
		initial_logos: false,
		token_stats: {
			current_holders: 66,
			total_liquidity: 0,
			market_cap: 0,
		},
		listings: [
			{
				name: "CoinMarketCap",
				logo: "#",
				url: "#",
			},
			{
				name: "CoinMarketCap",
				logo: "#",
				url: "#",
			},
			{
				name: "CoinMarketCap",
				logo: "#",
				url: "#",
			},
			{
				name: "CoinMarketCap",
				logo: "#",
				url: "#",
			},
			{
				name: "CoinMarketCap",
				logo: "#",
				url: "#",
			},
		]
	}),
	methods: {
		shuffleArray(array) {
			for(let i = array.length - 1; i > 0; i--) {

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
		}
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
}
</script>
