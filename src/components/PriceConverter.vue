<template>
	<container>
		<div class="-translate-y-40 w-full rounded-[3rem] relative bg-cover"
		     :style="`background-image: url(${require('@/assets/images/back-3.webp')})`">
			<div class="relative text-white">
				<div class="relative xl:py-16 xl:px-12 md:pt-6 p-12 xl:bg-transparent bg-gray-900 bg-opacity-60 xl:rounded-none
					rounded-[4rem]">
					<h3 class="w-full text-center font-semibold font-poppins text-4xl leading-none tracking-tighter">
						MELODITY Private Sale
					</h3>
					<div class="grid xl:grid-cols-2 gap-4 2xl:mt-24 mt-8">
						<div class="text-lg flex flex-col justify-center xl:pr-20 px-4 font-poppins font-thin">
							<p class="text-[1.40rem] leading-[1.4rem] font-normal">
								<strong>
									until 13 January 2022
									23:59.59 UTC
								</strong>
							</p>
							<p class="xl:mt-6 mt-3 text-[1rem] leading-[1.4rem] font-normal">
								Our inclusive community unites people from all over the world with a passion for music.
							</p>
							<p class="xl:mt-6 mt-3 text-[1rem] leading-[1.4rem] font-normal">
								Our ecosystem is powered by you!
							</p>
							<p class="xl:mt-6 mt-3 text-[1rem] leading-[1.4rem] font-normal">
								Participate to Melodity. More info coming soon!
							</p>
						</div>
						<div class="flex items-center justify-center xl:block hidden">
							<div class="rounded-[3rem] bg-[#141a25] 2xl:p-4 p-2 w-full font-poppins font-thin">
								<h4 class="w-full text-center text-xl font-semibold font-poppins">Current MELD
									pricing</h4>
								<div class="mx-6 bg-[#141414] rounded-[2rem] 2xl:p-6 p-4 2xl:my-8 my-4">
									<h5 class="text-xl font-semibold font-poppins">Buy</h5>
									<div class="grid grid-cols-4 gap-8 mt-4">
										<input type="number" placeholder="0.00" v-model="usd" @input="recomputeMELD"
										       class="appearance-none text-xl text-white bg-transparent
															col-span-3 p-2 outline-none focus:bg-white focus:bg-opacity-5
															transition-all duration-300 rounded">
										<h6 class="font-bold text-xl flex items-center">USD</h6>
									</div>
								</div>
								<div class="mx-6 bg-[#141414] rounded-[2rem] p-6 my-8">
									<h5 class="text-xl font-semibold font-poppins">Get</h5>
									<div class="grid grid-cols-4 gap-8 mt-4">
										<input type="number" placeholder="0.00" v-model="meld" @input="recomputeUSD"
										       class="appearance-none text-xl text-white bg-transparent
															col-span-3 p-2 outline-none focus:bg-white focus:bg-opacity-5
															transition-all duration-300 rounded">
										<h6 class="font-bold text-xl flex items-center">MELD</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</container>
</template>

<script>
import Container from "@/components/Container";

export default {
	name: "PriceConverter",
	components: {Container},
	data: () => ({
		usd: null,
		meld: null,

		// 1 MELD = 0.025 USD
		conversion_rate: 0.025
	}),
	methods: {
		recomputeUSD() {
			if (this.meld) {
				this.usd = +this.meld * this.conversion_rate
			}
		},
		recomputeMELD() {
			if (this.usd) {
				this.meld = +this.usd / this.conversion_rate
			}
		}
	}
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button {
	-webkit-appearance: none;
}
</style>
