<template>
  <Container v-if="false">
    <div
        class="-translate-y-1/2 z-10 rounded-[3rem] bg-[#141a25] xl:px-32 px-8 py-16 grid lg:grid-cols-4
            text-white absolute top-0 left-0 translate-y-2 grid-cols-1 md:w-full md:mx-0 mx-6">
      <h3 class="font-semibold text-2xl font-poppins lg:text-left text-center">
        Live chart
      </h3>
      <div v-for="(elem, id) of tokenStatsEntries" :key="id"
           class="lg:flex hidden flex-col items-center justify-center font-poppins font-semibold">
        <div class="text-[#14f195] text-4xl tracking-[-.01rem]">
          {{ tokenStatsValueSuffix[id] !== "" ? elem[1].toFixed(2) : elem[1] }}
          {{ tokenStatsValueSuffix[id] }}
        </div>
        <small class="uppercase font-poppins font-extralight tracking-wider leading-[3rem]">
          {{ tokenStatsLabel[id] }}
        </small>
      </div>
      <div class="lg:hidden glide-stats mt-4">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li v-for="(elem, id) of tokenStatsEntries" :key="id"
                class="glide__slide bg-[#141a25] rounded-[2rem]">
              <div class="flex flex-col items-center justify-center font-poppins font-semibold">
                <div class="text-[#14f195] text-4xl">
                  {{ tokenStatsValueSuffix[id] !== "" ? elem[1].toFixed(2) : elem[1] }}
                  {{ tokenStatsValueSuffix[id] }}
                </div>
                <small class="uppercase font-poppins font-medium">{{ tokenStatsLabel[id] }}</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
export default {
  name: "AboveTheFold",
  props: {
    tokenStatsEntries:{
      required: true,
      type: Array
    },
    tokenStatsLabel:{
      required: true,
      type: Array
    },
    tokenStatsValueSuffix:{
      required: true,
      type: Array
    }
  },
  components: {Container},
}
</script>

<style scoped>

</style>
