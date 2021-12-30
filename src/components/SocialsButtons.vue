<template>
	<div class="flex items-center justify-center flex-wrap text-gray-800">
		<a v-for="(elem, id) of socials" :key="id" :href="elem.url" target="_blank" rel="noopener"
		   class="rounded-full p-2 bg-white flex items-center justify-center text-2xl mx-3 mb-3">
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
				url: "https://instagram.com/melodityofficial",
				icon: "bxl-instagram",
			},
			{
				url: "https://twitter.com/meloditytoken",
				icon: "bxl-twitter",
			},
			{
				url: "https://www.reddit.com/r/Melodity/",
				icon: "bxl-reddit",
			},
			{
				url: "https://t.me/Melodity_Official_Community",
				icon: "bxl-telegram",
			},
			{
				url: "https://medium.com/@melodityofficial",
				icon: "bxl-medium",
			},
		]
	})
}
</script>

<style scoped>

</style>
