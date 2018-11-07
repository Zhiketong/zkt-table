<template>
  <table class="table">
    <thead>
      <tr>
        <Th
          v-for="(column, index) in columns"
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
        <td v-for="(column,index) in columns" :key="index">
          <span v-bind="column" v-html="row[column.name]" v-if="!column.component"></span>
          <component
            v-bind="column"
            v-if="column.component"
            :is="column.component"
            :value="row"
            :ref="'cell'+column.name" />
        </td>
      </tr>
    </tbody>
    <tfoot>
    </tfoot>
  </table>
</template>

<script>
  import Th from './Th.vue'
  export default {
    name: 'Table',
    components: {
      Th
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
    }
  }
</script>
