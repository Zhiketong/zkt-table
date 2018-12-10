<template lang="html">
  <div class="popover bottom popover-filter">
    <div class="popover-content">
      <form class="popover-form"  @submit.prevent="onSubmit">
        <select class="form-control" v-model="value" @change="onChange">
          <option value="">请选择</option>
          <option v-for="option in options" :value="option.value">{{option.label}}</option>
        </select>
      </form>
    </div>
    <div class="arrow"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onChange (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="css">
.popover-filter.popover {
  display: block;
  top: 100%;
  left: 25%;
  margin-top: 0px;
  width: 50%;
}
</style>
