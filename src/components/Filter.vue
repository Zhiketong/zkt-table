<template lang="html">
  <div class="dropdown-menu th-filter well well-sm">
      <form class="popover-form"  @submit.prevent="onSubmit">
        <select class="form-control" v-model="value" @change="onChange">
          <option value="">请选择</option>
          <option v-for="option in options" :value="option.value">{{option.label}}</option>
        </select>
      </form>
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
.th-filter {
  display: block;
}
</style>
