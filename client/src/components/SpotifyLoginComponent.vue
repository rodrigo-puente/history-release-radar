<template>
  <div>
    <a :href="url">SIGN IN WITH SPOTIFY</a>
  </div>
</template>

<script>
import SpotifyApiService from '@/services/SpotifyApiService';

export default {
  name: 'SpotifyLoginComponent',
  data: () => ({
    url: '',
  }),
  methods: {
    async getLoginUrl() {
      try {
        const response = await SpotifyApiService.getLoginUrl();
        this.url = response.url;
      } catch (error) {
        console.log('something happened');
      }
    },
  },
  async created() {
    await this.getLoginUrl();
  },
};
</script>

<style scoped lang="scss">
div {
  display: inline-block;

  a {
    color: #C9A3BE;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 2.2rem;
    margin: 0;
    line-height: 2.2rem;
    letter-spacing: 0.2rem;
  }
}
</style>
