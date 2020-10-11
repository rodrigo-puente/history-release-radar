<template>
  <div>
    <NavigationComponent/>
    <div class="stats-view" id="my-stats">
      <h1>YOUR {{ title }} WERE RELEASED:</h1>
      <LoadingComponent message='Loading your top tracks...' v-if="showLoader" />
      <TopTrackListComponent
        v-on:dataFetched="hideLoader"
        v-bind:timePeriod="$route.params.timePeriod"/>
    </div>
  </div>
</template>

<script>
import LoadingComponent from '@/components/LoadingComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import TopTrackListComponent from '@/components/TopTrackListComponent.vue';

export default {
  name: 'Stats',
  data() {
    return {
      showLoader: true,
    };
  },
  components: {
    LoadingComponent,
    TopTrackListComponent,
    NavigationComponent,
  },
  computed: {
    title() {
      const { timePeriod } = this.$route.params;
      let title = '';
      if (timePeriod === 'long_term') {
        title = 'ALL-TIMER TOP TRACKS';
      } if (timePeriod === 'medium_term') {
        title = 'TOP TRACKS IN THE LAST 6 MONTHS';
      } if (timePeriod === 'short_term') {
        title = 'TOP TRACKS IN THE LAST 4 WEEKS';
      }
      return title;
    },
  },
  methods: {
    hideLoader() {
      this.showLoader = false;
    },
  },
};
</script>

<style scoped lang="scss">
.stats-view {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 5rem;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin: 30px 0 40px 0;
  color: #1f1f1f;
}

@media (max-width: 600px) {
  .stats-view {
    width: 94%;
  }

  h1 {
    font-size: 3rem;
    margin: 40px 0;
  }
}
</style>
