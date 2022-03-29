<template>
	<Container>
		<div class="flex items-center justify-center flex-wrap md:flex-nowrap text-gray-800 mt-20">
			<div v-for="(elem, id) of featuredIcons" :key="id">
				<a class="rounded-full h-28 w-28 md:h-36 md:w-36 flex-col items-center justify-center px-2 md:m-2"
				   :href="elem.url" target="_blank" rel="noopener"
				   :class="['flex', elem?.bullet && elem.bullet ? 'bg-white' : '']">
					<div v-if="elem.desc" class="text-[#F9CFFF] ">
						<span>{{ elem.desc }}</span>
					</div>
					<img v-if="elem.pic" :src="elem.pic" :alt="elem.alt" class="object-contain rounded-md"/>
				</a>
			</div>
		</div>
	</Container>
</template>

<script>
import Container from "@/components/Container";

export default {
	name: "featuredIcons",
	components: {Container},
	props: {
		featuredIcons: {
			type: Array,
			require: true,
		},
	},
}
</script>

<style scoped>

</style>
