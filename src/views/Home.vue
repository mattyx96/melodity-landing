<template>
	<div class="grid grid-cols-12">
		<AnimatedGradient name="above-the-fold">
			<Heading :nav-animation-classes="navAnimationClasses"
			         :urls="urls" :urls-targets="urlsTargets"
			         @mobile-nav-open="openMobileNav" @mobile-nav-close="closeMobileNav"/>
			<div class="col-span-full grid grid-cols-12 py-2 relative transition-all duration-300 mt-24">
				<Title/>
				<div class="col-span-full grid grid-cols-12 md:mt-32 mt-24 relative">
					<About :urls="urls" :buy-meld-url="buy_meld_url"/>
					<FeaturedIcons
						class="hidden lg:block"
						:featured-icons="[
							...[details[3], details[4], details[6], details[7]],
							...featured
						]"
					/>
				</div>
				<LiveChart :token-stats-entries="tokenStatsEntries" :token-stats-label="tokenStatsLabel"
				           :token-stats-value-suffix="tokenStatsValueSuffix"/>
				<News :news="news"/>
			</div>
		</AnimatedGradient>
		<AboutExtended id="about" :random-listings="random_listings" :buy-meld-url="buy_meld_url"/>
		<AnimatedGradient :z-index="-2" name="background">
			<div class="col-span-full grid grid-cols-12 py-2 relative transition-all duration-300">
				<div class="col-span-full relative text-white grid grid-cols-12 bg-cover">
					<container>
						<div class="lg:-translate-y-40 mx-8 md:mx-0">
							<iframe class="w-full h-[20rem] md:h-[30rem] rounded-[3rem]"
							        src="https://www.youtube.com/embed/IL7DMvLR38I" title="YouTube video player"
							        frameborder="0"
							        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
							        picture-in-picture"
							        allowfullscreen>
							</iframe>
							<!--							<img class="w-full h-auto rounded-[3rem]" src="@/assets/images/Melodity.webp">-->
						</div>
					</container>
					<MostImportantFaq :faq="most_important_faq"/>
				</div>
			</div>
		</AnimatedGradient>
		<div class="col-span-full grid grid-cols-12 py-2 relative transition-all duration-300">
			<Ecosystem id="ecosystem" :details="details" :medias="medias" :partners="partners"
			           :upcoming-projects="upcoming_projects"/>
			<Faq :faq="faq"/>
			<Subscription/>
		</div>
		<footer class="col-span-full bg-[#10151c] text-white xl:pt-96 pt-48">
			<div class="md:px-48 px-4 pb-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12">
				<div class="xl:col-span-1 col-span-full w-full flex xl:justify-start xl:items-start
					items-center justify-center">
					<img src="@/assets/images/logo.webp" alt="logo" class="object-contain lg:w-2/3 w-full max-w-[60%]"/>
				</div>
				<div
					class="xl:col-span-2 col-span-full w-full md:p-8 px-3 py-6 grid lg:grid-cols-3 grid-cols-2 xl:gap-20 gap-8">
					<div v-for="(elem, id) of Object.entries(footer)" :key="id" class="xl:ml-0 lg:ml-12 lg:text-left"
					     :class="id % 2 === 0 ? 'text-right' : 'text-left'">
						<h4 class="font-semibold text-xl font-semibold ">
							{{ elem[0].split("_").map(v => `${v[0].toUpperCase()}${v.substr(1)}`).join(" ") }}
						</h4>
						<ul class="mt-8 font-thin ">
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
				<div class="col-span-full text-center text-xl font-semibold ">
					<h4 class="mb-8">Join the conversation</h4>
					<socials-buttons class="2xl:-ml-8 lg:ml-8"></socials-buttons>
				</div>
				<div class="col-span-full border-t pt-4 text-lg font-thin  text-center">
					<p>
						Copyright &copy; Do Inc. - {{ (new Date()).getFullYear() }}
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
import Ecosystem from "@/components/Ecosystem";
import Faq from "@/components/Faq";
import Subscription from "@/components/Subscription";
import Heading from "@/components/Heading";
import {urls} from "@/composition/urls";
import {listings} from "@/composition/listings";
import {most_important_faq} from "@/composition/most_important_faq";
import {faq} from "@/composition/faq";
import {upcoming_projects} from "@/composition/upcoming_projects";
import {details} from "@/composition/details";
import {footer} from "@/composition/footer";
import {partners} from "@/composition/partners";
import {medias} from "@/composition/medias";
import AnimatedGradient from "@/components/AnimatedGradient";
import LiveChart from "@/components/LiveChart";
import Countdown from "@/components/Countdown";
import {featured} from "@/composition/featured";
import FeaturedIcons from "@/components/FeaturedIcons";
import Title from "@/components/Title";
import News from "@/components/News";
import {news} from "@/composition/news";

export default {
	name: 'Home',
	components: {
		News,
		Title,
		FeaturedIcons,
		Countdown,
		AnimatedGradient,
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
		SocialsButtons,
		LiveChart
	},
	setup() {
		return {
			...details(),
			...faq(),
			...footer(),
			...listings(),
			...medias(),
			...most_important_faq(),
			...partners(),
			...upcoming_projects(),
			...urls(),
			...featured(),
			...news(),
		}
	},
	data: () => ({
		buy_meld_url: "https://www.pinksale.finance/#/launchpad/0xfFAc14749eb6b86163C580F384757bb786490ED8?chain=BSC",
		initial_logos: false,
		token_stats: {
			current_holders: 66,
			total_liquidity: 0,
			market_cap: 0,
		},
		random_listings: [],
		scroll: {
			trigger: 100,
			animated: false,
		},
		mobile: {
			open: false,
			animate: false,
			content: false,
		}
	}),
	methods: {
		getRandomListings(length = 5) {
			let still_available = this.shuffleArray(this.listings),
				extracted = []

			for (let i = 0; i < length && i < still_available.length; i++) {
				extracted.push(still_available[i])
			}

			return extracted
		},
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
					"mt-16": !this.scroll.animated,
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
	async created() {
		//init random_listings
		this.random_listings = this.getRandomListings();

		let _this = this
		document.addEventListener('scroll', function () {
			if (window.scrollY >= _this.scroll.trigger && !_this.scroll.animated) {
				_this.scroll.animated = true
			} else if (window.scrollY < _this.scroll.trigger && _this.scroll.animated) {
				_this.scroll.animated = false
			}
		});
	}
}
</script>
