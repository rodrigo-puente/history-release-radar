<template>
  <div class="loader">
    <div class="spinner"></div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.loader {
  text-align: center;
}

h2 {
  padding: 0 60px;
  font-size: 2.5rem;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #1f1f1f;
}

.spinner {
  width: 80px;
  height: 80px;
  margin: 100px auto 40px auto;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>
