<template>
	<header class="w-full col-span-full grid xl:grid-cols-12 grid-cols-10 font-poppins transition-all duration-300"
	        :class="navAnimationClasses.wrapper">
		<div class="col-span-full h-10 md:h-9 bg-gradient-to-r from-[#FE84C1] to-[#DF38C6] text-center text-white text-xs md:text-sm flex
			justify-center items-center p-1 md:p-4 font-poppins leading-[1.4rem] font-medium tracking-[.01rem] tracking-normal">
			<p>
				To buy $MELD tokens use
				<span class="font-bold">ONLY</span>
				this website.
				<span class="font-bold">AVOID</span>
				scams.
			</p>
		</div>
		<nav
			class="xl:col-start-2 xl:px-0 px-6 col-span-10 grid lg:grid-cols-10 grid-cols-4 place-items-center transition-all duration-300"
			:class="navAnimationClasses.nav">
			<a class="col-span-2 lg:col-span-3 flex items-center justify-start" href="/#">
				<img src="@/assets/images/logo.webp" alt="logo" class="object-contain"
				     :class="navAnimationClasses.logo"/>
			</a>
			<template v-for="(elem, id) of urls">
				<a v-if="elem?.type && elem.type === 'button'" :key="-id" :href="elem.url"
				   :target="urlsTargets[id].target" :rel="urlsTargets[id].rel"
				   class="text-white text-center font-medium rounded-full w-full bg-gradient-to-tr from-[#f56ec6] to-[#e94ac8]
							via-[#f56ec6] bg-left flex items-center justify-center p-4 col-start-10
							lg:flex hidden">
					{{ elem.label }}
				</a>
				<a v-else :key="id" :href="elem.url" :target="urlsTargets[id].target" :rel="urlsTargets[id].rel"
				   class="text-white text-center p-2 font-medium flex items-center justify-center
						lg:flex hidden">
					{{ elem.label }}
				</a>
			</template>
			<div
				class="text-white lg:hidden flex justify-end items-center w-full h-full col-start-4 text-4xl cursor-pointer"
				@click="openMobileNav">
				<i class='bx bx-menu-alt-right'></i>
			</div>
			<div class="fixed top-0 left-0 right-0 h-screen transition-all duration-75 grid grid-rows-6 gap-0"
			     :class="navAnimationClasses.mobile.wrapper">
				<div v-for="id of Array.from({length: 6}, (v,k) => k)" :key="id"
				     class="h-full w-full bg-gray-100 transition-all duration-300"
				     :class="[navAnimationClasses.mobile.lines.common, navAnimationClasses.mobile.lines.items[id]]"></div>
				<div class="fixed z-20 top-0 left-0 right-0 h-screen flex flex-col transition-all duration-300 text-xl"
				     :class="navAnimationClasses.mobile.content">
					<div class="ml-auto p-4 cursor-pointer text-4xl" @click="closeMobileNav">
						<i class='bx bx-x'></i>
					</div>
					<template v-for="(elem, id) of urls">
						<a v-if="elem?.type && elem.type === 'button'" :key="-id" :href="elem.url"
						   :target="urlsTargets[id].target" :rel="urlsTargets[id].rel"
						   class="text-white font-medium rounded-full w-full bg-gradient-to-tr from-[#f56ec6] to-[#e94ac8]
									via-[#f56ec6] bg-left flex items-center justify-center md:p-8 px-8 py-4 col-start-8
									md:w-1/2 mx-auto mt-6 w-2/3"
						   @click="closeMobileNav">
							{{ elem.label }}
						</a>
						<a v-else :key="id" :href="elem.url" :target="urlsTargets[id].target" :rel="urlsTargets[id].rel"
						   class="text-gray-800 p-8 font-medium flex items-center border-b"
						   @click="closeMobileNav">
							{{ elem.label }}
						</a>
					</template>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "Heading",
	props: {
		navAnimationClasses: {
			type: Object,
			required: true,
		},
		urls: {
			type: Array,
			required: true,
		},
		urlsTargets: {
			type: Array,
			required: true,
		},
	},
	emits: ["mobileNavOpen", "mobileNavClose"],
	methods: {
		closeMobileNav() {
			this.$emit("mobileNavClose")
		},
		openMobileNav() {
			this.$emit("mobileNavOpen")
		}
	},
}
</script>

<style scoped>

</style>
