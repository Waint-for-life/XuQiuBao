<template>
  <div>
  <i-button type="default" ghost>Default</i-button>
  <i-button type="primary" ghost>Primary</i-button>
  <i-button type="dashed" ghost>Dashed</i-button>
  <i-button type="text" ghost>Text</i-button>
  <i-button type="info" ghost>Info</i-button>
  <i-button type="success" ghost>Success</i-button>
  <i-button type="warning" ghost>Warning</i-button>
  <i-button type="error" ghost>Error</i-button>
  </div>
</template>

<script>
  export default {
    name: 'index.vue',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.releaseInfo {
  font-size: 22px;
}
</style>
