<template>
  <div class="pt-32 pb-40 sm:pt-72 sm:pb-44 relative hero-home">
    <img  v-if="!selectedImage" src="./../assets/img/main_banner@2x.png" alt="">
    <img v-if="selectedImage==1"  src="./../assets/img/main_banner_2@2x.png" alt="">
    <img v-if="selectedImage==2" src="./../assets/img/main_banner_3@2x.png" alt="">
    <img v-if="selectedImage==3" src="./../assets/img/main_banner_4@2x.png" alt="">
    <div class="container mx-auto">
      <div class="hero-inner sm:px-4 px-8 text-center sm:text-left">
        <h1 class="font-mainbold text-5xl tracking-3 mb-4 sm:mb-6 leading-none">Education Directories Worldwide</h1>
        <p class="font-mainbold text-3xl sm:text-md leading-none sm:leading-9 tracking-3 mb-20 sm:mb-12">Recruit students for your academic programs from all over the world.</p>
        <div class="flex flex-wrap items-center">
          <a href="#" class="bg-turquoise text-white font-mainbold tracking-5 rounded-md py-3 px-6 sm:mr-9 sm:mb-0 mb-3 uppercase shadow-btn hover:bg-white hover:text-turquoise transition sm:w-auto w-full">Advertise my programs</a>
        </div>
      </div>
    </div>
    <div>
      
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        './assets/main_banner@2x.png',
        './assets/main_banner_2@2x.png',
        './assets/main_banner_3@2x.png',
        './assets/main_banner_4@2x.png'
      ],
      selectedImage: null
    }
  },
  methods: {
    randomItem (items) {
      return Math.floor(Math.random()*items);
    }
  },
  created() {
    this.selectedImage = this.randomItem(4)
  },
}
</script>

<style scoped>
.hero-home {
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
  position: relative;
}
.hero-home img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.hero-home:after {
  @apply bg-gray absolute;
  content: '';
  width: calc(100% + 100px);
  height: 100px;
  left: -50px;
  bottom: -50px;
  transform: rotate(-3deg);
}
.hero-inner {
  max-width: 810px;
  position: relative;
  z-index: 9;
}
</style>