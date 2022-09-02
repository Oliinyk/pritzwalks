<template>
  <div class="pt-32 pb-40 sm:pt-72 sm:pb-44 relative hero-about">
    <div class="container mx-auto">
      <div class="flex flex-wrap sm:px-4 px-8 hero-inner">
        <div class="lg:w-1/3">
          <h1 class="font-mainbold text-5xl tracking-3 mb-3 sm:mb-6 leading-none">About Us</h1>
        </div>
        <div class="lg:w-2/3">
          <p class="font-mainbold text-2xl sm:text-2.5xl leading-normal tracking-3 flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt ornare malesuada. Donec tincidunt nisi a tincidunt fermentum. Vivamus lobortis suscipit massa id condimentum. Mauris eleifend facilisis turpis, sit amet bibendum orci ornare vel. Pellentesque sit amet leo commodo velit ultrices facilisis quis vel augue. </p>
        </div>
      </div>
    </div>
    <Icons name="logo-bg-ico" class="bg-ico" />
  </div>
</template>

<script>
import Icons from './Icons.vue';

export default {
    components: { Icons },
}
</script>

<style scoped lang="scss">
.hero-about {
  overflow: hidden;
  .bg-ico {
    @apply absolute bottom-0;
    left: -50px;
    width: 240px;
    height: 410px;
  }
}
.hero-about:after {
  @apply bg-gray absolute;
  content: '';
  width: calc(100% + 100px);
  height: 100px;
  left: -50px;
  bottom: -50px;
  transform: rotate(-3deg);
}
</style>