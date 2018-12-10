<template>
  <th class="table-header">
    {{header}}
    <Sort v-if="sortable"  v-bind="$props" @sort="_onSort" />
    <i class="glyphicon glyphicon-search" v-if="searchable" @click="showPopover=!showPopover"></i>
    <Search v-if="searchable&&showPopover"  v-bind="$props" @search="_onSearch" />
    <i v-if="filterable" class="glyphicon glyphicon-filter" @click="showFilter=!showFilter"></i>
    <Select v-if="filterable&&showFilter" :options="options" @change="_onFilter"></Select>
  </th>
</template>
<script>
  import Sort from './Sort.vue'
  import Search from './Search.vue'
  import Filter from './Filter.vue'
  export default {
    name: 'Th',
    components: {
      Sort,
      Search,
      Select: Filter
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
      filterable: {
        type: Boolean,
        default: false
      },
      sortable: {
        type: Boolean,
        default: false
      },
      searchable: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        showPopover: false,
        showFilter: false
      }
    },
    methods: {
      _onSort (dir) {
        this.$emit('sort', {name: this.name, dir: dir})
      },
      _onSearch (keyword) {
        this.showPopover = false
        this.$emit('search', {name: this.name, keyword: keyword})
      },
      _onFilter (value) {
        this.showFilter = false
        this.$emit('filter', {name: this.name, value: value})
      }
    }
  }
</script>
<style>
  .table-header {
    position: relative;
  }
</style>
