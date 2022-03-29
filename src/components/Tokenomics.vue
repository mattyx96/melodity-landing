<template>
	<DiagonalLayout component-class="col-span-full bg-[#0F151C] z-10" transform="translate(0, 5rem)">
		<div class="col-span-full grid grid-cols-12 relative text-white">
			<img src="@/assets/images/wallpaper-dark.webp" alt="dark-wallpaper"
			     class="absolute top-0 left-0 z-[-1]"/>
			<container>
				<div class="items-center justify-center md:my-64 my-32">
					<h2 class="text-[2.2rem] leading-none tracking-tighter font-semibold text-center w-full lg:mb-20 mb-28 font-semibold ">
						Tokenomics
					</h2>
					<div class="h-full w-full p-4 md:p-2">
						<img src="@/assets/images/tokenomics.webp" alt="Tokenomics"
						     class="lg:scale-100 scale-150 md:block hidden xl:max-w-[80%] mx-auto"/>
						<img src="@/assets/images/tokenomics-vertical.webp" alt="Tokenomics"
						     class="lg:scale-100 md:hidden block"/>
					</div>
				</div>
			</container>
		</div>
	</DiagonalLayout>
</template>

<script>
import Container from "@/components/Container";
import DiagonalLayout from "@/components/DiagonalLayout";

export default {
	name: "Tokenomics",
	components: {Container, DiagonalLayout}
}
</script>

<style scoped>

</style>
