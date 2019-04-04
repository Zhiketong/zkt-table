<template>
  <th class="table-header">
    {{header}}
    <Sort v-if="sortable"  v-bind="$props" @sort="_onSort" />
    <i :class="{'glyphicon':true,'glyphicon-filter':filterable,'glyphicon-search':searchable}"
     @click="showDropdown=!showDropdown"></i>
    <Tooltip v-if="query" :tip="query.label||query" @close:tooltip="$emit('search', name, '')&&(query='')" />
    <Dropdown
      v-if="showDropdown"
      v-bind.sync="$props"
       v-on-clickaway="_onClickaway"
       @submit="_onSearch"
       />
  </th>
</template>
<script>
  import onClickaway from '../directives/clickaway'
  import Sort from './Sort.vue'
  import Dropdown from './Dropdown.vue'
  import Tooltip from './Tooltip.vue'

  export default {
    name: 'Th',
    directives: {
      onClickaway
    },
    components: {
      Sort,
      Dropdown,
      Tooltip
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
      searchQuery: {
        type: String,
        default: ''
      },
      options: {
        default () {
          return []
        }
      }
    },
    data () {
      return {
        showDropdown: false,
        query: this.searchQuery
      }
    },
    created () {
      this.query = Array.isArray(this.options) && this.options.find(item => item.value === this.searchQuery || item === this.searchQuery) || this.options[this.searchQuery] || this.searchQuery
    },
    methods: {
      _onSort (dir) {
        this.$emit('sort',this.name, dir)
      },
      /**
       * query
       * 对 input 是 输入值
       * 对 select 是 option的索引
       */
      _onSearch (query) {
        this.query = this.options[query]
        this.showDropdown = false
        this.$emit('search', this.name, Array.isArray(this.options) && (this.query && this.query.value || this.query) || query)
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
