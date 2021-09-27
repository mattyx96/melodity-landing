<template>
	<div class="text-white grid 2xl:grid-cols-2 xl:grid-cols-3 grid-cols-1 md:m-0 m-2
		bg-cover rounded-[3rem] md:p-12 pt-12"
		:style="`background-image: url(${require('@/assets/images/back-1.svg')})`">
		<div class="xl:flex lg:hidden md:flex hidden flex-col items-center p-12 lg:mt-0 -my-12">
			<div class="2xl:ml-12 text-center font-montserrat">
				<h3 class="text-4xl font-bold">
					Melodity
				</h3>
				<h4 class="uppercase mt-2 tracking-[.5em]">
					Token
				</h4>
			</div>
			<img src="@/assets/images/apple.webp" alt="apple" class="lg:mt-12 mt-0">
		</div>
		<div class="pl-6 xl:pr-20 pr-6 py-0 lg:mt-0 md:mt-4 xl:pt-8 pt-0 2xl:col-span-1 lg:col-span-2">
			<h2 class="font-semibold lg:text-4xl text-3xl font-poppins">
				The Decentralized Protocol for Musicians
			</h2>
			<p class="xl:mt-12 lg:mt-8 mt-6 text-lg font-poppins font-light tracking-wider">
				Melodity token (ticker $MELD) is a DeFi token hosted on the Binance Smart Chain (BSC).
				They are the store of value for the whole Do Labs environment acting as a company share token.
			</p>
			<p class="lg:mt-6 mt-4 text-lg font-poppins font-light tracking-wider 2xl:block hidden">
				Melodity tokens have a fixed and immutable supply of one billion units, no minting or burning is
				allowed.
				<br>
				MELD is the only currency publicly tradable of the whole Do Labs environment.
			</p>
			<div class="flex flex-wrap md:my-8 font-poppins font-medium">
				<a class="mx-auto rounded-full p-3 px-8 border border-2 bg-[#f56ec6] border-[#f56ec6] text-center
								font-bold text-lg lg:block hidden flex items-center justify-center" :href="buyMeldUrl">
					Buy MELD
				</a>
				<a class="mx-auto rounded-full p-3 px-8 border border-2 bg-[#10151c] border-[#f56ec6] text-center
								font-bold text-lg md:my-0 mt-20 mb-20 flex items-center justify-center"
				   :href="urls[urls.length -1].url" target="_blank" rel="noopener">
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