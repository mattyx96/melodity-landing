<template>
	<div class="col-span-full grid grid-cols-12 relative text-white mt-20 overflow-hidden">
		<img src="@/assets/images/wallpaper-dark.webp" alt="dark-wallpaper"
		     class="absolute top-0 left-0 z-[-1]">
		<container>
			<div class="items-center justify-center my-64">
				<h2 class="text-5xl font-bold text-center w-full mb-20">
					Tokenomics
				</h2>
				<img src="@/assets/images/tokenomics.webp" alt="Tokenomics">
			</div>
		</container>
	</div>
</template>

<script>
import Container from "@/components/Container";
export default {
	name: "Tokenomics",
	components: {Container}
}
</script>

<style scoped>

</style>