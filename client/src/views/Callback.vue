<template>
  <div class="wrapper">
    <LoadingComponent message="Fetching Spotify super important settings..."/>
  </div>
</template>

<script>
import SpotifyApiService from '@/services/SpotifyApiService';
import SpotifySessionHelper from '@/helpers/SpotifySessionHelper';
import LoadingComponent from '@/components/LoadingComponent.vue';

export default {
  name: 'Callback',
  components: {
    LoadingComponent,
  },
  async mounted() {
    try {
      const response = await SpotifyApiService.getToken(this.$route.query.code);
      SpotifySessionHelper.setToken(response.access_token);
      this.$router.push({ name: 'Stats', params: { timePeriod: 'long_term' } });
    } catch (err) {
      SpotifySessionHelper.invalidateToken();
      this.$router.push({ name: 'Landing' });
    }
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
