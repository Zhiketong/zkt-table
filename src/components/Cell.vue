<template lang="html">
  <div class="zkt-table-cell">
    {{val}}
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
    filters: {
      type: String
    },
    filter: {
      type: Function,
      default (value) {
        return value
      }
    }
  },
  computed: {
    val () {
      var r = this.value[this.name]
      if (this.filters) {
        this.filters.split('|').forEach((item) => {
          r = this.$options.filters[item](r, this.value)
        })
      } else if (this.filter) {
        r = this.filter(r, this.value)
      }
      return r
    }
  }
}
</script>

<style lang="css">
</style>
