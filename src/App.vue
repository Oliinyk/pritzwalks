<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ContactUs from './components/ContactUs.vue';
import { RouterView, RouterLink, useRoute } from "vue-router";
import { ref, computed } from "vue";
const route = useRoute();
let layout = computed(() => route.meta.layout);
</script>

<template>
  <component :is="layout" />
</template>
