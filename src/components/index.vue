<template>
  <table class="table zkt-table">
    <thead class="zkt-table-head">
      <tr>
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
        <td v-for="(column,index) in columns" v-if="column.name" :key="index">
          <span v-bind="column" v-html="row[column.name]" v-if="!column.component"></span>
          <component
            v-bind="column"
            v-if="column.component"
            :is="column.component"
            :value="row"
            :ref="'cell'+column.name"
            @action="_onAction" />
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
  export default {
    name: 'Table',
    components: {
      Th,
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
      }
    },
    methods: {
      _onAction (key, row) {
        this.$emit(key, row)
      }
    }
  }
</script>

<style>
  .zkt-table-head tr {
    background-color: #f2f2f2;
  }
</style>
