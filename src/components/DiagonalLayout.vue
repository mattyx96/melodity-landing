<template>
  <div :class="classesFromFather" :style="diagonalBox">
    <div :style="content">
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
    left: {
      type: Boolean,
      default: false
    },
    deg: {
      type: Number,
      default: 7
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
      const magicPaddingNumber = Math.tan( (this.deg * Math.PI / 180)) / 2
      return {
        overflow: 'hidden',
        transform: (this.left ? `skewy(${this.deg}deg)` : `skewy(-${this.deg}deg)`) + ' ' + this.transform,
        paddingTop: `calc(100vw * ${magicPaddingNumber})`,
        paddingBottom: `calc(100vw * ${magicPaddingNumber})`,
      }
    },
    content() {
      return {
        transform: this.left ? `skewy(-${this.deg}deg)` : `skewy(${this.deg}deg)`,
        maxWidth: '100vw',
        margin: '0 auto',
      }
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

  Math.tan( (11 * Math.PI / 180)) / 2
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
</style>
