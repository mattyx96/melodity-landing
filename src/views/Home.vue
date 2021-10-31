<template>
	<div class="grid grid-cols-12">
		<heading :nav-animation-classes="navAnimationClasses" :urls="urls" :urls-targets="urlsTargets"
			@mobile-nav-open="openMobileNav" @mobile-nav-close="closeMobileNav"></heading>
		<main class="col-span-full grid grid-cols-12 py-2 relative transition-all duration-300"
		      :class="navAnimationClasses.content">
			<container>
				<h1 class="text-white text-center mx-auto md:text-[9.5em] text-7xl font-bold leading-none font-montserrat
					tracking-tighter">
					Let the Music
					<br>
					Begin!
				</h1>
				<img src="@/assets/images/waves.webp" alt="waves" class="absolute top-64 right-[-5%] z-[-1] xl:scale-90
					scale-100">
				<div class="md:mt-32 mt-24 relative">
					<about :urls="urls" :buy-meld-url="buy_meld_url"></about>
				</div>
			</container>
			<container v-if="false">
				<div
					class="-translate-y-1/2 rounded-[3rem] bg-[#141a25] xl:px-32 px-8 py-16 grid lg:grid-cols-4
						text-white absolute top-0 left-0 translate-y-2 grid-cols-1 md:w-full md:mx-0 mx-6">
					<h3 class="font-semibold text-2xl font-poppins lg:text-left text-center">
						Live chart
					</h3>
					<div v-for="(elem, id) of tokenStatsEntries" :key="id"
					     class="lg:flex hidden flex-col items-center justify-center font-poppins font-semibold">
						<div class="text-[#14f195] text-4xl tracking-[-.01rem]">
							{{ tokenStatsValueSuffix[id] !== "" ? elem[1].toFixed(2) : elem[1] }}
							{{ tokenStatsValueSuffix[id] }}
						</div>
						<small class="uppercase font-poppins font-extralight tracking-wider leading-[3rem]">{{ tokenStatsLabel[id] }}</small>
					</div>
					<div class="lg:hidden glide-stats mt-4">
						<div class="glide__track" data-glide-el="track">
							<ul class="glide__slides">
								<li v-for="(elem, id) of tokenStatsEntries" :key="id"
								    class="glide__slide bg-[#141a25] rounded-[2rem]">
									<div class="flex flex-col items-center justify-center font-poppins font-semibold">
										<div class="text-[#14f195] text-4xl">
											{{ tokenStatsValueSuffix[id] !== "" ? elem[1].toFixed(2) : elem[1] }}
											{{ tokenStatsValueSuffix[id] }}
										</div>
										<small class="uppercase font-poppins font-medium">{{ tokenStatsLabel[id] }}</small>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</container>
			<AboutExtended id="about" :random-listings="getRandomListings()"
			               :buy-meld-url="buy_meld_url"></AboutExtended>
			<div class="col-span-full relative text-white grid grid-cols-12 bg-cover">
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
					<img src="@/assets/images/logo.webp" alt="logo" class="object-contain lg:w-2/3 w-full max-w-[60%]">
				</div>
				<div class="xl:col-span-2 col-span-full w-full md:p-8 px-3 py-6 grid lg:grid-cols-3 grid-cols-2 xl:gap-20 gap-8">
					<div v-for="(elem, id) of Object.entries(footer)" :key="id" class="xl:ml-0 lg:ml-12 lg:text-left"
						:class="id % 2 === 0 ? 'text-right' : 'text-left'">
						<h4 class="font-semibold text-xl font-semibold font-poppins">
							{{ elem[0].split("_").map(v => `${v[0].toUpperCase()}${v.substr(1)}`).join(" ") }}
						</h4>
						<ul class="mt-8 font-thin font-poppins">
							<li v-for="(e, i) of elem[1]" :key="i">
								<a v-if="e.url" :href="e.url" target="_blank" rel="noopener">
									{{ e.label }}
								</a>
								<div v-else :onclick="e.click" class="cursor-pointer">
									{{ e.label }}
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-span-full text-center text-xl font-semibold font-poppins">
					<h4 class="mb-8">Join the conversation</h4>
					<socials-buttons class="2xl:-ml-8 lg:ml-8"></socials-buttons>
				</div>
				<div class="col-span-full border-t pt-4 text-lg font-thin font-poppins text-center">
					<p>
						Copyright &copy; Do inc. - {{ (new Date()).getFullYear() }}
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
				url: "https://docsend.com/view/fpxvfwmhtnq38gi6",
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
				pic: require("@/assets/images/why-1.webp"),
				label: "What is DeFi?",
				url: "https://docs.melodity.org/faq/general-questions#what-is-defi"
			},
			{
				pic: require("@/assets/images/why-2.webp"),
				label: "What is a Token?",
				url: "https://docs.melodity.org/faq/general-questions#what-is-a-token"
			},
			{
				pic: require("@/assets/images/why-3.webp"),
				label: "What is Melodity?",
				url: "https://docs.melodity.org/faq/generalities#what-is-melodity"
			},
			{
				pic: require("@/assets/images/why-4.webp"),
				label: "Which problems does Melodity solve?",
				url: "https://docs.melodity.org/faq/generalities#which-problems-does-melodity-solve"
			},
			{
				pic: require("@/assets/images/why-5.webp"),
				label: "Which is Melodity's mission?",
				url: "https://docs.melodity.org/faq/generalities#which-is-meloditys-mission"
			},
			{
				pic: require("@/assets/images/why-6.webp"),
				label: "Who's Melodity for?",
				url: "https://docs.melodity.org/faq/generalities#whos-melodity-for"
			},
		],
		faq: [
			{
				label: "Why should artists join Melodity?",
				url: "https://docs.melodity.org/faq/generalities#why-should-artists-join-melodity",
			},
			{
				label: "How can I buy MELD?",
				url: "https://docs.melodity.org/faq/generalities#how-can-i-buy-meld",
			},
			{
				label: "When will be the Melodity ICO?",
				url: "https://docs.melodity.org/faq/generalities#how-can-i-buy-meld",
			},
			{
				label: "What are locks?",
				url: "https://docs.melodity.org/faq/lock-explanation#what-are-locks",
			},
			{
				label: "Which are the lock times?",
				url: "https://docs.melodity.org/faq/lock-explanation#which-are-the-lock-times",
			},
			{
				label: "Where can i find my locks?",
				url: "https://docs.melodity.org/faq/lock-explanation#where-can-i-find-my-current-locks",
			},
		],
		upcoming_projects: [
			{
				pic: require("@/assets/images/logo-beats-chain.webp"),
				url: "#",
			},
			{
				pic: require("@/assets/images/logo-beats-white.webp"),
				url: "#",
			},
			{
				pic: require("@/assets/images/logo-doduet-white.webp"),
				url: "#",
			},
			{
				pic: require("@/assets/images/logo-dolearn-white.webp"),
				url: "#",
			},
			{
				pic: require("@/assets/images/logo-domart-white.webp"),
				url: "#",
			},
			{
				pic: require("@/assets/images/logo-doplay-white.webp"),
				url: "#",
			},
			{
				pic: require("@/assets/images/logo-dotime-white.webp"),
				url: "#",
			},
			{
				pic: require("@/assets/images/logo-mle-white.webp"),
				url: "https://lock.melodity.org",
			},
		],
		partners: [
			/*{
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
			},*/
		],
		medias: [
			/*{
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
			},*/
		],
		details: [
			/*{
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
			},*/
		],
		footer: {
			get_started: [
				{
					label: "Documentation",
					url: "https://docs.melodity.org/",
				},
				{
					label: "Run a Node",
					url: "https://docs.melodity.org/node-operators/become-a-node-operator",
				},
				{
					label: "Storyboard",
					url: "https://docs.melodity.org/whitepaper-storyboard/storyboard-2021",
				},
			],
			resources: [
				{
					label: "Getting started",
					url: "https://docs.melodity.org/getting-started",
				},
				{
					label: "Whitepaper",
					url: "https://docsend.com/view/fpxvfwmhtnq38gi6",
				},
				{
					label: "Media press",
					url: "https://docsend.com/view/e9knzicbry3ncaca",
				},
			],
			join_us: [
				{
					label: "Validators",
					url: "https://forms.gle/TGbnVTsgwQJ1vb5G9",
				},
				{
					label: "Investors",
					url: "https://forms.gle/TGbnVTsgwQJ1vb5G9",
				},
				{
					label: "Partnerships",
					url: "https://forms.gle/TGbnVTsgwQJ1vb5G9",
				},
				{
					label: "Sponsor",
					url: "https://forms.gle/TGbnVTsgwQJ1vb5G9",
				},
				{
					label: "Careers",
					url: "mailto:careers@dolabs.studio",
				},
			],
			community: [
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
			support: [
				{
					label: "Discord",
					url: "https://discord.com/invite/Fzs9Dqx8NW",
				},
				{
					label: "Github",
					url: "https://github.com/Do-inc",
				},
				{
					label: "Wiki",
					url: "https://docs.melodity.org/wiki/wiki",
				},
				{
					label: "Contact Us",
					url: "mailto:support@melodity.org",
				},
			],
			compliance: [
				{
					label: "Cookie preferences",
					click: "displayPreferenceModal()"
				},
				{
					label: "Privacy policy",
					url: "https://app.termly.io/document/privacy-policy/f7de0af7-75f7-44e3-9cf9-3c84b4399d23"
				},
				{
					label: "Cookie policy",
					url: "https://app.termly.io/document/cookie-policy/37cfebac-062c-4b33-b2db-49f79570fb19"
				},
				{
					label: "Terms & conditions",
					url: "https://app.termly.io/document/terms-of-use-for-website/6d487c06-e593-4ab5-9ae3-e5d00e6af3f1"
				}
			]
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
					"my-6": !this.scroll.animated,
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
			perView: 5,
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
