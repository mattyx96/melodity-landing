<template>
	<container class="text-white mb-20">
		<h2 class="text-[2.2rem] leading-none tracking-tighter font-semibold text-center w-full mt-12 mb-32 font-semibold
			font-poppins text-[#141a25]">
			Why Melodity Token?
		</h2>
<!--		<div class="flex flex-col justify-center relative">
			<ol>
				<li class="flex items-center mb-32">
					<div class="h-40 w-40 flex items-center justify-start mr-8">
						<img loading="lazy" src="@/assets/images/1.webp" alt="first" class="object-contain w-full">
					</div>
					<div class="w-1/4 max-w-[25%]">
						<h3 class="text-4xl font-semibold mb-6 font-poppins">
							Freedom
						</h3>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 px-8 mx-auto">
							Melodity connects Music
							to the Blockchain so artists
							can truly interact freely and
							directly with listeners
						</p>
					</div>
				</li>
				<li class="flex items-center mb-32">
					<div class="h-40 w-40 flex items-center justify-start mr-8">
						<img loading="lazy" src="@/assets/images/2.webp" alt="second" class="object-contain w-full">
					</div>
					<div class="w-1/4 max-w-[25%]">
						<h3 class="text-4xl font-semibold mb-6 font-poppins">
							Monetization
						</h3>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 px-8 mx-auto">
							Melodity puts artists and
							fans at the centre, and
							recognises their value by
							creating new forms of income
						</p>
					</div>
				</li>
				<li class="flex items-center mb-32">
					<div class="h-40 w-40 flex items-center justify-start mr-8">
						<img loading="lazy" src="@/assets/images/3.webp" alt="third" class="object-contain w-full">
					</div>
					<div class="w-1/4 max-w-[25%]">
						<h3 class="text-4xl font-semibold mb-6 font-poppins">
							Community
						</h3>
						<p class="text-left text-[1rem] leading-[1.4rem] font-normal md:px-0 px-8 mx-auto">
							Melodity’s ecosystem is
							powered by an ever Growing
							Community and is Easily
							Accessible, Now & Always
						</p>
					</div>
				</li>
			</ol>
			<div class="absolute right-1/2 top-0 translate-x-1/2">
				<img loading="lazy" src="@/assets/images/logo-rose.webp" alt="Melodity" class="object-contain h-full">
			</div>
			<div class="w-full h-full">
				<img loading="lazy" src="@/assets/images/headphones.webp" alt="headphones"
				     class="object-contain h-full -translate-y-1/3">
			</div>
		</div>-->
		<div class="grid md:grid-cols-3 gap-8">
			<a v-for="(elem, id) of faq" :key="id" :href="elem.url"
			   class="md:flex flex-col item-center justify-center w-full my-16"
				:class="id < 3 ? 'flex' : 'hidden'">
				<img loading="lazy" :src="elem.pic" :alt="elem.label" class="xl:max-w-[50%] max-w-[80%] mx-auto">
				<h4 class="mx-auto text-center font-semibold text-xl leading-6 tracking-tighter mt-6 font-semibold
					font-poppins text-[#141a25]">
					{{ elem.label }}
				</h4>
			</a>
		</div>
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