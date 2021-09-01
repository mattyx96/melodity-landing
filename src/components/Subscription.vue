<template>
	<container>
		<div class="p-12 absolute w-full -translate-y-64 z-10">
			<img src="@/assets/images/back-2.webp" alt="background#2"
			     class="absolute top-0 left-1/2 -translate-x-1/2 z-[-1]">
			<div class="text-white grid grid-cols-2">
				<div class="h-96 flex items-center justify-center">
					<h2 class="text-4xl text-white font-semibold font-raleway">
						Stay updated!
					</h2>
				</div>
				<!-- Begin Mailchimp Signup Form -->
				<div id="mc_embed_signup" class="flex items-center justify-center font-raleway font-thin">
					<form ref="mailchimp"
					      action="https://studio.us6.list-manage.com/subscribe/post?u=db37477a78610a7fd68c1eb65&amp;id=39e8d41aaf"
					      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
					      class="validate flex items-center justify-center" target="_blank" novalidate>
						<div id="mc_embed_signup_scroll" class="flex items-center justify-center">
							<input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="your@email.com" required
							       class="rounded-full bg-white px-6 py-4 outline-none text-gray-800 mr-8"
							       @keydown.enter="$refs.mailchimp.submit()">
							<button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
							        class="text-white text-center font-bold rounded-full w-full bg-gradient-to-tr
									            from-[#f56ec6] to-[#e94ac8] via-[#f56ec6] bg-left flex items-center
									            justify-center p-4 px-6 font-mulish font-medium">
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