<template lang="html">
  <div class="zkt-table-cell-buttons">
      <button
      type="button"
      class="btn btn-xs btn-link"
      v-for="(action, key) in buttons"
      @click="$emit(action.value||key, value)">
      {{action.name||action}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      default () {
        return {}
      }
    },
    value: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="css">
</style>
