<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  components: { 
    Header,
    Footer,
  },
}
</script>

 <template> 
  <Header class="header-default" />
  <router-view />
  <Footer />
</template> 