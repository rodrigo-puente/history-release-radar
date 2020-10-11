<template>
  <div class="wrapper">
    <div class="content">
      <h1>When was your<br/>favorite music released?</h1>
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
  font-size: 3rem;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #1f1f1f;
}
</style>
