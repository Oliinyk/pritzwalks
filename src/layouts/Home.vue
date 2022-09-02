<script>
import Header from './../components/Header.vue';
import Footer from './../components/Footer.vue';
import ContactUs from './../components/ContactUs.vue';
export default {
  components: { 
    Header,
    Footer,
    ContactUs,
  },
}
</script>

<template>
  <Header /> 
  <router-view />
  <ContactUs style="background-image: url('./src/assets/img/bg_contact.jpg')" />
  <Footer />
</template> 