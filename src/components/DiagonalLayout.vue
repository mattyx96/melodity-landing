<template>
  <div :class="classesFromFather" :style="diagonalBox">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiagonalLayout",
  props: {
    componentClass: {
      type: String,
      default: "",
    },
    transform: {
      type: String,
      default: "",
    },
  },
  computed: {
    classesFromFather() {
      //init classes
      const classes = ['col-span-full'];

      //from parent
      this.componentClass.split(" ").forEach((item) => classes.push(item));
      return classes;
    },
    diagonalBox() {
      return {
        overflow: 'hidden',
        transform: 'skewy(-7deg)' + ' ' + this.transform,
        paddingTop: 'calc(100vw * 0.0702)',
        paddingBottom: 'calc(100vw * 0.0702)',
      }
    },
    padding() {
      return window.innerWidth > 470 ? 0 : 0
    }
  },
}
</script>

<style lang="scss" scoped>

:root {
  --width: 100vw;
  --full-width: 100vw;

  @media (min-width: 42em) {
    --width: 42rem;
  }

  --angle: -11deg;
  /*-----------------
  Magic Number Alert:

  the 0.09719 is calculated by this formula:
  tan(11°) / 2
  11° is the current skewY value.
  ------------------*/
  --magic-number: 0.09719;
  --skew-padding: calc(var(--width) * var(--magic-number));
  --clip-padding: calc(var(--full-width) * var(--magic-number));
}

.diagonal-box {
  @media screen and (max-width: 470px) {
    padding: 0;
  }
}

.content {
  transform: skewy(7deg);
  max-width: 100vw;
  margin: 0 auto;

  /* -----------
  enable the border to see, that the content
  perfectly fits into the section withou
  bleeding into the adjecting areas:
  ------------ */
  //border: 2px dashed #fff8;
}
</style>
