<script>
import HeroHome from '../components/HeroHome.vue';
import MainHome from '../components/MainHome.vue';
import Trusted from '../components/Trusted.vue';
export default {
  components: { 
    HeroHome,
    MainHome,
    Trusted,
  },
}
</script>

<template>
  <HeroHome />
  <MainHome />
  <Trusted />
</template>