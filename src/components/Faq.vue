<template>
	<container>
		<div class="rounded-[3rem] w-full bg-[#141a25] p-16 text-white xl:-translate-y-3/4 -translate-y-1/2">
			<h2 class="text-4xl text-center w-full font-semibold font-raleway">
				FAQ
			</h2>
			<div class="grid xl:grid-cols-2 gap-8 mt-24">
				<div v-for="(elem, id) of faq" :key="id"
				     class="rounded-[3rem] w-full bg-[#141414] transition-all duration-300">
					<div class="p-6 rounded-t-[3rem] w-full cursor-pointer text-xl font-semibold font-raleway" @click="openFaq(id)">
						{{ elem.label }}
					</div>
					<div :class="[faqClasses[id], 'font-thin font-raleway']" v-html="elem.content"></div>
				</div>
			</div>
		</div>
	</container>
</template>

<script>
import Container from "@/components/Container";
export default {
	name: "Faq",
	components: {Container},
	props: {
		faq: {
			type: Array,
			required: true,
		}
	},
	methods: {
		closeFaq() {
			this.faq.forEach(v => {
				v.animating = true
				setTimeout(() => {
					v.active = false
				}, 500)
			})
		},
		openFaq(id) {
			if(this.faq[id].active) {
				this.faq[id].animating = true
				setTimeout(() => {
					this.faq[id].active = false
				}, 500)
			}
			else {
				this.closeFaq()

				setTimeout(() => {
					setTimeout(() => {
						this.faq[id].animating = false
					}, 400)
					this.faq[id].active = true
					this.faq[id].animating = true
				}, 600)
			}
		}
	},
	computed: {
		faqClasses() {
			return this.faq.map(v => ({
				"p-8 rounded-b-[3rem] w-full text-lg transition-all duration-500 border-t opacity-1 z-0": v.active && !v.animating,
				"p-8 rounded-b-[3rem] w-full text-lg transition-all duration-500 border-t opacity-0 z-0": v.active && v.animating,
				"h-0 w-full text-lg transition-all duration-500 opacity-0 z-[-2]": !v.active,
			}))
		}
	}
}
</script>

<style scoped>

</style>