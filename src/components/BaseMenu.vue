<template>
  <div
    class="hamburger"
    @click="hamburgerOpen = !hamburgerOpen"
    :class="hamburgerOpen ? 'hamburger--is-open' : ''"
  >
    <div class="hamburger__item hamburger__item--first"></div>
    <div class="hamburger__item hamburger__item--middle"></div>
    <div class="hamburger__item hamburger__item--last"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      hamburgerOpen: false,
    };
  },
});
</script>

<style lang="scss">
.hamburger {
  height: 22px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
  &__item {
    @apply bg-black;
    height: 2px;
    width: 100%;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
      opacity 300ms linear;
    &--first {
      .hamburger--is-open & {
        transform: translate(0, 10px) rotate(45deg);
      }
    }
    &--middle {
      .hamburger--is-open & {
        opacity: 0;
      }
    }
    &--last {
      .hamburger--is-open & {
        transform: translate(0, -10px) rotate(-45deg);
      }
    }
  }
}
.scrolled {
    .hamburger {
        &__item {
            @apply bg-white;
        }
    }
}
</style>
