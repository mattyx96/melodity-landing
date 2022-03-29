<template>
	<Container big>
		<div class="text-white bg-cover rounded-[4rem] m-4 lg:m-0 lg:px-0 lg:pb-10 lg:pt-28 lg:mt-10 custom-background">
			<div class="grid lg:grid-cols-5 grid-cols-1 flex items-end lg:items-center mt-6 lg:mt-14">
				<div class="col-span-3">
					<div v-if="false" class="2xl:ml-12 text-center font-syne">
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
						<h2 class="lg:font-bold font-medium lg:text-[2rem] lg:leading-10 md:text-2xl text-2xl leading-7 ">
							The Web3 Ecosystem for Music Industry
						</h2>
						<p class="xl:mt-8 lg:mt-8 mt-8 text-[1rem] leading-[1.4rem] font-normal  md:tracking-[.01rem] tracking-normal">
							Melodity is taking the music industry one giant step further towards a decentralized creator
							economy with a Web 3.0 monetization infrastructure to support the music industry in
							completely new ways: Listen-to-earn, Music NFT technology, Marketplace, Metaverse.
						</p>
						<p class="mt-4">
							Participate to the Token Generation Event.
						</p>
					</div>
					<div class="flex flex-wrap xl:mt-16 md:mt-4 lg:mb-8  font-medium">
						<a class="mx-auto rounded-full my-1 py-4 px-6 border border-2 bg-[#f56ec6] border-[#f56ec6] text-center
								font-bold text-lg flex items-center justify-center"
						   :href="buyMeldUrl">
							Buy MELD
						</a>
						<a class="mx-auto rounded-full py-4 px-6 border border-2 bg-gray-900/30 border-[#f56ec6] text-center
								font-bold text-lg my-1 flex items-center justify-center"
						   href="https://ico.melodity.org/referral" target="_blank" rel="noopener">
							Referral Program
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
