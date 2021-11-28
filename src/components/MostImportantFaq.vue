<template>
	<container class="text-white">
		<h2 class="text-[2.2rem] leading-none tracking-tighter font-semibold text-center w-full mt-60 md:mt-12 mb-32 font-semibold
			font-poppins text-[#141a25]">
			Why Melodity?
		</h2>
		<div class="flex flex-col justify-center relative">
			<ol>
				<li class="flex flex-col md:flex-row items-center mb-32">
					<div class="h-40 w-40 flex items-center justify-start md:mr-8 md:mb-0 mb-4">
						<img src="@/assets/images/1.webp" alt="first" class="object-contain w-full"/>
					</div>
					<div class="lg:w-1/3 xl:w-1/4 lg:max-w-[25%] md:px-0 px-6 md:text-left text-center">
						<h3 class="text-4xl font-semibold mb-6 font-poppins">
							Freedom
						</h3>
						<p class="md:text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 md:mx-auto">
							Melodity connects Music
							to the Blockchain so artists
							can truly interact freely and
							directly with listeners
						</p>
					</div>
				</li>
				<li class="flex flex-col md:flex-row items-center mb-32">
					<div class="h-40 w-40 flex items-center justify-start md:mr-8 md:mb-0 mb-4">
						<img src="@/assets/images/2.webp" alt="second" class="object-contain w-full"/>
					</div>
					<div class="lg:w-1/3 xl:w-1/4 lg:max-w-[25%] md:px-0 px-6 md:text-left text-center">
						<h3 class="text-4xl font-semibold mb-6 font-poppins">
							Monetization
						</h3>
						<p class="md:text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 md:mx-auto">
							Melodity puts artists and
							fans at the centre, and
							recognises their value by
							creating new forms of income
						</p>
					</div>
				</li>
				<li class="flex flex-col md:flex-row items-center">
					<div class="h-40 w-40 flex items-center justify-start md:mr-8 md:mb-0 mb-4">
						<img src="@/assets/images/3.webp" alt="third" class="object-contain w-full"/>
					</div>
					<div class="lg:w-1/3 xl:w-1/4 lg:max-w-[25%] md:px-0 px-6 md:text-left text-center">
						<h3 class="text-4xl font-semibold mb-6 font-poppins">
							Community
						</h3>
						<p class="md:text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 md:mx-auto">
							Melodity’s ecosystem is
							powered by an ever Growing
							Community and is Easily
							Accessible, Now & Always
						</p>
					</div>
				</li>
			</ol>
			<div class="absolute lg:max-w-[50%] right-0 top-1/2 lg:top-0 z-[-1] lg:translate-y-0 -translate-y-1/2">
				<img src="@/assets/images/logo-rose.webp" alt="Melodity"
             class="object-contain h-full lg:opacity-100 opacity-60"/>
			</div>
			<div class="w-full h-full z-[-2] xl:mb-0 mb-14">
				<img src="@/assets/images/headphones.webp" alt="headphones"
             class="object-contain h-full hidden xl:block"/>
			</div>
		</div>
<!--		<div class="grid md:grid-cols-3 gap-8">
			<a v-for="(elem, id) of faq" :key="id" :href="elem.url"
			   class="md:flex flex-col item-center justify-center w-full my-16"
				:class="id < 3 ? 'flex' : 'hidden'">
				<img :src="elem.pic" :alt="elem.label" class="xl:max-w-[50%] max-w-[80%] mx-auto">
				<h4 class="mx-auto text-center font-semibold text-xl leading-6 tracking-tighter mt-6 font-semibold
					font-poppins text-[#141a25]">
					{{ elem.label }}
				</h4>
			</a>
		</div>-->
	</container>
</template>

<script>
import Container from "@/components/Container";

export default {
	name: "MostImportantFaq",
	components: {Container},
	props: {
		faq: {
			type: Array,
			required: true,
			validate: (v) => {
				return v.length === 6
			}
		}
	}
}
</script>

<style scoped>

</style>
