<template>
  <div class="dropdown-menu th-search well well-sm">
      <form class="popover-form"  @submit.prevent="onSubmit">
        <div class="input-group">
          <input type="text" class="form-control input-sm" v-model="keyword">
          <span class="input-group-btn">
            <button class="btn btn-default btn-sm"><i class="glyphicon glyphicon-search"></i></button>
          </span>
        </div>
      </form>
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
.th-search {
  display: block;
}
</style>
