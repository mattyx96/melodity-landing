<template>
	<div class="col-span-full relative text-white overflow-hidden bg-cover p-16 scale-110"
	     :style="`background-image: url(${require('@/assets/images/back-4_resized.webp')})`">
		<div class="items-center justify-center my-32">
			<h2 class="text-[2.2rem] leading-none tracking-tighter font-semibold text-center w-full mb-20 font-semibold  text-[#141a25]">
				Roadmap
			</h2>
			<img src="@/assets/images/roadmap_resized.webp" alt="Roadmap"
			     class="md:block hidden lg:max-w-[80%] mx-auto scale-110"/>
			<img src="@/assets/images/roadmap-vertical.webp" alt="Roadmap"
			     class="md:hidden block"/>
		</div>
	</div>
</template>

<script>
export default {
	name: "Roadmap"
}
</script>

<style scoped>

</style>
