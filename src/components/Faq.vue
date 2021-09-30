<template>
	<container>
		<div class="rounded-[3rem] w-full bg-[#141a25] md:p-16 p-8 pt-12 text-white xl:-translate-y-3/4 -translate-y-1/2
			lg:w-full -mb-20">
			<h2 class="text-4xl leading-none tracking-tighter text-center w-full font-semibold font-poppins">
				FAQ
			</h2>
			<div class="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-24">
				<a v-for="(elem, id) of faq" :key="id" :href="elem.url" target="_blank" rel="noopener"
				     class="rounded-[3rem] w-full bg-[#141414] transition-all duration-300">
					<div class="p-6 rounded-t-[3rem] w-full cursor-pointer text-lg font-semibold font-poppins">
						{{ elem.label }}
					</div>
				</a>
			</div>
		</div>
	</container>
</template>

<script>
import Container from "@/components/Container";
export default {
	name: "Faq",
	components: {Container},
	props: {
		faq: {
			type: Array,
			required: true,
		}
	},
}
</script>

<style scoped>

</style>