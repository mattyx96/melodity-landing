<template>
	<div class="flex justify-center md:px-4 xl:ml-0">
		<div class="md:backdrop-filter md:backdrop-blur px-6 pt-8 md:p-10 w-11/12 md:w-10/12 md:rounded-[4rem]
				rounded-[3rem] relative custom-background">
			<a :href="url ? url : ''">
				<h1 class="text-4xl text-white montserrat text-center font-bold">
					Private sale is Live!
				</h1>
				<div class="mt-10"/>
				<span class="w-3/5 mx-auto text-center text-white hidden md:block">
				Don't miss this huge opportunity before time is over,
				<a class="font-normal text-lg text-[#22F3F3]" :href="url ? url : ''"> Join Now!</a>
			</span>
				<div class="my-2 md:mt-4"/>
				<div class="w-10/12 md:w-full mx-auto rounded-full bg-gray-800 mt-4">
					<div class="bg-gradient-to-r from-[#FE84C1] to-[#DF38C6] rounded-full h-10 md:h-14"
					     :style="percentageWidth">
						<!--{{percentageWidth}}-->
					</div>
				</div>
				<div class="mt-2">
					<p class="flex justify-center text-xs md:text-lg text-[#22F3F3]">
						Private sale: Dec 01st 2021 - Jan 13th 2022
					</p>
				</div>
				<div class="flex justify-around items-center px-4 md:w-2/3 xl:w-full mx-auto mt-10">
					<div class="flex items-end mx-2 xl:mx-0">
						<span class="font-bebas text-bold text-4xl md:text-6xl md:text-[#FF9ACD]">
							{{ daysSpan }}
						</span>
						<div class="text-bold text-2xl text-white mb-1">D</div>
					</div>
					<div class="flex items-end mx-2 xl:mx-0">
						<span class="font-bebas text-bold text-4xl md:text-6xl md:text-[#FF9ACD]">
							{{ hoursSpan }}
						</span>
						<div class="text-bold text-2xl text-white mb-1">H</div>
					</div>
					<div class="flex items-end mx-2 xl:mx-0">
						<span class="font-bebas text-bold text-4xl md:text-6xl md:text-[#FF9ACD]">
							{{ minutesSpan }}
						</span>
						<div class="text-bold text-2xl text-white mb-1">M</div>
					</div>
					<div class="flex items-end mx-2 xl:mx-0">
						<span class="font-bebas text-bold text-4xl md:text-6xl md:text-[#FF9ACD]">
							{{ secondsSpan }}
						</span>
						<div class="text-bold text-2xl text-white mb-1">S</div>
					</div>
				</div>
			</a>

			<div class="my-4 flex justify-center text-xs text-[#FF99CC]">
				<a href="https://drive.google.com/drive/folders/1PKkxz3zBn8DKAWebrx44dd7F1ZmfMIwl?usp=sharing">
					Price & Vesting
				</a>
				<span>&nbsp;|&nbsp;</span>
				<a href="https://www.certik.com/projects/melodity">
					Audit
				</a>
				<span>&nbsp;|&nbsp;</span>
				<a href="https://t.me/Melodity_Official_Community">
					Support
				</a>
			</div>
		</div>
	</div>

</template>

<style scoped>
.custom-background {
	background-color: rgb(0, 0, 0, 0);
}

@media (min-width: 1024px) {
	.custom-background {
		background-color: rgb(0, 0, 0, 0.4);
	}
}
</style>

<script>
export default {
	name: 'Countdown',
	props: {
		endTime: {
			type: String,
			default: "",
		},
		startTime: {
			type: String,
			default: "",
		},
		url: {
			type: String,
			default: null,
		}
	},
	data: () => ({
		daysSpan: 0,
		hoursSpan: 0,
		minutesSpan: 0,
		secondsSpan: 0,
	}),
	methods: {
		getTimeRemaining() {
			const total = Date.parse(this.endTime) - Date.parse(new Date());

			const seconds = Math.floor((total / 1000) % 60);
			const minutes = Math.floor((total / 1000 / 60) % 60);
			const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
			const days = Math.floor(total / (1000 * 60 * 60 * 24));

			return {
				total,
				days,
				hours,
				minutes,
				seconds
			};
		},
		initializeClock() {
			const _this = this

			function updateClock() {
				const t = _this.getTimeRemaining();

				_this.daysSpan = t.days;
				_this.hoursSpan = ('0' + t.hours).slice(-2);
				_this.minutesSpan = ('0' + t.minutes).slice(-2);
				_this.secondsSpan = ('0' + t.seconds).slice(-2);

				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}

			updateClock();
			const timeinterval = setInterval(updateClock, 1000);
		}
	},
	computed: {
		percentageWidth() {
			const end = Date.parse(this.endTime);
			let now = Date.parse(new Date());
			const start = Date.parse(this.startTime);
			const perc = ((now - start) / (end - start)).toFixed(2) * 100;
			// console.log(`end:${end} now:${now} start:${start} perc:${perc}`)
			return {
				width: `${perc}%`
			}
		}
	},
	mounted() {
		this.initializeClock();
	}
}
</script>
