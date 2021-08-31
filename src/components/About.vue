<template>
	<div class="text-white grid grid-cols-2">
		<div class="flex flex-col items-center p-12">
			<div class="ml-12 text-center">
				<h3 class="text-3xl font-bold">
					Melodity
				</h3>
				<h4 class="uppercase mt-2">
					Token
				</h4>
			</div>
			<img src="@/assets/images/apple.webp" alt="apple" class="mt-12 p-8">
		</div>
		<div class="pl-6 pr-20 py-20 pt-8">
			<h2 class="font-bold text-4xl">
				The Decentralized Protocol for Musicians
			</h2>
			<p class="mt-12 text-lg text-justify">
				Melodity token (ticker $MELD) is a DeFi token hosted on the Binance Smart Chain (BSC).
				They are the store of value for the whole Do Labs environment acting as a company share token.
			</p>
			<p class="mt-6 text-lg text-justify">
				Melodity tokens have a fixed and immutable supply of one billion units, no minting or burning is
				allowed.
				<br>
				MELD is the only currency publicly tradable of the whole Do Labs environment.
			</p>
			<div class="flex my-8">
				<a class="mx-auto rounded-full p-4 px-16 border border-2 bg-[#f56ec6] border-[#f56ec6] text-center
								font-bold text-lg" :href="buyMeldUrl" target="_blank" rel="noopener">
					Buy MELD
				</a>
				<a class="mx-auto rounded-full p-4 px-16 border border-2 bg-[#10151c] border-[#f56ec6] text-center
								font-bold text-lg" :href="urls[urls.length -1].url" target="_blank" rel="noopener">
					Whitepaper
				</a>
			</div>
			<socials-buttons class="mt-12"></socials-buttons>
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