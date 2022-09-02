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
  <Header class="header-default" />
  <router-view />
  <ContactUs class="contact-default" style="background-image: url('./src/assets/img/bg2-contact.jpg')" />
  <Footer />
</template> 