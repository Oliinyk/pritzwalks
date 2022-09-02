<template>
  <div class="bg-dark contact-section" id="contactUs">
    <div class="container mx-auto">
      <div class="pt-16 md:pb-40 pb-12 sm:px-4 px-8">
        <h2 class="font-mainbold text-5xl leading-none tracking-3 text-center text-white pt-12 md:pb-16 pb-10">Contact Us</h2>
        <div class="flex flex-wrap md:flex-nowrap items-center md:justify-between justify-center contact-inner">
          <div class="md:w-1/2 text-holder">
            <p class="text-white md:text-lg tracking-5 md:text-left text-center">Send us a message if you’d like to connect about promoting your academic programs and reaching international students!</p>
            <div class="mt-24 hidden md:block"><i class="arrow-right"></i></div>
          </div>

          <form class="md:w-1/2 md:pl-8 form-holder md:mt-0 mt-20" action="" method="POST">
            <div class="mb-14 text-white">
              <label>Name</label>
              <input name="name" class="border-b border-turquoise bg-transparent w-full outline-0" type="text" v-model="v$.form.name.$model" />
            </div>
            <div class="mb-14 text-white">
              <label>Email</label>
              <input name="email" class="border-b border-turquoise bg-transparent w-full outline-0" type="email" v-model="v$.form.email.$model" />
            </div>
            <div class="mb-14 text-white">
              <label>Subject</label>
              <input name="subject" class="border-b border-turquoise bg-transparent w-full outline-0" type="text" v-model="v$.form.subject.$model" />
            </div>
            <div class="mb-4 text-white">
              <label>Message</label>
              <textarea name="message" class="border-b border-turquoise bg-transparent w-full outline-0" type="text" v-model="v$.form.message.$model" />
            </div>
            <button :disabled="v$.form.$invalid" class="font-mainbold bg-turquoise text-white tracking-5 py-2.5 px-4 w-full rounded uppercase hover:bg-white hover:text-turquoise transition" :class="{ 'opacity-50': v$.form.$invalid }" type="submit">Send now</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-section {
  background-size: cover;
}
.contact-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.text-holder {
  max-width: 500px;
}
.form-holder {
  width: 100%;
  @screen md {
    max-width: 467px;
  }
  textarea {
    min-height: 120px;
  }
}
.arrow-right {
  @apply border-turquoise inline-block;
  border-width: 0 5px 5px 0;
  padding: 20px;
  margin-left: -20px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.contact-default {
  position: relative;
  overflow: hidden;
  &:after {
    @apply bg-gray absolute;
    content: '';
    width: calc(100% + 100px);
    height: 100px;
    left: -50px;
    top: -50px;
    transform: rotate(3deg);
  }
}
</style>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },
  validations() {
    return {
      form: {
        name: {
          required, 
          min: minLength(3)
        },
        email: {
          required, email 
        },
        subject: {
          required,
        },
        message: {
          required,
        },
      },
    }
  },
}
</script>
