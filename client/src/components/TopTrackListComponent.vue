<template>
  <div id="fullpage">
    <TopTracksGroupComponent
      v-for="(tracks, year) in tracksByYear"
      v-bind:key="year"
      v-bind:year="year"
      v-bind:tracks="tracks" />
    <PieChartComponent v-bind:timePeriod="timePeriod"/>
  </div>
</template>

<script>
import SpotifyApiService from '@/services/SpotifyApiService';
import SpotifySessionHelper from '@/helpers/SpotifySessionHelper';
import TopTracksGroupComponent from '@/components/TopTracksGroupComponent.vue';
import PieChartComponent from '@/components/PieChartComponent.vue';

export default {
  name: 'TopTrackListComponent',
  props: {
    timePeriod: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tracksByYear: [],
    };
  },
  components: {
    TopTracksGroupComponent,
    PieChartComponent,
  },
  methods: {
    groupByYear(result, currentValue) {
      /* eslint-disable no-param-reassign */
      const releaseDate = currentValue.album.release_date.split('-');
      const key = parseInt(releaseDate[0], 10);
      if (!result[key]) result[key] = [];
      result[key].push(currentValue);
      return result;
      /* eslint-enable no-param-reassign */
    },
  },
  async mounted() {
    try {
      const token = SpotifySessionHelper.getToken();
      const response = await SpotifyApiService.getTopTracks(token, this.timePeriod);
      this.tracksByYear = response.items.reduce(this.groupByYear, {});
      this.$emit('dataFetched');
    } catch (err) {
      SpotifySessionHelper.invalidateToken();
      this.$router.push({ name: 'Landing' });
    }
  },
};
</script>
