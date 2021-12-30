<template>
	<DiagonalLayout component-class="col-span-full bg-[#0F151C]" transform="translate(0, 10rem)">
		<div class="grid grid-cols-12 mt-40 lg:mt-14 relative text-white">
			<Container>
				<img src="@/assets/images/waves-1.webp" alt="waves-wallpaper"
				     class="absolute left-0 top-0 z-[-1] scale-[2]"/>
				<img src="@/assets/images/waves-1.webp" alt="waves-wallpaper"
				     class="absolute left-0 top-1/3 z-[-1] scale-[2]"/>
				<img src="@/assets/images/waves-1.webp" alt="waves-wallpaper"
				     class="absolute left-0 top-2/3 z-[-1] scale-[2]"/>

				<div class="md:flex hidden items-center justify-center lg:my-24 lg:mt-48 mt-48">
					<h2 class="text-[2.2rem] leading-none tracking-tighter font-semibold font-poppins text-center">
						Scaling Decentralized Music
						<br>
						Across Protocols & Borders
					</h2>
				</div>

				<div class="grid lg:grid-cols-2 grid-cols-1 xl:mt-12 lg:mt-32 mt-40 mb-32 lg:gap-12">
					<div class="py-6 lg:pr-12 font-poppins font-light">
						<h3 class="text-4xl font-semibold md:mb-16 mb-12 font-bold font-poppins relative lg:text-left text-center
						lg:after:hidden after:content-[''] after:absolute after:-translate-x-1/2 after:left-1/2
						after:-bottom-4 after:h-1 after:w-16 after:rounded-full after:bg-[#783A8A] md:px-0 px-2">
							Disrupting the music industry
						</h3>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 px-8 mx-auto">
							The music industry is an example of an out-of-date business model that has failed to capture
							up with the blockchain revolution.

							These old dynamics end up provoking income inequalities, low-paid musicians and self-serving
							intermediaries.

						</p>
					</div>
					<div class="flex items-center justify-end pl-4 lg:order-last order-first">
						<img src="@/assets/images/boubles.webp" alt="boubles" class="max-w-[60%] mx-auto"/>
					</div>
				</div>

				<div class="grid lg:grid-cols-2 grid-cols-1 xl:mt-48 lg:mt-32 mb-32 lg:gap-12">
					<div class="flex items-center justify-start pr-12">
						<img src="@/assets/images/boubles-2.webp" alt="boubles" class="max-w-[60%] mx-auto"/>
					</div>
					<div class="py-6 lg:pr-12 font-poppins font-light">
						<h3 class="text-4xl font-semibold mb-16 font-bold font-poppins relative lg:text-left text-center
						lg:after:hidden after:content-[''] after:absolute after:-translate-x-1/2 after:left-1/2
						after:-bottom-4 after:h-1 after:w-16 after:rounded-full after:bg-[#783A8A] md:px-0 px-2">
							We have a vision
						</h3>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 px-8 mx-auto">
							To bring the old fashioned music industry to the 21st century connecting it to the awesome
							world
							of blockchain technology and decentralization.
						</p>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal mt-6 md:px-0 px-8 mx-auto">
							Let's create the biggest music blockchain ecosystem!
						</p>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal mt-6 md:px-0 px-8 mx-auto">
							Join us and spread this new love!
						</p>
					</div>
				</div>

				<div class="grid lg:grid-cols-2 grid-cols-1 xl:mt-48 lg:mt-32 mb-16 lg:gap-12">
					<div class="py-6 lg:pr-12 font-poppins font-light">
						<h3 class="text-4xl font-semibold mb-16 font-bold font-poppins relative lg:text-left text-center
						lg:after:hidden after:content-[''] after:absolute after:-translate-x-1/2 after:left-1/2
						after:-bottom-4 after:h-1 after:w-16 after:rounded-full after:bg-[#783A8A] md:px-0 px-2">
							We are on a mission
						</h3>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 px-8 mx-auto">
							Melodity aims to change how independent musicians earn revenue from their creations giving
							them
							the freedom to monetize while increasing their visibility in the musical scene.
						</p>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal mt-6 md:px-0 px-8 mx-auto">
							We think that music is a must in everyone's life and that everyone should have the
							possibility to get a
							living out of their talent.
						</p>
					</div>
					<div class="flex items-center justify-end pl-8 lg:order-last order-first">
						<img src="@/assets/images/boubles-3.webp" alt="boubles" class="max-w-[60%] mx-auto"/>
					</div>
				</div>

				<a :href="buyMeldUrl" id="buy-meld"
				   class="text-white text-center font-bold rounded-full w-full bg-gradient-to-tr from-[#f56ec6] to-[#e94ac8]
							via-[#f56ec6] bg-left flex items-center justify-center p-4 lg:w-[20%] md:w-1/3 w-2/3 mx-auto lg:my-4 my-12
						font-poppins font-medium w-full tracking-wider">
					Buy MELD
				</a>

				<div class="text-center mt-16 mb-24 lg:mb-96">
					<h3 class="text-base leading-10 mb-8 font-semibold font-poppins">
						MELD are available on
					</h3>
					<div v-if="false" class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8">
						<a v-for="(elem, id) of randomListings" :key="id" :href="elem.url" target="_blank"
						   rel="noopener"
						   class="md:flex items-center justify-center p-8"
						   :class="id < 3 ? 'flex' : 'hidden'">
							<img :src="elem.logo" :alt="elem.name" class="2xl:max-w-[50%] max-w-[80%]"/>
						</a>
					</div>
					<a v-else class="text-center text-[1rem] leading-[1.4rem] font-bold mt-6 md:px-0 px-2 mx-auto
					text-[#0AE4EA]"
					   :href="buyMeldUrl">
						We're currently in a private sale, if you want to participate, fill the FORM
					</a>
				</div>
			</Container>
		</div>
	</DiagonalLayout>
</template>

<script>
import Container from "@/components/Container";
import DiagonalLayout from "@/components/DiagonalLayout";

export default {
	name: "AboutExtended",
	components: {Container, DiagonalLayout},
	props: {
		randomListings: {
			type: Array,
			required: true,
		},
		buyMeldUrl: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>

</style>
