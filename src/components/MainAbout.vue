<template>
  <div class="bg-gray relative websites-section">
    <div class="container mx-auto z-10 relative">
      <div class="sm:pt-20 lg:pb-32 pb-16 websites-inner">
        <h2 class="font-mainbold text-5xl leading-none tracking-3 text-center lg:mb-36 mb-10 title">Placing you at the centre of everything we do</h2>
        <div class="flex items-center lg:justify-between lg:mb-20 mb-8 flex-wrap lg:flex-nowrap">
          <div>
            <picture>
              <source type="image/webp" srcset="../assets/img/llm_guide.webp 1x, ../assets/img/llm_guide@2x.webp 2x ">
              <img src="../assets/img/llm_guide.png" srcset="../assets/img/llm_guide.png 1x, ../assets/img/llm_guide@2x.png 2x" alt="llm_guide">
            </picture>
          </div>
          <div class="lg:ml-10 text-holder lg:w-auto w-full">
            <h3 class="text-2.5xl lg:text-md leading-9 font-mainbold tracking-3 lg:mb-14 mb-4">LLM GUIDE: Master of Laws Programs Worldwide</h3>
            <p class="tracking-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt ornare malesuada. Donec tincidunt nisi a tincidunt fermentum. Vivamus lobortis suscipit massa id condimentum. Mauris eleifend facilisis turpis, sit amet bibendum orci ornare vel. Pellentesque sit amet leo commodo velit ultrices facilisis quis vel augue. </p>
          </div>
        </div>

        <div class="flex items-center justify-between lg:mb-20 mb-8 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
          <div class="lg:mr-10 text-holder">
            <h3 class="text-2.5xl lg:text-md leading-9 font-mainbold tracking-3 lg:mb-14 mb-4">FIND MBA: Business Schools Worldwide</h3>
            <p class="tracking-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt ornare malesuada. Donec tincidunt nisi a tincidunt fermentum. Vivamus lobortis suscipit massa id condimentum. Mauris eleifend facilisis turpis, sit amet bibendum orci ornare vel. Pellentesque sit amet leo commodo velit ultrices facilisis quis vel augue. </p>
          </div>
          <div>
            <picture>
              <source type="image/webp" srcset="../assets/img/find_mba.webp 1x, ../assets/img/find_mba@2x.webp 2x ">
              <img src="../assets/img/find_mba.png" srcset="../assets/img/find_mba.png 1x, ../assets/img/find_mba@2x.png 2x" alt="find_mba">
            </picture>
          </div>
        </div>

        <div class="flex items-center justify-between lg:mb-20 mb-8 flex-wrap lg:flex-nowrap">
          <div>
            <picture>
              <source type="image/webp" srcset="../assets/img/find_mba_online.webp 1x, ../assets/img/find_mba_online@2x.webp 2x ">
              <img src="../assets/img/find_mba_online.png" srcset="../assets/img/find_mba_online.png 1x, ../assets/img/find_mba_online@2x.png 2x" alt="find_mba_online">
            </picture>
          </div>
          <div class="lg:ml-10 text-holder">
            <h3 class="text-2.5xl lg:text-md leading-9 font-mainbold tracking-3 lg:mb-14 mb-4">FIND MBA Online: Distance Learning Business Masters Programs</h3>
            <p class="tracking-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt ornare malesuada. Donec tincidunt nisi a tincidunt fermentum. Vivamus lobortis suscipit massa id condimentum. Mauris eleifend facilisis turpis, sit amet bibendum orci ornare vel. Pellentesque sit amet leo commodo velit ultrices facilisis quis vel augue. </p>
          </div>
        </div>

        <div class="flex items-center justify-between lg:mb-0 mb-8 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
          <div class="lg:mr-10 text-holder">
            <h3 class="text-2.5xl lg:text-md leading-9 font-mainbold tracking-3 lg:mb-14 mb-4">Executive Courses</h3>
            <p class="tracking-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt ornare malesuada. Donec tincidunt nisi a tincidunt fermentum. Vivamus lobortis suscipit massa id condimentum. Mauris eleifend facilisis turpis, sit amet bibendum orci ornare vel. Pellentesque sit amet leo commodo velit ultrices facilisis quis vel augue. </p>
          </div>
          <div>
            <picture>
              <source type="image/webp" srcset="../assets/img/executive_courses.webp 1x, ../assets/img/executive_courses@2x.webp 2x ">
              <img src="../assets/img/executive_courses.png" srcset="../assets/img/executive_courses.png 1x, ../assets/img/executive_courses@2x.png 2x" alt="executive_courses">
            </picture>
          </div>
        </div>
      </div>
    </div>

    <Icons name="logo-bg-ico" class="bg-ico" />
    <Icons name="logo-bg-ico2" class="bg-ico2" />
  </div>
</template>

<script>
import Icons from './Icons.vue';

export default {
    components: { Icons },
}
</script>

<style lang="scss">
.websites-section {
  overflow-x: hidden;
  .bg-ico {
    @apply absolute z-0;
    top: 20%;
    left: -50px;
  }
  .bg-ico2 {
    @apply absolute bottom-0 z-0;
    right: -50px;
  }
}
.websites-inner {
  max-width: 1336px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  .title {
    max-width: 637px;
    margin-left: auto;
    margin-right: auto;
  }
  .text-holder {
    @apply text-center;
    @screen lg {
      @apply text-left;
      max-width: 500px;
    }
  }
}
</style>