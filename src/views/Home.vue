<template>
  <div class="home">
    <!-- <Banner bannerImg="homepage_banner.png"></Banner> -->
    <div class="home-container">

      <SimulatorCard></SimulatorCard>
  
    </div>
  </div>
</template>

<script>
// import Banner from '@/components/main/Banner.vue';

import SimulatorCard from '@/components/homepage/SimulatorCard.vue';


export default {
  components: {
    // Banner,

    SimulatorCard,

  },
};
</script>

<style lang="scss" scoped>
.home-container {
  padding: 2rem 0;
  background-color: #ffffff !important;
}
</style>
