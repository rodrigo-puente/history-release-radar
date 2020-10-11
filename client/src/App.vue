<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>
<style scoped lang="scss">
#app {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
