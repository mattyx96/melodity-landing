<template>
	<div class="grid grid-cols-12">
		<heading :nav-animation-classes="navAnimationClasses" :urls="urls" :urls-targets="urlsTargets"
			@mobile-nav-open="openMobileNav" @mobile-nav-close="closeMobileNav"></heading>
		<main class="col-span-full grid grid-cols-12 py-20 relative transition-all duration-300"
		      :class="navAnimationClasses.content">
			<container>
				<h1 class="text-white text-center mx-auto md:text-[9.5em] text-6xl font-bold leading-none font-montserrat
					tracking-tighter">
					Let the Music
					<br>
					Begin!
				</h1>
				<img src="@/assets/images/waves.webp" alt="waves" class="absolute top-60 right-[-65%] z-[-1] xl:scale-90
					scale-100">
				<div class="mt-48 md:p-12 relative">
					<img src="@/assets/images/back-1.webp" alt="background#1"
					     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] xl:scale-100 scale-110 lg:block hidden">
					<img src="@/assets/images/back-5.webp" alt="background#5"
					     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] lg:hidden md:scale-100 scale-[1.4]">
					<about :urls="urls" :buy-meld-url="buy_meld_url"></about>
					<div class="flex items-center justify-center text-white font-semibold text-3xl xl:my-20">
						<div v-if="initial_logos" class="mx-20">BOI</div>
						<div v-if="initial_logos" class="mx-20">CNN</div>
						<div v-if="initial_logos" class="mx-20">CMC</div>
					</div>
				</div>
			</container>
			<container>
				<div
					class="-translate-y-1/2 rounded-[3rem] w-full bg-[#141a25] xl:px-32 px-8 py-12 grid lg:grid-cols-4
						text-white absolute top-0 left-0 translate-y-2 grid-cols-1 md:w-full w-[125%] md:ml-0 ">
					<h3 class="font-semibold text-2xl font-raleway lg:text-left text-center">
						Live chart
					</h3>
					<div v-for="(elem, id) of tokenStatsEntries" :key="id"
					     class="lg:flex hidden flex-col items-center justify-center font-inter font-black">
						<div class="text-[#14f195] text-3xl">
							{{ tokenStatsValueSuffix[id] !== "" ? elem[1].toFixed(2) : elem[1] }}
							{{ tokenStatsValueSuffix[id] }}
						</div>
						<small class="uppercase font-mulish font-medium">{{ tokenStatsLabel[id] }}</small>
					</div>
					<div class="lg:hidden glide-stats mt-4">
						<div class="glide__track" data-glide-el="track">
							<ul class="glide__slides">
								<li v-for="(elem, id) of tokenStatsEntries" :key="id"
								    class="glide__slide bg-[#141a25] rounded-[2rem]">
									<div class="flex flex-col items-center justify-center font-inter font-black">
										<div class="text-[#14f195] text-3xl">
											{{ tokenStatsValueSuffix[id] !== "" ? elem[1].toFixed(2) : elem[1] }}
											{{ tokenStatsValueSuffix[id] }}
										</div>
										<small class="uppercase font-mulish font-medium">{{ tokenStatsLabel[id] }}</small>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</container>
			<AboutExtended id="about" :random-listings="getRandomListings()"
			               :buy-meld-url="buy_meld_url"></AboutExtended>
			<div class="col-span-full relative text-white grid grid-cols-12">
				<img src="@/assets/images/back-4.webp" alt="background#4"
				     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] md:translate-y-0 -translate-y-1/3">
				<img src="@/assets/images/back-4.webp" alt="background#4"
				     class="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1] lg:hidden scale-y-[-1] md:translate-y-[80%]
						translate-y-[-175%]">
				<img src="@/assets/images/back-4.webp" alt="background#4"
				     class="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1] lg:hidden scale-y-[1] md:translate-y-[80%]
						md:hidden translate-y-[-80%]">
				<img src="@/assets/images/back-4.webp" alt="background#4"
				     class="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1] lg:hidden scale-y-[-1] md:translate-y-[80%]
						md:hidden translate-y-[20%]">
				<PriceConverter class="md:flex hidden"></PriceConverter>
				<MostImportantFaq :faq="most_important_faq"></MostImportantFaq>
			</div>
			<Tokenomics id="tokenomics"></Tokenomics>
			<Roadmap id="roadmap"></Roadmap>
			<ecosystem id="ecosystem" :details="details" :medias="medias" :partners="partners"
			           :upcoming-projects="upcoming_projects"></ecosystem>
			<faq :faq="faq"></faq>
			<subscription></subscription>
		</main>
		<footer class="col-span-full bg-[#10151c] text-white xl:pt-96 pt-48">
			<div class="md:px-48 px-4 pb-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12">
				<div class="xl:col-span-1 col-span-full w-full flex xl:justify-start xl:items-start items-center
					justify-center">
					<img src="@/assets/images/logo.webp" alt="logo" class="object-contain lg:w-2/3 w-full">
				</div>
				<div class="xl:col-span-2 col-span-full w-full md:p-8 px-3 py-6 grid lg:grid-cols-3 grid-cols-2 xl:gap-20 gap-8">
					<div v-for="(elem, id) of Object.entries(footer)" :key="id" class="xl:ml-0 lg:ml-12 lg:text-left"
						:class="id % 2 === 0 ? 'text-right' : 'text-left'">
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
				<div class="col-span-full text-center text-xl font-semibold font-raleway">
					<h4 class="mb-8">Join the conversation</h4>
					<socials-buttons class="2xl:-ml-8 lg:ml-8"></socials-buttons>
				</div>
				<div class="col-span-full border-t pt-4 text-lg font-thin font-raleway text-center">
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
import Heading from "@/components/Heading";

