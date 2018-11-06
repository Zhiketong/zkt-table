<template>
  <th class="table-header">
    {{header}}
    <Sort v-if="sortable"  v-bind="$props" @sort="_onSort" />
    <i class="glyphicon glyphicon-search" v-if="searchable" @click="showPopover=!showPopover"></i>
    <Search v-if="searchable&&showPopover"  v-bind="$props" @search="_onSearch" />
  </th>
</template>
<script>
  import Sort from './Sort.vue'
  import Search from './Search.vue'
  export default {
    name: 'Th',
    components: {
      Sort,
      Search
    },
    props: {
      header: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      sortable: {
        type: Boolean,
        default: false
      },
      searchable: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showPopover: false
      }
    },
    methods: {
      _onSort (dir) {
        this.$emit('sort', {name: this.name, dir: dir})
      },
      _onSearch (keyword) {
        this.showPopover = false
        this.$emit('search', {name: this.name, keyword: keyword})
      }
    }
  }
</script>
<style>
  .table-header {
    position: relative;
  }
</style>
