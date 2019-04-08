<template lang="html">
  <div class="zkt-table-cell-buttons">
      <button
      type="button"
      class="btn btn-xs"
      :class="action.class ? action.class : 'btn-link'"
      v-if="!action.visible || action.visible(value)"
      v-for="(action, key) in buttons"
      @click="$emit(action.value||key, value,action.value||key)">
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

<style lang="css" scoped >
.zkt-table-cell-buttons > button {
  margin-right: 4px;
}
</style>
