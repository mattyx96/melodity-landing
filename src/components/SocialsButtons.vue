<template>
	<div class="flex items-center justify-center text-gray-800">
		<a v-for="(elem, id) of socials" :key="id" :href="elem.url" target="_blank" rel="noopener"
			class="rounded-full p-2 bg-white flex items-center justify-center text-2xl mx-3">
			<i :class="['bx', elem.icon]"></i>
		</a>
	</div>
</template>

<script>
export default {
	name: "SocialsButtons",
	data: () => ({
		socials: [
			{
				url: "#",
				icon: "bxl-facebook",
			},
			{
				url: "#",
				icon: "bxl-instagram",
			},
			{
				url: "#",
				icon: "bxl-twitter",
			},
			{
				url: "#",
				icon: "bxl-tiktok",
			},
			{
				url: "#",
				icon: "bxl-linkedin",
			},
			{
				url: "#",
				icon: "bxl-youtube",
			},
		]
	})
}
</script>

<style scoped>

</style>