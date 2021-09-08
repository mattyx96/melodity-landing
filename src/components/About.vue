<template>
	<div class="text-white grid 2xl:grid-cols-2 xl:grid-cols-3 grid-cols-1 md:w-full w-[125%] md:ml-0 -ml-6">
		<div class="xl:flex lg:hidden md:flex hidden flex-col items-center p-12 lg:mt-0 -my-12">
			<div class="2xl:ml-12 text-center font-montserrat">
				<h3 class="text-4xl font-bold">
					Melodity
				</h3>
				<h4 class="uppercase mt-2 tracking-[.5em]">
					Token
				</h4>
			</div>
			<img src="@/assets/images/apple.webp" alt="apple" class="lg:mt-12 lg:p-8 mt-0 lg:p-12 p-6">
		</div>
		<div class="pl-6 xl:pr-20 pr-6 lg:py-20 py-0 lg:mt-0 md:mt-4 -mt-8 xl:pt-8 pt-0 2xl:col-span-1 lg:col-span-2">
			<h2 class="font-semibold lg:text-4xl text-3xl font-raleway">
				The Decentralized Protocol for Musicians
			</h2>
			<p class="xl:mt-12 lg:mt-8 mt-6 text-lg font-raleway font-light tracking-wider">
				Melodity token (ticker $MELD) is a DeFi token hosted on the Binance Smart Chain (BSC).
				They are the store of value for the whole Do Labs environment acting as a company share token.
			</p>
			<p class="lg:mt-6 mt-4 text-lg font-raleway font-light tracking-wider 2xl:block hidden">
				Melodity tokens have a fixed and immutable supply of one billion units, no minting or burning is
				allowed.
				<br>
				MELD is the only currency publicly tradable of the whole Do Labs environment.
			</p>
			<div class="flex my-8 font-mulish font-medium">
				<a class="mx-auto rounded-full p-4 px-16 border border-2 bg-[#f56ec6] border-[#f56ec6] text-center
								font-bold text-lg lg:block hidden" :href="buyMeldUrl">
					Buy MELD
				</a>
				<a class="mx-auto rounded-full p-4 px-16 border border-2 bg-[#10151c] border-[#f56ec6] text-center
								font-bold text-lg md:my-0 mt-24 mb-16" :href="urls[urls.length -1].url" target="_blank" rel="noopener">
					Whitepaper
				</a>
			</div>
			<socials-buttons class="mt-12 xl:flex hidden"></socials-buttons>
		</div>
	</div>
</template>

<script>
import SocialsButtons from "@/components/SocialsButtons";

export default {
	name: "About",
	components: {
		SocialsButtons
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

<style scoped>

</style>