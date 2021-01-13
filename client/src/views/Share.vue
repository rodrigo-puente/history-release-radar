<template>
  <div class="wrapper">
    <div>
      <div class="content">
        <h2>
          {{ track }} by {{ artist }}
        </h2>
        <p>was released in {{ year }}, {{ timeAgoText }}.</p>
        <p class="url">https://release-radar.rodrigopuente.com</p>
      </div>
      <div class="links">
        <router-link :to="{ name: 'Stats', params: { timePeriod: back } }">
            GO BACK
        </router-link>
        <a href="#">DOWNLOAD TO SHARE</a>
      </div>
    </div>
  </div>
</template>

<script>
import MiscHelper from '@/helpers/MiscHelper';

export default {
  name: 'Share',
  data() {
    return {
      track: '',
      artist: '',
      year: '',
      timeAgoText: '',
      back: '',
    };
  },
  mounted() {
    this.track = this.$route.params.track;
    this.artist = this.$route.params.artist;
    this.back = this.$route.params.back;
    this.year = this.$route.params.year;
    this.timeAgoText = MiscHelper.timeAgoText(this.year).toLowerCase();
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

.content {
  margin: 15px;
  padding: 30px;
  background: #1f1f1f;

  h2 {
    font-family: "PT Serif",sans-serif;
    font-size: 2.2rem;
    margin: 0;
    line-height: 2.2rem;
    letter-spacing: .2rem;
    color: #c9a3be;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-family: 'Roboto', sans-serif;
    color: #f1f1f1;
    margin: 10px 0 0 0;
    letter-spacing: 0.1rem;
  }

  p.url {
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    margin: 0;
    line-height: 1rem;
    letter-spacing: .1rem;
    color: #c9a3be;
    text-transform: uppercase;
    text-align: center;
    margin: 10px 0 0 0;
  }
}

.links {
  text-align: center;
  padding: 30px 0;

  a {
    font-size: 1.4rem;
    margin: 0px 20px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.1rem;
    color: #1f1f1f;
  }
}
</style>