export default {
	name: 'Home',
	components: {
		Heading,
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
				label: "aaaaa",
				url: "#",
			},
			{
				label: "aaaaa",
				url: "#",
			},
			{
				label: "aaaaa",
				url: "#",
			},
			{
				label: "aaaaa",
				url: "#",
			},
			{
				label: "aaaaa",
				url: "#",
			},
			{
				label: "aaaaa",
				url: "#",
			},
			{
				label: "aaaaa",
				url: "#",
			},
			{
				label: "aaaaa",
				url: "#",
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
			get_started: [
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
					label: "Whitepaper",
					url: "https://siasky.net/AABVVg4xWKCx9upY3F4qoO9DUEE3t43TYTfmNUTFsyklVg/",
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
		},
		scroll: {
			trigger: 200,
			animated: false,
		},
		mobile: {
			open: false,
			animate: false,
			content: false,
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

		openMobileNav() {
			this.mobile.animate = true
			setTimeout(() => {
				this.mobile.open = true
				this.mobile.content = true
			}, 1200)
		},
		closeMobileNav() {
			this.mobile.content = false
			this.mobile.animate = false
			setTimeout(() => {
				this.mobile.open = false
			}, 1200)
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

		navAnimationClasses() {
			return {
				wrapper: {
					"fixed z-50 bg-gray-800 bg-opacity-75": this.scroll.animated,
				},
				nav: {
					"my-4": this.scroll.animated,
					"my-12": !this.scroll.animated,
				},
				content: {
					"mt-64": this.scroll.animated,
					"mt-24": !this.scroll.animated,
				},
				logo: {
					"md:w-1/3 w-full": this.scroll.animated,
					"md:w-2/3 w-full": !this.scroll.animated,
				},
				mobile: {
					wrapper: {
						"z-[-1] translate-x-full": !this.mobile.open && !this.mobile.animate,
						"z-20": this.mobile.animate || this.mobile.open,
						"bg-gray-100": this.mobile.open && this.mobile.animate
					},
					lines: {
						common: {
							"translate-x-full": !this.mobile.animate
						},
						items: [
							"delay-[150ms]",
							"delay-[300ms]",
							"delay-[450ms]",
							"delay-[600ms]",
							"delay-[750ms]",
							"delay-[900ms]",
						]
					},
					content: {
						"opacity-0": !this.mobile.content,
						"opacity-100": this.mobile.content
					}
				}
			}
		},
	},
	mounted() {
		new Glide(".glide", {
			type: "carousel",
			perView: 6,
			focusAt: 0,
			gap: 60,
			autoplay: 5000,
			hoverpause: true,
			animationTimingFunc: "linear",
			animationDuration: 4000,
			peek: 100,
			breakpoints: {
				1440: {
					perView: 4,
				},
				1024: {
					perView: 3,
				},
				768: {
					perView: 2,
				},
				425: {
					perView: 1,
				}
			},
		}).mount()
		new Glide(".glide-stats", {
			type: "carousel",
			perView: 1,
			focusAt: 0,
			gap: 60,
			autoplay: 5000,
			hoverpause: true,
		}).mount()
	},
	async created() {
		// dynamically populates the component data object, this acts as a fake backend
		let res = await axios.get("https://raw.githubusercontent.com/DoLabs-studio/melodity-landing/dataset/data.json")
		// this dynamically populates the data of the component
		for (let [key, value] of Object.entries(res.data)) {
			this.$data[key] = value
		}

		let _this = this
		document.addEventListener('scroll', function (e) {
			if (window.scrollY >= _this.scroll.trigger && !_this.scroll.animated) {
				_this.scroll.animated = true
			} else if (window.scrollY < _this.scroll.trigger && _this.scroll.animated) {
				_this.scroll.animated = false
			}
		});
	}
}
</script>
