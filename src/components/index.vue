<template>
  <table class="table zkt-table">
    <thead class="zkt-table-head">
      <tr v-if="beforeColumns">
        <Th
          v-for="(column, index) in beforeColumns"
          v-if="column.header"
          v-bind="header(column)"
          :key="index"
          />
      </tr>
      <tr>
        <th v-if="selectable" width="30">
          <input
          type="checkbox"
          v-model="selectedAll"
          ref="selectAll"
          @change="selectAll">
        </th>
        <Th
          v-for="(column, index) in columns"
          v-if="column.header"
          v-on="$listeners"
          v-bind="header(column)"
          :key="index"
          :searchQuery="searchParams[column.name]"
          :sortQuery="sortParams[column.name]"
          @search="onSearch"
          @sort="onSort"
          />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row,index) in data"
        :key="index"
        :ref="'row'+index">
        <td v-if="selectable">
          <input type="checkbox" v-model="selectedItems" :value="row" @change="$emit('select', selectedItems)">
        </td>
        <td
          v-for="(column,index) in columns"
          v-if="column.name"
          v-show="!column.merge"
          :ref="column.merge&&('group'+row[column.name])"
          :key="index">
          <component
            v-bind="column"
            v-on="$listeners"
            :is="column.component||component"
            :value="row"
            :ref="'cell'+column.name"
           />
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr v-if="!data||!data.length">
        <td class="text-center bg-warning"
        :colspan="this.selectable?columns.length+1:columns.length">
        {{this.loading?'加载中...': '啥也没有'}}
      </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
  import Th from './Th.vue'
  import Buttons from './Buttons.vue'
  import Cell from './Cell.vue'
  import omit from 'lodash.omit'

  export default {
    name: 'Table',
    components: {
      Th,
      Cell,
      Buttons
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      beforeColumns: {
        type: Array,
        default () {
          return []
        }
      },
      selectable: {
        type: Boolean,
        default: false
      },
      searchParams: {
        type: Object,
        default () {
          return {}
        }
      },
      sortParams: {
        type: Object,
        default () {
          return {}
        }
      },
      component: {
        type: String,
        default: 'Cell'
      },
      loading: {}
    },
    data () {
      return {
        selectedItems: [],
        selectedAll: false
      }
    },
    methods: {
      selectAll () {
        if (this.selectedAll) {
          this.selectedItems = this.data.slice()
        } else {
          this.selectedItems = []
        }
        this.$emit('select', this.selectedItems)
      },
      mergeCell () {
        Object.keys(this.$refs).forEach((key) => {
          if (!~key.indexOf('group')) return
          var firstEl = this.$refs[key][0]
          firstEl.style.display = ''
          firstEl.setAttribute('rowspan', this.$refs[key].length)
        })
      },
      onSearch (key, val) {
        this.searchParams[key] = val
        this.$forceUpdate()
      },
      onSort (key, val) {
        this.sortParams[key] = val
        this.$forceUpdate()
      },
      header (column) {
        return omit(column, 'style', 'class')
      }
    },
    mounted () {
      this.mergeCell()
    },
    updated () {
      this.mergeCell()
    }
  }
</script>

<style>
  .zkt-table-head tr {
    background-color: #f2f2f2;
  }
  .zkt-table.table>thead>tr>th {
    vertical-align: top;
    font-weight: normal;
  }
</style>
