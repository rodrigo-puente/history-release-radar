<template>
  <div class="wrapper">
    <div class="content">
      <h1>RELEASE RADAR</h1>
      <h2>When was your favorite music released?</h2>
      <SpotifyLoginComponent/>
    </div>
  </div>
</template>

<script>
import SpotifyLoginComponent from '@/components/SpotifyLoginComponent.vue';

export default {
  name: 'Landing',
  components: {
    SpotifyLoginComponent,
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
  padding: 0 60px;
}

h1 {
  font-size: 5rem;
  margin: 0;
}

h2 {
  font-size: 3rem;
  margin: 0 0 50px 0;
}

h1, h2 {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #1f1f1f;
}

@media (max-width: 770px) {
  h1 {
    line-height: 5rem;
    margin-bottom: 30px;
  }
}
</style>
