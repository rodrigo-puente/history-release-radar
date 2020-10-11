<template>
  <div class="navigation">
    <div class="clock" v-on:click="openMenu">
      <ClockSVG/>
    </div>
    <div id="menu">
      <ul>
        <li>
          <router-link :to="{ name: 'Stats', params: { timePeriod: 'long_term'} }">
            ALL-TIMER
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Stats', params: { timePeriod: 'medium_term'} }">
            LAST 6 MONTHS
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Stats', params: { timePeriod: 'short_term'} }">
            LAST 4 WEEKS
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClockSVG from '@/assets/images/clock.svg';

export default {
  name: 'NavigationComponent',
  components: {
    ClockSVG,
  },
  methods: {
    openMenu() {
      const navigation = document.getElementsByClassName('navigation');
      navigation[0].classList.toggle('active');
    },
  },
};
</script>

<style scoped lang="scss">
.navigation {
  position: absolute;
  right: 0;
  top: 0;

  .clock {
    position: absolute;
    right: 30px;
    top: 40px;
    width: 40px;
    height: 40px;

    svg path {
      fill: #C9A3BE;
    }
  }

  #menu {
    display: none;
  }

  &.active {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #1f1f1f;

    #menu {
      display: block;

      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
          padding: 20px 60px;
        }
      }
    }
  }
}

a {
  font-size: 3rem;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: white;
  text-decoration: none;;
}

.router-link-active {
  color: #C9A3BE;
}

@media (max-width: 600px) {
  .navigation {

    .clock {
      top: 50px;
    }
  }
}
</style>
