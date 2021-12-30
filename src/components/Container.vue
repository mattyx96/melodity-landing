<template>

	<div v-if="big" class="md:col-span-10 md:col-start-2 col-span-full col-start-1 flex flex-col relative">
		<slot></slot>
	</div>
	<div v-else class="md:col-span-8 md:col-start-3 col-span-full col-start-1 flex flex-col relative">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Container",
	props: {
		big: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style scoped>

</style>
