<template>
	<div class="col-span-full grid grid-cols-12 relative text-white bg-[#10151c]">
		<div class="col-span-full flex items-center justify-center my-24 relative">
			<img src="@/assets/images/waves-1.webp" alt="waves" class="scale-125 rotate-180"/>
			<img src="@/assets/images/waves.webp" alt="waves" class="absolute top-0 left-1/2 lg:-translate-x-1/2
						md:-translate-x-1/3 md:pr-96 lg:scale-80 md:scale-90 -translate-x-1/2 md:mt-0 -mt-16 xl:max-w-[70%]"/>
			<img src="@/assets/images/logo-dolabs-ecosystem.webp" alt="Do inc. ecosystem" class="absolute
						top-1/2 -translate-y-1/2 lg:pt-36 md:pr-24 px-8 max-w-[60%] lg:max-w-[40%]"/>
		</div>
		<container>
			<h2 class="text-[2.2rem] text-center mb-48 font-semibold xl:mt-36 -mt-12 font-semibold font-poppins lg:block hidden">
				Artists, fans and labels in one single great,
				<br>
				efficient and transparent channel.
			</h2>
			<h3 class="text-2xl text-center font-semibold mb-8 font-semibold font-poppins">
				Upcoming Projects
			</h3>
		</container>
		<div class="col-span-full glide">
			<div class="glide__track" data-glide-el="track">
				<ul class="glide__slides">
					<li v-for="(elem, id) of upcomingProjects" :key="id"
					    class="glide__slide bg-[#141a25] rounded-[2rem]">
						<div
							class="rounded-[2rem] h-56 md:w-64 w-40 p-0 bg-[#141a25] flex items-center justify-center mx-auto">
							<a v-if="elem.url !== null && elem.pic != null"
							   class="rounded-[2rem] h-full w-full bg-[#141a25] flex items-center justify-center"
							   :href="elem.url" target="_blank" rel="noopener">
								<img :src="elem.pic" :alt="elem.pic"
								     class="rounded-[2rem] bg-transparent w-full object-contain"/>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<container>
			<h3 class="text-base leading-10 text-center mb-16 mt-36 font-normal font-poppins">
				Melodity major partners
			</h3>
			<div class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-12">
				<div v-if="partners.length > 0" v-for="(elem, id) of partners" :key="id"
				     class="flex flex-col items-center justify-center">
					<div class="bg-white rounded-full h-24 w-24 flex items-center justify-center p-3 mb-4">
						<img v-if="elem?.pic && elem.pic !== null" :src="elem.pic" :alt="elem.name"
						     class="object-contain"/>
					</div>
					<h5 class="font-semibold text-center text-xl font-normal font-poppins">
						{{ elem.name !== null ? elem.name : "" }}
					</h5>
				</div>
				<a v-else class="flex items-center justify-center w-full col-span-full"
				   href="https://docs.google.com/forms/d/e/1FAIpQLSejoXkR_P0FWW2MlVbFOxCUZduKv5fTt7eFD157UykGVfuOTA/viewform">
					<img src="@/assets/images/partner.webp" alt="partners" class="h-full object-contain"/>
				</a>
			</div>
			<div class="grid grid-cols-2 my-32 2xl:gap-0 gap-32">
				<div class="col-span-full flex flex-col items-center justify-center">
					<h3 class="text-base leading-10 text-center mb-16 mt-36 font-normal font-poppins">
						Melodity details
					</h3>
					<div v-if="details.length > 0" class="grid xl:grid-cols-3 grid-cols-2 gap-6">
						<div v-for="(elem, id) of details" :key="id" class="flex flex-col items-center justify-center">
							<a class="rounded-full h-44 w-44 md:h-64 md:w-64 flex items-center justify-center p-3 mb-4"
							   :href="elem.url" target="_blank" rel="noopener"
							   :class="[
								   'flex',
								   elem?.bullet && elem.bullet ? 'bg-white' : ''
								]">
								<img v-if="elem.pic" :src="elem.pic" :alt="elem.alt" class="object-contain rounded-md"/>
							</a>
						</div>
					</div>
					<a v-else class="flex items-center justify-center w-full col-span-full"
					   href="https://docs.google.com/forms/d/e/1FAIpQLSejoXkR_P0FWW2MlVbFOxCUZduKv5fTt7eFD157UykGVfuOTA/viewform">
						<img src="@/assets/images/info.webp" alt="info" class="h-full object-contain"/>
					</a>
				</div>
        <div class="col-span-full flex flex-col items-center justify-center">
          <h3 class="text-base leading-10 text-center mb-16 mt-36 font-normal font-poppins">
            Melodity in medias
          </h3>
          <div v-if="medias.length > 0" class="grid xl:grid-cols-3 grid-cols-2 gap-6">
            <div v-for="(elem, id) of medias" :key="id"
                 class="md:flex flex-col items-center justify-center">
              <a class="bg-white rounded-full h-24 w-24 flex items-center justify-center p-3 mb-4"
                 :href="elem.url" target="_blank" rel="noopener"
                 :class="id < 6 ? 'flex' : 'hidden'">
                <img v-if="elem.pic" :src="elem.pic" :alt="elem.url" class="object-contain"/>
              </a>
            </div>
          </div>
          <a v-else class="flex items-center justify-center w-full col-span-full"
             href="https://docs.google.com/forms/d/e/1FAIpQLSejoXkR_P0FWW2MlVbFOxCUZduKv5fTt7eFD157UykGVfuOTA/viewform">
            <img src="@/assets/images/press.webp" alt="press" class="h-full object-contain"/>
          </a>
        </div>
			</div>
		</container>
		<div class="col-span-full relative h-96 py-96 overflow-hidden">
			<img src="@/assets/images/waves-1.webp" alt="waves" class="absolute scale-125 rotate-180 top-0"/>
		</div>
	</div>
</template>

<script>
import Container from "@/components/Container";

export default {
	name: "Ecosystem",
	components: {Container},
	props: {
		upcomingProjects: {
			type: Array,
			require: true,
		},
		partners: {
			type: Array,
			require: true,
		},
		medias: {
			type: Array,
			require: true,
		},
		details: {
			type: Array,
			require: true,
		},
	}
}
</script>

<style scoped>

</style>
