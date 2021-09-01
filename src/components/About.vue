<template>
	<div class="text-white grid 2xl:grid-cols-2 xl:grid-cols-3">
		<div class="flex flex-col items-center p-12">
			<div class="2xl:ml-12 text-center font-montserrat">
				<h3 class="text-4xl font-bold">
					Melodity
				</h3>
				<h4 class="uppercase mt-2 tracking-[.5em]">
					Token
				</h4>
			</div>
			<img src="@/assets/images/apple.webp" alt="apple" class="mt-12 p-8">
		</div>
		<div class="pl-6 pr-20 py-20 pt-8 2xl:col-span-1 col-span-2">
			<h2 class="font-semibold text-4xl font-raleway">
				The Decentralized Protocol for Musicians
			</h2>
			<p class="mt-12 text-lg font-raleway font-light tracking-wider">
				Melodity token (ticker $MELD) is a DeFi token hosted on the Binance Smart Chain (BSC).
				They are the store of value for the whole Do Labs environment acting as a company share token.
			</p>
			<p class="mt-6 text-lg font-raleway font-light tracking-wider 2xl:block hidden">
				Melodity tokens have a fixed and immutable supply of one billion units, no minting or burning is
				allowed.
				<br>
				MELD is the only currency publicly tradable of the whole Do Labs environment.
			</p>
			<div class="flex my-8 font-mulish font-medium">
				<a class="mx-auto rounded-full p-4 px-16 border border-2 bg-[#f56ec6] border-[#f56ec6] text-center
								font-bold text-lg" :href="buyMeldUrl">
					Buy MELD
				</a>
				<a class="mx-auto rounded-full p-4 px-16 border border-2 bg-[#10151c] border-[#f56ec6] text-center
								font-bold text-lg" :href="urls[urls.length -1].url" target="_blank" rel="noopener">
					Whitepaper
				</a>
			</div>
			<socials-buttons class="mt-12 xl:block hidden"></socials-buttons>
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