<template lang="html">
  <div class="tooltip right zkt-table-tooltip" role="tooltip">
    <button type="button" class="close" aria-label="Close" @click="$emit('close:tooltip')">
      <span aria-hidden="true">&times;</span>
    </button>
      <div class="tooltip-inner">
        {{tip}}
      </div>
      <div class="tooltip-arrow"></div>
    </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    tip: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css">
.zkt-table-tooltip {
  display: inline-block;
  z-index: 1;
  opacity: 1;
}
.zkt-table-tooltip .close {
  position: absolute;
  top: 7px;
  right: 8px;
  color: #fff;
  opacity: .8;
  font-size: 10px;
}
.zkt-table-tooltip .tooltip-inner {
  padding-right: 15px;
  /* background-color: rgba(0,0,0, .3) */
}
</style>
