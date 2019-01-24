<template lang="html">
  <div class="zkt-table-cell">
    {{filter(name, value)}}
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    name: {
      type: String,
      default: ''
    },
    filter: {
      type: Function,
      default (name, value) {
        return value[name]
      }
    }
  }
}
</script>

<style lang="css">
</style>
