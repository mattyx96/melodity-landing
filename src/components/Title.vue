<template>
	<Container>
		<h1 class="text-white text-center mx-auto md:text-[6.5em] text-7xl font-bold leading-none
				tracking-tighter font-syne">
			Let the Music
			<br>
			Begin!
		</h1>
		<img src="@/assets/images/waves.webp"
		     alt="waves" class="absolute top-30 right-[-5%] z-[-1] xl:scale-90 scale-100 opacity-40"/>
	</Container>
</template>

<script>
import Container from "@/components/Container";

export default {
	name: "Title",
	components: {Container}
}
</script>

<style scoped>

</style>
