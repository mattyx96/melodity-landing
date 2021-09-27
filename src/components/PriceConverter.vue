<template>
	<container>
		<div class="-translate-y-24 w-full rounded-[3rem] relative bg-cover"
		     :style="`background-image: url(${require('@/assets/images/back-3.svg')})`">
			<div class="relative text-white">
<!--				<img src="@/assets/images/back-3.webp" alt="background#3"
				     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] lg:scale-100 scale-125">-->
				<div class="relative 2xl:p-8 xl:p-4 md:pt-6 p-12 xl:bg-transparent bg-gray-900 bg-opacity-60 xl:rounded-none
					rounded-[3rem]">
					<h3 class="w-full text-center font-semibold font-poppins text-4xl">MELD Prices</h3>
					<div class="grid xl:grid-cols-2 gap-4 2xl:mt-24 mt-8">
						<div class="text-lg flex flex-col justify-center xl:pr-20 px-4 font-poppins font-thin">
							<p class="">
								Become a MELD holder and join the ever growing Do Labs community.
							</p>
							<p class="xl:mt-6 mt-3">
								The top six holders will be included in the Beats chain's decentralized council
								and will help growing this enormous environment.
							</p>
							<p class="xl:mt-6 mt-3">
								Remember that council members are refreshed every six months so keep holding
								your MELD if you want to sit in the council!
							</p>
						</div>
						<div class="flex items-center justify-center xl:block hidden">
							<div class="rounded-[3rem] bg-[#141a25] 2xl:p-4 p-2 w-full font-poppins font-thin">
								<h4 class="w-full text-center text-xl font-semibold font-poppins">Current MELD pricing</h4>
								<div class="mx-6 bg-[#141414] rounded-[2rem] 2xl:p-6 p-4 2xl:my-8 my-4">
									<h5 class="text-xl font-semibold font-poppins">Buy</h5>
									<div class="grid grid-cols-4 gap-8 mt-4">
										<input type="text" placeholder="0.00"
										       class="appearance-none text-xl text-white bg-transparent
															col-span-3 p-2 outline-none focus:bg-white focus:bg-opacity-5
															transition-all duration-300 rounded">
										<h6 class="font-bold text-xl flex items-center">USD</h6>
									</div>
								</div>
								<div class="mx-6 bg-[#141414] rounded-[2rem] p-6 my-8">
									<h5 class="text-xl font-semibold font-poppins">Get</h5>
									<div class="grid grid-cols-4 gap-8 mt-4">
										<input type="text" placeholder="0.00"
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
	components: {Container}
}
</script>

<style scoped>

</style>