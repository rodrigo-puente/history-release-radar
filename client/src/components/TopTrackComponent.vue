<template>
    <div class="track">
        <h2>{{ artist }}</h2>
        <p>{{ track }}</p>
        <router-link class="share"
            :to="{
                name: 'Share',
                params: {
                  year: year,
                  track: track,
                  artist: artist,
                  back: $route.params.timePeriod
                }
            }"
        >
            <ShareSVG/>
        </router-link>
    </div>
</template>

<script>
import ShareSVG from '@/assets/images/share.svg';

export default {
  name: 'TopTrackComponent',
  components: {
    ShareSVG,
  },
  props: {
    artist: {
      type: String,
      required: true,
    },
    track: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.track {
  background: #1f1f1f;
  display: inline-block;
  margin: 15px;
  padding: 30px;
  position: relative;

  h2 {
    color: #C9A3BE;
    font-family: 'PT Serif', sans-serif;
    font-size: 2.2rem;
    margin: 0;
    line-height: 2.2rem;
    letter-spacing: 0.2rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #f1f1f1;
    margin: 10px 0 0 0;
    letter-spacing: 0.1rem;
  }

  .share {
    position: absolute;
    right: 10px;
    bottom: 8px;
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: #C9A3BE
      }
    }
  }
}

@media (max-width: 600px) {

  .track {
    display: block;

    h2 {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
}
</style>
