<template>
	<Container big v-if="news.length > 0">
		<!--		mobile version-->
		<div class="lg:hidden translate-y-14 absolute top-0 left-0 right-0 z-10">
			<div id="news" class="glide">
				<div data-glide-el="track" class="glide__track">
					<ul class="glide__slides">
						<li v-for="(elem, id) of news" :key="id" class="glide__slide">
							<a :href="elem.url">
								<img
									class="relative w-9/12 z-10 h-auto rounded-[3rem] bg-[#141a25] mx-auto"
									:src="elem.pic"
									:alt="elem.alt"
								/>
							</a>
							<div
								class="relative w-10/12 -translate-y-14 min-h-40 rounded-[3rem] bg-gradient-to-t from-[#FE84C1] to-[#DF38C6] mx-auto text-white flex items-end"
							>
								<div class="grid grid-cols-12 grid-span-full items-center px-2">
									<a @click="glide.go('<')" class="h-42 w-42 flex justify-center items-center">
										<i class="col-span-1 bx bxs-chevron-left text-2xl" />
									</a>
									<a class="mt-16 pb-8 col-span-10" :href="elem.url">
										<h1 class="uppercase font-poppins text-xl mt-2.5 font-bold text-center">{{ elem.title }}</h1>
										<p class="font-light mt-2.5 px-8 text-md md:text-lg">{{ elem.body }}</p>
									</a>
									<a @click="glide.go('>')" class="h-42 w-42 flex justify-center items-center">
										<i class="col-span-1 bx bxs-chevron-right text-2xl" />
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!--		lg version-->
		<div class="hidden lg:block translate-y-24 absolute top-0 left-0 right-0 z-10">
			<div id="news-lg" class="glide">
				<div data-glide-el="track" class="glide__track">
					<ul class="glide__slides">
						<li
							v-for="(elem, id) of news"
							:key="id"
							class="glide__slide relative flex justify-center items-center rounded-[3rem] bg-gradient-to-t from-[#FE84C1] to-[#DF38C6] text-white"
						>
							<a
								@click="glideLg.go('<')"
								class="h-42 w-42 flex justify-center items-center absolute left-5 z-20"
							>
								<i class="bx bxs-chevron-left text-2xl" />
							</a>
							<a class="w-1/2 self-stretch" :href="elem.url">
								<img
									class="rounded-tl-[3rem] rounded-bl-[3rem] object-cover h-full"
									:src="elem.pic"
									:alt="elem.alt"
								/>
							</a>
							<a class="w-1/2 p-8 pr-2" :href="elem.url">
								<h1 class="uppercase font-poppins text-xl font-bold text-center">{{ elem.title }}</h1>
								<p class="font-light mt-2.5 px-8 text-md md:text-lg">{{ elem.body }}</p>
							</a>
							<a
								@click="glideLg.go('>')"
								class="h-42 w-42 flex justify-center items-center absolute right-5"
							>
								<i class="bx bxs-chevron-right text-2xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Container>
</template>

<script>
import Container from "@/components/Container";
import Glide from "@glidejs/glide";

export default {
	name: "News",
	data: () => ({
		glide: null,
		glideLg: null,
	}),
	props: {
		news: {
			required: false,
			type: Array,
			default: [],
		},
	},
	components: { Container },
	mounted() {
		this.glide = new Glide('#news', {
			type: 'carousel',
			perView: 1,
			focusAt: 0,
			autoplay: 3000, //3 seconds
			hoverpause: true,
		})
		this.glide.mount()

		this.glideLg = new Glide('#news-lg', {
			type: 'carousel',
			perView: 1,
			focusAt: 0,
			autoplay: 3000, //3 seconds
			hoverpause: true,
		})
		this.glideLg.mount()
	}
}
</script>

<style scoped>
.glide {
	max-width: 100%;
}
</style>
