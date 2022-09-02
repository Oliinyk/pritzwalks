<template>
  <footer class="bg-blue pt-8 pb-4 sm:px-4 px-8">
    <div class="container mx-auto">
      <div class="footer-inner">
        <div class="flex flex-wrap lg:flex-nowrap">
          <div class="lg:w-1/3 w-full flex flex-wrap">
            <router-link to="/" class="w-1/2 lg:w-full block order-1">
              <Icons name="logo-white" />
            </router-link>
            <p class="font-mainbold text-white text-xl mt-5 mb-6 lg:order-2 order-3">Education Directories Worldwide</p>
            <ul class="flex lg:mb-10 w-1/2 lg:w-full lg:order-3 order-2">
              <li class="mr-4">
                <a href="#">
                  <Icons name="twitter-ico" class="hover:fill-turquoise transition" />
                </a>
              </li>
              <li class="mr-4">
                <a href="#">
                  <Icons name="facebook-ico" class="hover:fill-turquoise transition" />
                </a>
              </li>
              <li class="mr-4">
                <a href="#">
                  <Icons name="instagram-ico" class="hover:fill-turquoise transition" />
                </a>
              </li>
              <li class="mr-4">
                <a href="#">
                  <Icons name="linkedin-ico" class="hover:fill-turquoise transition" />
                </a>
              </li>
            </ul>
            <p class="text-gray-light text-sm tracking-4 hidden lg:block order-4">&#169; 2001-2022 Pritzwalks</p>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 w-full lg:pt-9 pt-2">
            <h3 class="font-mainbold text-white text-xl mb-8">Our Portals</h3>
            <div class="flex">
              <ul class="text-white sm:pr-40 pr-20">
                <li class="pb-2"><a href="#" class="hover:text-turquoise transition">LLM Guide</a></li>
                <li class="pb-2"><a href="#" class="hover:text-turquoise transition">Find MBA</a></li>
              </ul>
              <ul class="text-white">
                <li class="pb-2"><a href="#" class="hover:text-turquoise transition">Find MBA Online</a></li>
                <li class="pb-2"><a href="#" class="hover:text-turquoise transition">Executive Courses</a></li>
              </ul>
            </div>
          </div>
          <div class="sm:w-1/2 lg:w-1/3 w-full sm:px-8 lg:pt-9 sm:pt-2 pt-14">
            <h3 class="font-mainbold text-white text-xl mb-8">Our Company</h3>
            <ul class="">
              <!-- <li class="pb-2"><router-link to="/about" class="text-white hover:text-turquoise transition">About Us</router-link></li> -->
              <li class="pb-2"><a href="/#contactUs" class="text-white hover:text-turquoise transition">Contact Us</a></li>
            </ul>
          </div>
          <p class="text-gray-light text-sm tracking-4 lg:hidden mt-14">&#169; 2001-2022 Pritzwalks</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-inner {
  max-width: 1300px;
  margin: 0 auto;
}
</style>

<script>
import Icons from './Icons.vue';

export default {
    components: { Icons },
}
</script>