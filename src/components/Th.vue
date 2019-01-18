<template>
  <th class="table-header">
    {{header}}
    <Sort v-if="sortable"  v-bind="$props" @sort="_onSort" />
    <i :class="{'glyphicon':true,'glyphicon-filter':filterable,'glyphicon-search':searchable}"
     @click="showDropdown=!showDropdown"></i>
    <Dropdown
      v-if="showDropdown"
      v-bind.sync="$props"
       v-on-clickaway="_onClickaway"
       @submit="$emit('search', $event)"
       />
  </th>
</template>
<script>
  import {directive as onClickaway} from 'vue-clickaway'
  import Sort from './Sort.vue'
  import Dropdown from './Dropdown.vue'
  export default {
    name: 'Th',
    directives: {
      onClickaway
    },
    components: {
      Sort,
      Dropdown
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
        showDropdown: false,
        query: ''
      }
    },
    methods: {
      _onSort (dir) {
        this.$emit('sort', {name: this.name, dir: dir})
      },
      _onClickaway () {
        this.showDropdown = false
      }
    }
  }
</script>
<style>
  .table-header {
    position: relative;
  }
  .table-header > i{
    color: #337ab7
  }
</style>
