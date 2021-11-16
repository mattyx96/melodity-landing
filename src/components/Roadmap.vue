<template>
	<div class="col-span-full relative text-white overflow-hidden bg-cover"
	     :style="`background-image: url(${require('@/assets/images-opt/back-4.webp')})`">
		<div class="items-center justify-center my-32">
			<h2 class="text-[2.2rem] leading-none tracking-tighter font-semibold text-center w-full mb-20 font-semibold font-poppins text-[#141a25]">
				Roadmap
			</h2>
			<img src="@/assets/images-opt/roadmap.webp" alt="Roadmap" class="md:block hidden lg:max-w-[80%] mx-auto"/>
			<img src="@/assets/images-opt/roadmap-vertical.webp" alt="Roadmap" class="md:hidden block"/>
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
