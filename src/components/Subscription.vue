<template>
	<container>
		<div class="md:p-12 p-4 lg:w-full absolute w-full xl:-translate-y-64 -translate-y-32 z-10 lg:scale-100 md:w-[125%]
			lg:ml-0 md:-ml-16 ">
			<img src="@/assets/images/back-2.webp" alt="background#2"
			     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] md:block hidden">
			<img src="@/assets/images/back-6.webp" alt="background#6"
			     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] scale-150 md:hidden">
			<div class="text-white grid xl:grid-cols-2 grid-cols-1 md:w-full w-[125%] md:ml-0 -ml-4">
				<div class="xl:h-96 xl:mb-0 md:mb-8 mb-2 flex items-center justify-center md:mt-0 -mt-4">
					<h2 class="md:text-4xl text-3xl text-white font-semibold font-raleway">
						Stay updated!
					</h2>
				</div>
				<!-- Begin Mailchimp Signup Form -->
				<div id="mc_embed_signup" class="flex items-center justify-center font-raleway font-thin">
					<form ref="mailchimp"
					      action="https://studio.us6.list-manage.com/subscribe/post?u=db37477a78610a7fd68c1eb65&amp;id=39e8d41aaf"
					      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
					      class="validate flex items-center justify-center" target="_blank" novalidate>
						<div id="mc_embed_signup_scroll" class="md:flex items-center justify-center">
							<input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="your@email.com" required
							       class="rounded-full bg-white md:px-6 px-3 md:py-4 py-2 outline-none text-gray-800 md:mr-8"
							       @keydown.enter="$refs.mailchimp.submit()">
							<button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
							        class="text-white text-center font-bold rounded-full md:w-full bg-gradient-to-tr
									            from-[#f56ec6] to-[#e94ac8] via-[#f56ec6] bg-left flex items-center
									            justify-center md:p-4 p-2 px-3 md:px-6 font-mulish font-medium
												md:mt-0 mt-2 w-3/4 mx-auto">
								Subscribe
							</button>

							<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
							<div style="position: absolute; left: -5000px;" aria-hidden="true">
								<input type="text" name="b_db37477a78610a7fd68c1eb65_39e8d41aaf" tabindex="-1"
								       value="">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</container>
</template>

<script>
import Container from "@/components/Container";
export default {
	name: "Subscription",
	components: {Container}
}
</script>

<style scoped>

</style>