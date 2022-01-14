<template>
	<Container big>
		<div class="text-white bg-cover rounded-[4rem] m-4 lg:m-0 lg:px-0 lg:pb-10 lg:pt-28 lg:mt-10 custom-background">
			<div class="grid lg:grid-cols-5 grid-cols-1 flex items-end lg:items-center mt-6 lg:mt-14">
				<div class="col-span-3">
					<div v-if="false" class="2xl:ml-12 text-center font-montserrat">
						<h3 class="text-5xl font-bold leading-10">
							Melodity
						</h3>
						<h4 class="uppercase mt-2 tracking-[.5em]">
							Token
						</h4>
					</div>
					<ReverseCountdown
						start-time="January 13 2022 23:59:59 UTC"
						end-time="March 31 2022 23:59:59 UTC"
						:url="buyMeldUrl"
					/>
				</div>
				<div class="w-3/4 mx-auto my-auto flex-nowrap items-end lg:justify-center lg:ml-10 col-span-2">
					<div class="hidden lg:block">
						<img class="h-16 w-auto mb-4 xl:mb-8" src="@/assets/images/logo.webp">
						<h2 class="lg:font-bold font-medium lg:text-[2rem] lg:leading-10 md:text-2xl text-2xl leading-7 font-poppins">
							The Web3 Ecosystem for Music Industry
						</h2>
						<p class="xl:mt-8 lg:mt-8 mt-8 text-[1rem] leading-[1.4rem] font-normal font-poppins md:tracking-[.01rem] tracking-normal">
							Melodity token ($MELD) is a DeFi token hosted on the Binance Smart Chain (BSC). Melodity is the store of value for the whole DoEcosystem and the only publicly tradable currency of the environment.
						</p>
					</div>
					<div class="flex flex-wrap xl:mt-20 md:mt-8 lg:mb-8 font-poppins font-medium">
						<a class="mx-auto rounded-full p-4 px-8 border border-2 bg-[#10151C] lg:bg-[#f56ec6] border-[#f56ec6] text-center
								font-bold text-lg lg:my-0 mt-4 mb-4 flex items-center justify-center"
						   :href="buyMeldUrl">
							Buy MELD
						</a>
						<a class="mx-auto rounded-full p-4 px-8 border border-2 bg-[#10151c] border-[#f56ec6] text-center
								font-medium text-lg lg:my-0 mt-20 mb-20 lg:flex hidden items-center justify-center"
						   href="https://docsend.com/view/fpxvfwmhtnq38gi6" target="_blank" rel="noopener">
							Whitepaper
						</a>
					</div>
				</div>
			</div>
			<socials-buttons class="lg:mt-10 p-4 mb-4"></socials-buttons>
		</div>
	</Container>
</template>

<script>
import SocialsButtons from "@/components/SocialsButtons";
import Countdown from "@/components/Countdown";
import Container from "@/components/Container";
import ReverseCountdown from "@/components/ReverseCountdown";

export default {
	name: "About",
	components: {
		ReverseCountdown,
		Container,
		SocialsButtons,
	},
	props: {
		urls: {
			type: Array,
			require: true
		},
		buyMeldUrl: {
			type: String,
			require: true
		},
	},
}
</script>

<style lang="scss" scoped>

.custom-background {
	background-image: url('../assets/images/Wall3-mobile.png');
}

@media (min-width: 1280px) {
	.custom-background {
		background-image: url('../assets/images/Wall3.png');
	}
}
</style>
