<template>
	<container class="text-white mb-20">
		<h2 class="text-5xl font-bold text-center w-full mt-12 mb-32 font-semibold font-raleway text-[#141a25]">
			Why Melodity Token?
		</h2>
		<div class="grid md:grid-cols-3 gap-8">
			<a v-for="(elem, id) of faq" :key="id" :href="elem.url"
			   class="md:flex flex-col item-center justify-center w-full my-16"
				:class="id < 3 ? 'flex' : 'hidden'">
				<img :src="elem.pic" :alt="elem.label">
				<h4 class="text-center font-semibold text-xl mt-6 font-semibold font-raleway text-[#141a25]">{{ elem.label }}</h4>
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