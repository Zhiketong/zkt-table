<template>
  <table class="table zkt-table">
    <thead class="zkt-table-head">
      <tr>
        <th v-if="selectable">
          <input
          type="checkbox"
          :checked="data.length==selectedItems.length"
          v-model="selectedAll"
          ref="selectAll"
          @change="selectAll">
        </th>
        <Th
          v-for="(column, index) in columns"
          v-if="column.name"
          v-on="$listeners"
          v-bind="column"
          :key="index"
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
        <td v-for="(column,index) in columns" v-if="column.name" :key="index">
          <component
            v-bind="column"
            v-on="$listeners"
            :is="component||column.component"
            :value="row"
            :ref="'cell'+column.name"
           />
        </td>
      </tr>
    </tbody>
    <tfoot>
    </tfoot>
  </table>
</template>

<script>
  import Th from './Th.vue'
  import Buttons from './Buttons.vue'
  import Cell from './Cell.vue'

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
      selectable: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        selectedItems: [],
        selectedAll: false,
        component: 'Cell'
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
      }
    }
  }
</script>

<style>
  .zkt-table-head tr {
    background-color: #f2f2f2;
  }
</style>
