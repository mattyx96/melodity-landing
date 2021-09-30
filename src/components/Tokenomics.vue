<template>
	<div class="col-span-full grid grid-cols-12 relative text-white overflow-hidden">
		<img src="@/assets/images/wallpaper-dark.webp" alt="dark-wallpaper"
		     class="absolute top-0 left-0 z-[-1]">
		<container>
			<div class="items-center justify-center md:my-64 my-32">
				<h2 class="text-4xl leading-none tracking-tighter font-bold text-center w-full lg:mb-20 mb-28 font-semibold font-poppins">
					Tokenomics
				</h2>
				<div class="h-full w-full p-2">
					<img src="@/assets/images/tokenomics.webp" alt="Tokenomics"
					     class="lg:scale-100 scale-150 md:block hidden xl:max-w-[80%] mx-auto">
					<img src="@/assets/images/tokenomics-vertical.webp" alt="Tokenomics"
					     class="lg:scale-100 md:hidden block">
				</div>
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