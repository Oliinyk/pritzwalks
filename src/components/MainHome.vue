<template>
  <div class="bg-gray relative websites-section" id="ourWebsites">
    <div class="container mx-auto">
      <div class="sm:pt-20 lg:pb-32 pb-16 websites-inner">
        <h2 class="font-mainbold text-5xl leading-none tracking-3 text-center lg:mb-36 mb-10">Our Websites</h2>
        <div class="flex items-center lg:justify-between lg:mb-20 mb-8 flex-wrap lg:flex-nowrap">
          <a href="https://llm-guide.com" target="_blank">
            <picture>
              <source type="image/webp" srcset="../assets/img/llm_guide.webp 1x, ../assets/img/llm_guide@2x.webp 2x ">
              <img src="../assets/img/llm_guide.png" srcset="../assets/img/llm_guide.png 1x, ../assets/img/llm_guide@2x.png 2x" alt="llm_guide">
            </picture>
          </a>
          <div class="lg:ml-10 text-holder lg:w-auto w-full">
            <a href="https://llm-guide.com" target="_blank">
              <h3 class="text-2.5xl lg:text-md leading-9 font-mainbold tracking-3 lg:mb-14 mb-4">LLM GUIDE: Master of Laws Programs Worldwide</h3>
              <p class="tracking-5">A global community for prospective LL.M. students, and a directory of over 3,000 law programs.</p>
            </a>
          </div>
        </div>

        <div class="flex items-center justify-between lg:mb-20 mb-8 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
          <div class="lg:mr-10 text-holder">
            <a href="https://find-mba.com" target="_blank">
              <h3 class="text-2.5xl lg:text-md leading-9 font-mainbold tracking-3 lg:mb-14 mb-4">FIND MBA: Business Schools Worldwide</h3>
              <p class="tracking-5">A global MBA directory: 7,500 MBA schools and counting. MBA community discussion boards, MBA program info and Top 10 Lists.</p>
            </a>
          </div>
          <a href="https://find-mba.com" target="_blank">
            <picture>
              <source type="image/webp" srcset="../assets/img/find_mba.webp 1x, ../assets/img/find_mba@2x.webp 2x ">
              <img src="../assets/img/find_mba.png" srcset="../assets/img/find_mba.png 1x, ../assets/img/find_mba@2x.png 2x" alt="find_mba">
            </picture>
          </a>
        </div>

        <div class="flex items-center justify-between lg:mb-20 mb-8 flex-wrap lg:flex-nowrap">
          <a href="https://findmbaonline.com" target="_blank">
            <picture>
              <source type="image/webp" srcset="../assets/img/find_mba_online.webp 1x, ../assets/img/find_mba_online@2x.webp 2x ">
              <img src="../assets/img/find_mba_online.png" srcset="../assets/img/find_mba_online.png 1x, ../assets/img/find_mba_online@2x.png 2x" alt="find_mba_online">
            </picture>
          </a>
          <div class="lg:ml-10 text-holder">
            <a href="https://findmbaonline.com" target="_blank">
              <h3 class="text-2.5xl lg:text-md leading-9 font-mainbold tracking-3 lg:mb-14 mb-4">FIND MBA Online: Distance Learning Business Masters Programs</h3>
              <p class="tracking-5">Listing Online MBA programs offered by business schools everywhere.</p>
            </a>
          </div>
        </div>

        <div class="flex items-center justify-between lg:mb-0 mb-8 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
          <div class="lg:mr-10 text-holder">
            <a href="https://executivecourses.com" target="_blank">
              <h3 class="text-2.5xl lg:text-md leading-9 font-mainbold tracking-3 lg:mb-14 mb-4">Executive Courses</h3>
              <p class="tracking-5">A global community for prospective executive education and Executive MBA participants, and a directory of executive courses everywhere.</p>
            </a>
          </div>
          <a href="https://executivecourses.com" target="_blank">
            <picture>
              <source type="image/webp" srcset="../assets/img/executive_courses.webp 1x, ../assets/img/executive_courses@2x.webp 2x ">
              <img src="../assets/img/executive_courses.png" srcset="../assets/img/executive_courses.png 1x, ../assets/img/executive_courses@2x.png 2x" alt="executive_courses">
            </picture>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
.websites-section {
  overflow: hidden;
  &:after {
    @apply bg-white absolute;
    content: '';
    width: calc(100% + 100px);
    height: 100px;
    left: -50px;
    bottom: -50px;
    transform: rotate(3deg);
  }
}
</style>