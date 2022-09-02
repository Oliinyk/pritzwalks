<template>
  <header class="fixed top-0 left-0 w-full z-20" :class="{ 'scrolled': scrolled }">
    <div class="container mx-auto">
      <div class="flex justify-between px-4 items-center lg:items-start" :class="[scrolled ? 'py-3' : 'py-3 lg:py-10']">
        <router-link to="/">
          <Icons v-if="!scrolled" name="logo-colored" class="logo-colored" />
          <Icons v-else name="logo-white" width="152" />
        </router-link>
        <ul class="uppercase py-2 font-mainbold text-white items-list" :class="{'isOpenMenu': isOpenMenu}">
          <!-- <li class="lg:px-6"><router-link to="/about" class="px-1 pb-1.5 link-underline tracking-3"><span class="transition hover:opacity-60">About us</span></router-link></li> -->
          <li class="lg:px-6">
            <a href="/#ourWebsites" class="px-1 pb-1.5 link-underline tracking-3"><span class="transition hover:opacity-60">Our portals</span></a>
          </li>
          <li class="lg:px-6"><router-link to="/faq" class="px-1 pb-1.5 link-underline tracking-3"><span class="transition hover:opacity-60">FAQ</span></router-link></li>
          <li class="lg:ml-10">
            <a href="/#contactUs" class="px-12 py-3 border rounded tracking-4 hover:bg-white hover:text-turquoise transition inline-block btn">Contact us</a>
          </li>
        </ul>
        <!-- hamburger button -->
        <BaseMenu @click="isOpenMenu = !isOpenMenu" class="lg:hidden" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
let layout = computed(() => route.meta.layout);
let scrolled=ref(false);
const handleScroll=(el)=>{
  scrolled.value = !!window.scrollY
}
window.addEventListener('scroll', handleScroll);
</script>
<script>
import Icons from './Icons.vue';
import BaseMenu from './BaseMenu.vue';

export default {
  components: { Icons, BaseMenu },
  data() {
    return {
      isOpenMenu: false,
    };
  },
}
</script>
<style lang="scss">
.scrolled {
  @apply bg-electric-blue bg-opacity-90;
}
.logo-colored {
  width: 153px;
  height: 71px;
  @screen lg {
    width: 267px;
    height: 123px;
  }
}
.items-list {
  @apply hidden px-10;
  @screen lg {
    @apply flex items-center;
  }
  &.isOpenMenu {
    @apply flex flex-col flex-wrap bg-electric-blue fixed top-0 left-0 h-full pt-12;
    width: 70%;
    min-width: 300px;
    li {
      @apply pb-5;
    }
  }
}
.header-default ul {
  @apply text-dark-blue;
  .btn {
    @apply text-electric-blue;
    &:hover {
      @apply text-turquoise;
    }
  }
  &.isOpenMenu {
    @apply text-white;
    .btn {
      @apply text-white;
      &:hover {
        @apply text-turquoise;
      }
    }
  }
}
.header-default {
  .link-underline {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#3d4563, #3d4563);
  }
  &.scrolled {
    ul {
      @apply text-white;
      .btn {
        @apply text-white;
        &:hover {
          @apply text-turquoise;
        }
      }
    }
    .link-underline {
      background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    }
  }
}
</style>