<template>
  <div class="group-component">
    <div class="year">
      <div>
        <h2>{{ timeAgoText }}</h2>
        <p>({{ year }})</p>
      </div>
    </div>
    <div class="tracks">
      <div class="track" v-for="(track, idx) in tracksData" v-bind:key="idx">
        <h2>{{ track.artists.map( e=> e.name).join("& ") }}</h2>
        <p>{{ track.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import stickybits from 'stickybits';

export default {
  name: 'TopTracksGroupComponent',
  props: {
    tracks: {
      type: Array,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tracksData: [],
    };
  },
  computed: {
    timeAgoText() {
      const timeAgoNum = moment().year() - parseInt(this.year, 10);
      if (timeAgoNum === 0) return 'THIS YEAR';
      if (timeAgoNum === 1) return 'A YEAR AGO';
      return `${timeAgoNum} YEARS AGO`;
    },
  },
  methods: {
    sortTracksAscending(a, b) {
      const aNameLower = a.name.toLowerCase();
      const bNameLower = b.name.toLowerCase();
      if (aNameLower > bNameLower) return 1;
      if (bNameLower > aNameLower) return -1;
      return 0;
    },
  },
  mounted() {
    stickybits('.year div', { stickyBitStickyOffset: 30 });
    this.tracksData = [...this.tracks].sort(this.sortTracksAscending);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.group-component {
  display: grid;
  grid-template-columns: 2fr 10fr;
  margin-bottom: 60px;
}

.year {
  border-top: #C9A3BE 1px solid;
  margin: 15px;
  padding-top: 30px;

  h2, p {
    color: #1f1f1f;
    margin: 0;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  h2 {
    line-height:  2rem;
    font-size: 2rem;
  }

  p {
    margin-top: 10px;
    line-height:  1.5rem;
    font-size: 1.5rem;
  }
}

.track {
  background: #1f1f1f;
  display: inline-block;
  margin: 15px;
  padding: 30px;

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
}

@media (max-width: 600px) {

  .group-component {
    display: block;
    grid-template-columns: none;
  }

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
