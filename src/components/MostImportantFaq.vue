<template>
	<container class="text-white">
		<h2 class="text-5xl font-bold text-center w-full mt-12 mb-32">
			Why Melodity Token?
		</h2>
		<div class="grid grid-cols-3 gap-8">
			<a v-for="(elem, id) of faq" :key="id" :href="elem.url"
			   class="flex flex-col item-center justify-center w-full my-16">
				<img :src="elem.pic" :alt="elem.label">
				<h4 class="text-center font-semibold text-xl mt-6">{{ elem.label }}</h4>
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
			validate: (v) => { return v.length === 6 }
		}
	}
}
</script>

<style scoped>

</style>