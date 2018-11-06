<template>
  <div class="popover bottom popover-search">
    <div class="popover-content">
      <form class="popover-form"  @submit.prevent="onSubmit">
        <input type="text" class="form-control input-sm" v-model="keyword">
      </form>
    </div>
    <div class="arrow"></div>
  </div>
</template>
<script>
  export default {
    name: 'TableSearch',
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      onSubmit () {
        this.$emit('search', this.keyword)
      }
    }
  }
</script>
<style>
.popover-search.popover {
  display: block;
  top: 100%;
  left: 25%;
  margin-top: 0px;
  width: 50%;
}
</style>
